"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import { hospitalLocations } from "@/data/locations";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Calendar,
  Ambulance,
  Search,
  Crosshair,
  Car,
  Accessibility,
  Bus,
  ArrowUpDown,
  DoorOpen,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  AlertCircle,
  Building,
  HeartPulse,
} from "lucide-react";

const filterCategories = [
  "Semua",
  "Rumah Sakit",
  "Klinik",
  "Children's & Maternal",
  "Diagnostic Center",
  "Medical Check-Up",
];

// Akses & Transportasi 6 Poin
const accessItems = [
  {
    icon: Car,
    title: "Area Parkir & Valet",
    desc: "Gedung parkir 24 jam dengan sistem keamanan digital serta layanan Valet Parking gratis di lobi utama.",
  },
  {
    icon: DoorOpen,
    title: "Lobi Drop-Off Pasien",
    desc: "Area drop-off berkanopi luas untuk kemudahan naik-turun pasien lansia, anak-anak, dan pengguna kursi roda.",
  },
  {
    icon: Accessibility,
    title: "Aksesibilitas & Kursi Roda",
    desc: "Jalur landai (ramp), toilet ramah disabilitas, dan kursi roda siaga di setiap pintu masuk lobi.",
  },
  {
    icon: Bus,
    title: "Akses Transportasi Umum",
    desc: "Terintegrasi dengan jaringan rute TransJakarta dan stasiun MRT/KRL dengan akses jembatan penyeberangan aman.",
  },
  {
    icon: HeartPulse,
    title: "Jalur Cepat Ambulans",
    desc: "Akses khusus bebas hambatan langsung menuju pintu triage Instalasi Gawat Darurat (IGD) 24 jam.",
  },
  {
    icon: ArrowUpDown,
    title: "Lift Pasien & Pengunjung",
    desc: "Lift medis khusus brankar pasien berstandar steril serta lift pengunjung berkecepatan tinggi.",
  },
];

// Helper formula Haversine distance (km)
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

export default function LocationsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLocationId, setSelectedLocationId] = useState<string>("loc-01");
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [geoStatus, setGeoStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [geoMessage, setGeoMessage] = useState<string>("");

  // Filter facilities
  const filteredLocations = useMemo(() => {
    return hospitalLocations.filter((loc) => {
      // Match category
      const matchCategory =
        selectedCategory === "Semua" ||
        loc.filterTags.includes(selectedCategory) ||
        (selectedCategory === "Rumah Sakit" && loc.type.toLowerCase().includes("rumah sakit")) ||
        (selectedCategory === "Klinik" && loc.type.toLowerCase().includes("klinik"));

      // Match search query
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        loc.name.toLowerCase().includes(q) ||
        loc.city.toLowerCase().includes(q) ||
        loc.address.toLowerCase().includes(q) ||
        loc.type.toLowerCase().includes(q) ||
        loc.facilities.some((f) => f.toLowerCase().includes(q));

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Compute distances if user shared location
  const distances = useMemo(() => {
    if (!userCoords) return {};
    const res: Record<string, number> = {};
    hospitalLocations.forEach((loc) => {
      res[loc.id] = calculateDistance(
        userCoords.lat,
        userCoords.lng,
        loc.coordinates.lat,
        loc.coordinates.lng
      );
    });
    return res;
  }, [userCoords]);

  // Find currently active location for the map
  const activeLocation = useMemo(() => {
    return (
      hospitalLocations.find((l) => l.id === selectedLocationId) ||
      hospitalLocations[0]
    );
  }, [selectedLocationId]);

  // Geolocation trigger
  const handleUseMyLocation = () => {
    if (typeof window === "undefined" || !navigator.geolocation) {
      setGeoStatus("error");
      setGeoMessage("Browser Anda tidak mendukung layanan penentuan lokasi geolokasi.");
      return;
    }

    setGeoStatus("loading");
    setGeoMessage("Mendeteksi posisi Anda...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserCoords(coords);
        setGeoStatus("success");

        // Find nearest facility
        let nearestLoc = hospitalLocations[0];
        let minD = calculateDistance(coords.lat, coords.lng, nearestLoc.coordinates.lat, nearestLoc.coordinates.lng);

        hospitalLocations.forEach((loc) => {
          const d = calculateDistance(coords.lat, coords.lng, loc.coordinates.lat, loc.coordinates.lng);
          if (d < minD) {
            minD = d;
            nearestLoc = loc;
          }
        });

        setSelectedLocationId(nearestLoc.id);
        setGeoMessage(`Lokasi terdeteksi! Fasilitas terdekat dari Anda: ${nearestLoc.name} (~${minD} km)`);
      },
      (err) => {
        setGeoStatus("error");
        if (err.code === err.PERMISSION_DENIED) {
          setGeoMessage("Izin akses lokasi tidak diberikan. Anda tetap dapat memilih fasilitas secara manual.");
        } else {
          setGeoMessage("Gagal memperoleh koordinat GPS. Silakan gunakan daftar fasilitas di bawah.");
        }
      },
      { timeout: 10000, enableHighAccuracy: false }
    );
  };

  // Scroll smoothly to facility card
  const scrollToFacility = (id: string) => {
    setSelectedLocationId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Generate OpenStreetMap embed iframe URL
  const mapEmbedUrl = useMemo(() => {
    const lat = activeLocation.coordinates.lat;
    const lng = activeLocation.coordinates.lng;
    const deltaLat = 0.035;
    const deltaLng = 0.055;
    const minLon = (lng - deltaLng).toFixed(5);
    const minLat = (lat - deltaLat).toFixed(5);
    const maxLon = (lng + deltaLng).toFixed(5);
    const maxLat = (lat + deltaLat).toFixed(5);

    return `https://www.openstreetmap.org/export/embed.html?bbox=${minLon}%2C${minLat}%2C${maxLon}%2C${maxLat}&layer=mapnik&marker=${lat}%2C${lng}`;
  }, [activeLocation]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* HERO SECTION (Preserved) */}
        <section className="relative w-full bg-[#00205B] text-white py-14 sm:py-20 md:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/sites/hopkinsmedicine/images/locations_hero_bg.jpeg"
              alt="Gedung Rumah Sakit dan Fasilitas Pasien Shilah Medicine"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Elegant Translucent Blue Overlay */}
          <div className="absolute inset-0 bg-[#002D72]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001D4A]/85 via-[#002D72]/35 to-black/40" />

          {/* Foreground Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-black/35 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4 border border-white/30 shadow-md">
              Jaringan Fasilitas Kesehatan
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] leading-tight">
              Lokasi Rumah Sakit &amp; Fasilitas Pasien
            </h1>
            <p className="text-xs sm:text-base md:text-lg text-white font-normal max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Jaringan rumah sakit dan klinik spesialis Shilah Medicine hadir di lokasi strategis untuk menjamin kemudahan akses pelayanan kesehatan Anda.
            </p>
          </div>
        </section>

        {/* 1. SEARCH & FILTER SECTION */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Pencarian Fasilitas
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#00205B]">
                  Temukan Fasilitas Shilah Medicine
                </h2>
              </div>

              {/* Geolocation Button - Requirement 7 */}
              <button
                type="button"
                onClick={handleUseMyLocation}
                disabled={geoStatus === "loading"}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-blue-50 text-[#002D72] hover:text-[#0077C8] border border-gray-200 hover:border-blue-200 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer shadow-2xs"
              >
                <Crosshair className={`w-4 h-4 text-[#0077C8] ${geoStatus === "loading" ? "animate-spin" : ""}`} />
                <span>Gunakan Lokasi Saya</span>
              </button>
            </div>

            {/* Geolocation status message if active */}
            {geoStatus !== "idle" && (
              <div
                className={`mb-5 p-3 rounded-xl text-xs flex items-start gap-2.5 ${
                  geoStatus === "success"
                    ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
                    : geoStatus === "loading"
                    ? "bg-blue-50 text-blue-900 border border-blue-200"
                    : "bg-amber-50 text-amber-900 border border-amber-200"
                }`}
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{geoMessage}</span>
              </div>
            )}

            {/* Search Input */}
            <div className="relative mb-5">
              <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="🔍 Cari fasilitas, lokasi, atau layanan..."
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#0077C8] transition-colors"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#00205B] text-white shadow-xs"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 2. INTERACTIVE MAP SECTION */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
            {/* Map Header */}
            <div className="p-6 sm:p-7 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/60">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0077C8] block mb-1">
                  Peta Lokasi Interaktif
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#00205B]">
                  Lokasi Fasilitas Kami
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Pilih fasilitas untuk memusatkan peta dan mendapatkan petunjuk arah navigasi.
                </p>
              </div>

              {/* Facility switcher pills on map */}
              <div className="flex flex-wrap gap-2">
                {hospitalLocations.map((loc) => {
                  const isActive = activeLocation.id === loc.id;
                  return (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setSelectedLocationId(loc.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? "bg-[#0077C8] text-white shadow-xs"
                          : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      <MapPin className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#0077C8]"}`} />
                      <span className="truncate max-w-[130px] sm:max-w-[160px]">
                        {loc.name.replace("Shilah ", "")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Map Canvas + Overlay Details Card */}
            <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] bg-slate-100">
              {/* Real OpenStreetMap Tile Embed without API Key requirement */}
              <iframe
                title="Peta Lokasi Shilah Medicine"
                src={mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
              />

              {/* Floating Active Facility Overlay Info Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-xl space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#0077C8] border border-blue-100 uppercase">
                    {activeLocation.type}
                  </span>
                  {distances[activeLocation.id] !== undefined && (
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      ~{distances[activeLocation.id]} km dari Anda
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#00205B] leading-snug">
                    {activeLocation.name}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 flex items-start gap-1.5 leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                    <span>{activeLocation.address}</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => scrollToFacility(activeLocation.id)}
                    className="flex-1 py-1.5 px-3 bg-slate-100 hover:bg-slate-200 text-gray-800 font-semibold rounded-lg transition-colors text-center cursor-pointer text-xs"
                  >
                    Lihat Detail
                  </button>
                  <a
                    href={activeLocation.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 px-3 bg-[#0077C8] hover:bg-[#005a99] text-white font-semibold rounded-lg transition-colors text-center flex items-center justify-center gap-1.5 text-xs shadow-2xs"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Petunjuk Arah</span>
                  </a>
                </div>
              </div>

              {/* OpenStreetMap External Attribution */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] text-gray-500 shadow-xs hidden sm:block">
                <span>Peta: OpenStreetMap Contributors</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4 & 5. LOCATIONS LIST & CARDS (Enhanced Hierarchy, SVG Icons, Thumbnail) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0077C8] block mb-1">
                Jaringan Pelayanan
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#00205B]">
                Daftar Rumah Sakit &amp; Fasilitas
              </h3>
            </div>
            <span className="text-xs font-semibold text-gray-500 bg-slate-100 px-3 py-1 rounded-full">
              {filteredLocations.length} Fasilitas Ditemukan
            </span>
          </div>

          {filteredLocations.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-gray-200 max-w-md mx-auto">
              <Building className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h4 className="font-serif text-lg font-bold text-gray-800 mb-1">
                Fasilitas Tidak Ditemukan
              </h4>
              <p className="text-xs text-gray-500 mb-5">
                Tidak ada fasilitas yang cocok dengan filter &ldquo;{selectedCategory}&rdquo; dan kata kunci &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("Semua");
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-[#0077C8] text-white text-xs font-semibold rounded-xl"
              >
                Tampilkan Semua Fasilitas
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredLocations.map((loc) => {
                const isSelected = selectedLocationId === loc.id;
                const distanceVal = distances[loc.id];

                return (
                  <div
                    key={loc.id}
                    id={loc.id}
                    onClick={() => setSelectedLocationId(loc.id)}
                    className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-xs hover:shadow-md ${
                      isSelected
                        ? "ring-2 ring-[#0077C8] border-[#0077C8]"
                        : "border-gray-200 hover:border-[#0077C8]/60"
                    }`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      {/* Facility Photo Thumbnail - Requirement 5 */}
                      <div className="lg:col-span-4 relative h-[210px] sm:h-[240px] lg:h-full bg-slate-100 overflow-hidden">
                        <Image
                          src={loc.image}
                          alt={loc.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        <div className="absolute top-3.5 left-3.5">
                          <span className="inline-block text-[11px] font-semibold bg-white/95 text-[#00205B] px-3 py-1 rounded-full shadow-2xs backdrop-blur-xs">
                            {loc.city}
                          </span>
                        </div>
                        {distanceVal !== undefined && (
                          <div className="absolute bottom-3 left-3.5">
                            <span className="text-[11px] font-bold text-white bg-emerald-600/90 px-2.5 py-1 rounded-full shadow-xs">
                              ~{distanceVal} km dari lokasi Anda
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Card Content with strict hierarchy - Requirement 4 */}
                      <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                          {/* 1. Nama & 2. Jenis fasilitas */}
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 border-b border-gray-100">
                            <div>
                              <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-[#0077C8] border border-blue-100 mb-1.5">
                                {loc.type}
                              </span>
                              <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                                {loc.name}
                              </h3>
                            </div>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedLocationId(loc.id);
                                window.scrollTo({ top: 450, behavior: "smooth" });
                              }}
                              className="self-start text-xs font-semibold text-[#0077C8] hover:underline flex items-center gap-1 shrink-0"
                            >
                              <MapPin className="w-3.5 h-3.5" />
                              <span>Lihat di Peta</span>
                            </button>
                          </div>

                          {/* 3, 4, 5, 6. Alamat, Telepon, Emergency, Jam Operasional */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5 text-xs sm:text-sm text-gray-600 border-b border-gray-100">
                            <div className="space-y-2.5">
                              {/* 3. Alamat */}
                              <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                <span className="leading-snug">{loc.address}</span>
                              </div>
                              {/* 4. Telepon */}
                              <div className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-[#0077C8] shrink-0" />
                                <span>
                                  Telepon Informasi: <a href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`} className="font-bold text-gray-800 hover:text-[#0077C8] hover:underline">{loc.phone}</a>
                                </span>
                              </div>
                            </div>

                            <div className="space-y-2.5">
                              {/* 5. Emergency / IGD */}
                              <div className="flex items-start gap-2.5 text-red-600 font-semibold">
                                <Ambulance className="w-4 h-4 shrink-0 mt-0.5" />
                                <div>
                                  <span className="block text-[11px] text-gray-500 uppercase font-medium">Layanan Gawat Darurat:</span>
                                  <a href="tel:021500911" className="hover:underline">
                                    {loc.emergency}
                                  </a>
                                </div>
                              </div>
                              {/* 6. Jam Operasional */}
                              <div className="flex items-start gap-2.5 text-gray-600">
                                <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                <span className="leading-snug">{loc.hours}</span>
                              </div>
                            </div>
                          </div>

                          {/* 7. Fasilitas & Layanan Unggulan */}
                          <div className="pt-5 pb-6">
                            <h4 className="text-xs font-bold text-[#002D72] uppercase tracking-wider mb-3">
                              Fasilitas &amp; Layanan Unggulan:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                              {loc.facilities.map((fac, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0077C8] shrink-0 mt-0.5" />
                                  <span className="leading-relaxed">{fac}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* 8. CTA Buttons (Preserved styles & action) */}
                        <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap gap-2.5 w-full sm:w-auto">
                            <Link
                              href={`/appointments?location=${encodeURIComponent(loc.name)}`}
                              className="inline-flex items-center justify-center space-x-1.5 px-5 py-2.5 bg-[#0077C8] hover:bg-[#005a99] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-2xs transition-colors"
                            >
                              <Calendar className="w-4 h-4" />
                              <span>Buat Janji Temu</span>
                            </Link>
                            <a
                              href={loc.mapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center space-x-1.5 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-semibold rounded-xl transition-colors"
                            >
                              <Navigation className="w-4 h-4 text-[#0077C8]" />
                              <span>Petunjuk Arah</span>
                              <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-gray-400" />
                            </a>
                          </div>

                          <span className="text-[11px] text-gray-400 font-medium">
                            RS Shilah Network
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* 6. ACCESS & TRANSPORTATION SECTION */}
        <section className="w-full bg-[#f8fafc] py-14 sm:py-20 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs mb-2">
                Fasilitas Penunjang
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B]">
                Akses &amp; Transportasi
              </h3>
              <div className="w-14 h-1 bg-[#0077C8] mx-auto mt-3 mb-3" />
              <p className="text-xs sm:text-sm text-gray-600">
                Fasilitas mobilitas dan kenyamanan aksesibilitas yang dirancang untuk mendukung kelancaran kunjungan Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {accessItems.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 hover:shadow-xs hover:border-[#0077C8]/50 transition-all flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0077C8] flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sm sm:text-base text-gray-900 mb-1.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
