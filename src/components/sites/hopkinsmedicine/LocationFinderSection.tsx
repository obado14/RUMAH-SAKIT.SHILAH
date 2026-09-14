"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { hospitalLocations } from "@/data/locations";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Search,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export function LocationFinderSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("Semua Kota");
  const [activeLocationId, setActiveLocationId] = useState(
    hospitalLocations[0]?.id || ""
  );

  const cityOptions = ["Semua Kota", "Jakarta Selatan", "Jakarta Pusat", "Tangerang BSD"];

  const filteredLocations = hospitalLocations.filter((loc) => {
    const matchesSearch =
      !searchTerm.trim() ||
      loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.facilities.some((f) => f.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCity =
      selectedCity === "Semua Kota" ||
      loc.city.toLowerCase() === selectedCity.toLowerCase();

    return matchesSearch && matchesCity;
  });

  const activeLoc =
    hospitalLocations.find((l) => l.id === activeLocationId) ||
    filteredLocations[0] ||
    hospitalLocations[0];

  return (
    <section className="w-full py-14 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#0077C8] text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-100">
            Jaringan Rumah Sakit & Klinik
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#111111] mb-3 leading-tight">
            Find a Shilah Location
          </h2>
          <div className="w-16 h-1 bg-[#0077C8] mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
            Temukan lokasi rumah sakit rujukan utama, klinik spesialis rawat jalan, dan fasilitas darurat 24 jam Shilah Medicine terdekat.
          </p>
        </div>

        {/* Search & City Filter Bar */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-gray-200 mb-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari lokasi berdasarkan nama gedung, jalan, atau fasilitas..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto no-scrollbar shrink-0">
            {cityOptions.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setSelectedCity(city)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCity === city
                    ? "bg-[#002D72] text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Two Column Layout: Location List + Featured Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Locations List */}
          <div className="lg:col-span-6 space-y-4">
            {filteredLocations.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-gray-200">
                <p className="text-sm text-gray-500">
                  Tidak ada lokasi yang cocok dengan kata kunci &ldquo;{searchTerm}&rdquo;.
                </p>
              </div>
            ) : (
              filteredLocations.map((loc) => {
                const isActive = activeLocationId === loc.id;
                return (
                  <div
                    key={loc.id}
                    onClick={() => setActiveLocationId(loc.id)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer text-left ${
                      isActive
                        ? "bg-white border-[#0077C8] shadow-md ring-2 ring-[#0077C8]/20"
                        : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="space-y-1">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-[#0077C8] border border-blue-100">
                          {loc.city}
                        </span>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900 leading-snug">
                          {loc.name}
                        </h3>
                        <p className="text-xs font-semibold text-gray-500">
                          {loc.type}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs text-gray-600">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#0077C8] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{loc.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span className="truncate">{loc.hours}</span>
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
                      <Link
                        href="/locations"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-semibold text-[#0077C8] hover:text-[#002D72] hover:underline flex items-center gap-1"
                      >
                        <span>View Location</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={loc.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-gray-800 rounded-lg text-xs font-semibold transition-colors"
                      >
                        <Navigation className="w-3 h-3 text-[#0077C8]" />
                        <span>Get Directions</span>
                        <ExternalLink className="w-3 h-3 opacity-60 ml-0.5" />
                      </a>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Right Column: Active Location Visual & Interactive Preview */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 space-y-5 shadow-sm">
              {/* Photo Banner */}
              <div className="relative w-full h-52 sm:h-60 rounded-xl overflow-hidden shadow-xs bg-slate-200">
                <Image
                  src={activeLoc.image}
                  alt={activeLoc.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00205B]/80 via-[#002D72]/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-1 rounded bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider mb-1.5 inline-block">
                    {activeLoc.emergency}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                    {activeLoc.name}
                  </h4>
                  <p className="text-xs text-slate-200 line-clamp-1">
                    {activeLoc.address}
                  </p>
                </div>
              </div>

              {/* Facility Highlights of Active Location */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                  Fasilitas & Layanan Unggulan di Lokasi Ini:
                </h5>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  {activeLoc.facilities.map((fac, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0077C8] shrink-0 mt-2" />
                      <span>{fac}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Strip */}
              <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${activeLoc.phone.replace(/[^0-9]/g, "")}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#0077C8]" />
                  <span>Call: {activeLoc.phone}</span>
                </a>

                <a
                  href={activeLoc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0077C8] hover:bg-[#005fa3] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
