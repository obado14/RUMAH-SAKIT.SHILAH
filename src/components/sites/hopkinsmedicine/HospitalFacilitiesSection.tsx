"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface FacilityItem {
  id: string;
  name: string;
  category: "Gawat Darurat & Kritis" | "Kamar Bedah & Diagnostik" | "Rawat Inap & Skrining";
  desc: string;
  features: string[];
  image: string;
}

const facilitiesData: FacilityItem[] = [
  {
    id: "fac-01",
    name: "Emergency Department & Trauma Center",
    category: "Gawat Darurat & Kritis",
    desc: "Unit resusitasi darurat dengan sistem triase cepat dan akses langsung ke Cath-Lab jantung 24 jam.",
    features: ["Ambulans Siaga 24/7", "Trauma Room Khusus", "Dokter Spesialis Darurat"],
    image: "/sites/hopkinsmedicine/images/patient_care_hero_bg.jpeg",
  },
  {
    id: "fac-02",
    name: "Intensive Care Units (ICU, ICCU, NICU Level 3)",
    category: "Gawat Darurat & Kritis",
    desc: "Ruang rawat intensif bertekanan khusus dengan continuous hemodynamic monitoring 24 jam.",
    features: ["Rasio Perawat 1:1", "Ventilator Canggih", "Isolasi Hepa Filter"],
    image: "/sites/hopkinsmedicine/images/facility_icu_nicu.jpeg",
  },
  {
    id: "fac-03",
    name: "State-of-the-Art Operating Suites",
    category: "Kamar Bedah & Diagnostik",
    desc: "Suite kamar operasi modular dengan laminar airflow dan sistem laparoskopi robotik 4K.",
    features: ["Hybrid OR Suite", "Robotik Minimal Invasif", "Monitoring Real-Time"],
    image: "/sites/hopkinsmedicine/images/facility_operating_suites.jpeg",
  },
  {
    id: "fac-04",
    name: "Automated Clinical Pathology Laboratory",
    category: "Kamar Bedah & Diagnostik",
    desc: "Laboratorium otomatis 24 jam untuk hematologi, kimia darah, dan biomarker molekuler cepat.",
    features: ["Barcode Otomatis", "Biomarker Onkologi", "Hasil Terkoneksi EMR"],
    image: "/sites/hopkinsmedicine/images/14_researcher-in-lab_jpg.png",
  },
  {
    id: "fac-05",
    name: "Advanced Diagnostic Radiology",
    category: "Kamar Bedah & Diagnostik",
    desc: "Peralatan pencitraan mutakhir mencakup MRI 3 Tesla, CT Scan 512 Slice, dan USG 4D Fetomaternal.",
    features: ["MRI 3 Tesla Silent", "CT Scan Jantung 512 Slice", "Dosis Radiasi Rendah"],
    image: "/sites/hopkinsmedicine/images/facility_diagnostic_radiology.jpeg",
  },
  {
    id: "fac-06",
    name: "24/7 Pharmacy & Clinical Pharmacist",
    category: "Rawat Inap & Skrining",
    desc: "Sistem farmasi klinis terpadu dengan verifikasi apoteker ganda dan opsi antar obat ke rumah.",
    features: ["Buka 24 Jam Penuh", "Konseling Apoteker", "Layanan Antar Obat"],
    image: "/sites/hopkinsmedicine/images/facility_pharmacy.jpeg",
  },
  {
    id: "fac-07",
    name: "Inpatient Executive Suites & Private Rooms",
    category: "Rawat Inap & Skrining",
    desc: "Kamar rawat inap dengan smart bed elektrik, ruang keluarga luas, dan nutrisi khusus pasien.",
    features: ["Kamar VVIP & Suite", "Sofa Bed Keluarga", "Nutrisi Terkurasi"],
    image: "/sites/hopkinsmedicine/images/facility_inpatient_suites.jpeg",
  },
  {
    id: "fac-08",
    name: "Executive Medical Check-Up Lounge",
    category: "Rawat Inap & Skrining",
    desc: "Layanan one-stop medical check-up dengan alur terpisah, suasana tenang, dan evaluasi dokter spesialis.",
    features: ["Lounge Nyaman Terpisah", "One-Day Assessment", "Konsultasi Dokter"],
    image: "/sites/hopkinsmedicine/images/health_hero_bg.jpeg",
  },
];

export function HospitalFacilitiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua Fasilitas");

  const categories = [
    "Semua Fasilitas",
    "Gawat Darurat & Kritis",
    "Kamar Bedah & Diagnostik",
    "Rawat Inap & Skrining",
  ];

  const filteredFacilities =
    activeCategory === "Semua Fasilitas"
      ? facilitiesData
      : facilitiesData.filter((f) => f.category === activeCategory);

  return (
    <section className="w-full py-12 sm:py-16 bg-[#f8fafc] border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#0077C8] text-xs font-semibold uppercase tracking-wider mb-2.5 border border-blue-100">
            Infrastruktur Medis Unggulan
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#111111] mb-3 leading-tight">
            Our Hospital & Facilities
          </h2>
          <div className="w-14 h-1 bg-[#0077C8] mx-auto mb-3" />
          <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
            Didukung teknologi medis generasi terbaru dan lingkungan rawat inap yang dirancang untuk mendukung kenyamanan serta kesembuhan pasien.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#002D72] text-white shadow-sm"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#0077C8] transition-all duration-300 flex flex-col justify-between overflow-hidden text-left"
            >
              <div>
                {/* Visual Image */}
                <div className="relative w-full h-40 overflow-hidden bg-slate-100">
                  <Image
                    src={fac.image}
                    alt={fac.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] sm:text-xs font-semibold text-white px-2.5 py-0.5 rounded-md bg-black/40 backdrop-blur-md border border-white/20">
                    {fac.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-4 sm:p-5 space-y-2">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#002D72] transition-colors leading-snug">
                    {fac.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                    {fac.desc}
                  </p>
                </div>
              </div>

              {/* Feature Pills */}
              <div className="p-4 sm:p-5 pt-0 mt-auto">
                <div className="space-y-1.5 pt-2.5 border-t border-gray-100">
                  {fac.features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0077C8] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
