import React from "react";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Calendar,
  Ambulance,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lokasi Rumah Sakit & Fasilitas Pasien | Shilah Medicine",
  description:
    "Temukan jaringan rumah sakit, klinik spesialis rawat jalan, dan fasilitas gawat darurat 24 jam Shilah Medicine terdekat dari Anda.",
};

interface HospitalLocation {
  id: string;
  name: string;
  type: string;
  address: string;
  phone: string;
  emergency: string;
  hours: string;
  facilities: string[];
}

const locations: HospitalLocation[] = [
  {
    id: "loc-01",
    name: "Shilah Central Hospital (Pusat Medis Utama)",
    type: "Rumah Sakit Tipe A & Pusat Rujukan Nasional",
    address: "Jl. Shilah Medika No. 101, Cilandak, Jakarta Selatan 12430",
    phone: "(021) 500-740",
    emergency: "(021) 500-911 (24 Jam)",
    hours: "Pelayanan Rawat Inap & IGD 24 Jam | Poliklinik: 08:00 - 20:00 WIB",
    facilities: [
      "Instalasi Gawat Darurat (IGD) & Trauma Center 24 Jam",
      "Pusat Jantung & Kardiovaskular Intervensi Terpadu",
      "Pusat Penanganan Stroke & Bedah Saraf Komprehensif",
      "MRI 3 Tesla, Dual-Source CT Scan 512 Slice, Cath Lab Modern",
      "Ruang Perawatan VVIP, VIP, Kelas 1, 2, 3, serta ICU/ICCU/NICU",
    ],
  },
  {
    id: "loc-02",
    name: "Shilah Children's & Maternal Hospital",
    type: "Pusat Kesehatan Ibu & Anak Terpadu",
    address: "Jl. Shilah Medika No. 105, Cilandak, Jakarta Selatan 12430",
    phone: "(021) 500-741",
    emergency: "(021) 500-911",
    hours: "Pelayanan 24 Jam | Poliklinik Spesialis Anak & Kandungan: 08:00 - 19:00 WIB",
    facilities: [
      "Klinik Tumbuh Kembang & Terapi Sensori Integrasi Anak",
      "Unit Perinatologi, NICU Level 3 & PICU Komprehensif",
      "Persalinan Nyaman (Water Birth & Minimally Invasive Delivery)",
      "Vaksinasi & Imunisasi Anak Lengkap",
    ],
  },
  {
    id: "loc-03",
    name: "Shilah Specialist Clinic & Ambulatory Center",
    type: "Klinik Rawat Jalan Eksekutif & Medical Check-Up",
    address: "Sentra Bisnis Medika Kav. 8, Thamrin, Jakarta Pusat 10350",
    phone: "(021) 500-742",
    emergency: "Hubungi IGD Shilah Central Hospital",
    hours: "Senin - Sabtu: 07:30 - 20:00 WIB (Minggu Libur)",
    facilities: [
      "Executive Medical Check-Up Lounge",
      "Klinik Spesialis Konsultasi Satu Atap (One-Stop Service)",
      "Bedah Rawat Jalan Sehari (Day Surgery)",
      "Instalasi Farmasi & Laboratorium Cepat Selesai",
    ],
  },
  {
    id: "loc-04",
    name: "Shilah Healthcare Clinic & Diagnostic Hub",
    type: "Klinik Pratama & Pusat Diagnostik Komunitas",
    address: "Boulevard Barat No. 24, BSD City, Tangerang 15321",
    phone: "(021) 500-743",
    emergency: "(021) 500-743 Ext. 1",
    hours: "Senin - Minggu: 08:00 - 22:00 WIB",
    facilities: [
      "Layanan Dokter Umum & Dokter Gigi Terpadu",
      "Klinik Spesialis Penyakit Dalam & Anak",
      "Laboratorium Darah Rutin & Radiologi X-Ray Digital",
      "Apotek & Layanan Pengantaran Obat",
    ],
  },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full bg-[#002D72] text-white py-14 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase mb-3 border border-white/20">
              Jaringan Fasilitas Kesehatan
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal mb-4">
              Lokasi Rumah Sakit & Fasilitas Pasien
            </h1>
            <p className="text-base sm:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              Jaringan rumah sakit dan klinik spesialis Shilah Medicine hadir di lokasi strategis untuk menjamin kemudahan akses pelayanan kesehatan Anda.
            </p>
          </div>
        </section>

        {/* Locations List */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="space-y-8">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-gray-100">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-[#0077C8] border border-blue-100 mb-2">
                      {loc.type}
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                      {loc.name}
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-2 shrink-0">
                    <Link
                      href={`/appointments?location=${encodeURIComponent(loc.name)}`}
                      className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#0077C8] hover:bg-[#005fa3] text-white text-xs font-semibold rounded-md shadow-sm transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Buat Janji Temu</span>
                    </Link>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded-md transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Petunjuk Arah</span>
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  {/* Left: Contact Info */}
                  <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-4 h-4 text-[#0077C8] shrink-0" />
                      <span>
                        Telepon Informasi: <strong>{loc.phone}</strong>
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-red-600 font-semibold">
                      <Ambulance className="w-4 h-4 shrink-0" />
                      <span>Emergency / IGD: {loc.emergency}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{loc.hours}</span>
                    </div>
                  </div>

                  {/* Right: Key Facilities */}
                  <div>
                    <h3 className="text-xs font-bold text-[#002D72] uppercase tracking-wider mb-2">
                      Fasilitas & Layanan Unggulan:
                    </h3>
                    <ul className="space-y-1.5 text-xs text-gray-600 list-disc pl-4">
                      {loc.facilities.map((fac, idx) => (
                        <li key={idx}>{fac}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
