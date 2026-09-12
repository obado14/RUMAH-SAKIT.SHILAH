import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import { Heart, Brain, Bone, Baby, Search, ChevronRight, Activity, ShieldPlus } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informasi & Panduan Kesehatan | Shilah Medicine",
  description:
    "Pusat edukasi dan artikel kesehatan terpercaya dari para dokter dan spesialis Shilah Medicine.",
};

const healthCategories = [
  { title: "Kardiologi & Jantung", icon: Heart, desc: "Pencegahan penyakit jantung, hipertensi, dan panduan hidup sehat bagi penderita kardiovaskular." },
  { title: "Neurologi & Saraf", icon: Brain, desc: "Informasi seputar stroke, kesehatan otak, sistem saraf pusat, dan rehabilitasi neurologis." },
  { title: "Kesehatan Anak (Pediatrik)", icon: Baby, desc: "Panduan tumbuh kembang balita, imunisasi penting, dan nutrisi tepat untuk si buah hati." },
  { title: "Ortopedi & Sendi", icon: Bone, desc: "Perawatan cedera tulang, nyeri sendi, osteoporosis, dan penanganan kesehatan muskuloskeletal." },
  { title: "Kesehatan Preventif", icon: ShieldPlus, desc: "Pemeriksaan berkala (medical check-up), pola makan seimbang, dan tips kebugaran harian." },
  { title: "Kesehatan Mental", icon: Activity, desc: "Menjaga keseimbangan emosional, manajemen stres, dan konsultasi psikologi profesional." },
];

export default function HealthPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative w-full bg-[#00205B] text-white py-20 sm:py-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/sites/hopkinsmedicine/images/health_hero_bg.jpeg"
              alt="Pemeriksaan Kesehatan Shilah Medicine"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Elegant Translucent Blue Overlay */}
          <div className="absolute inset-0 bg-[#002D72]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001D4A]/80 via-[#002D72]/30 to-black/35" />

          {/* Foreground Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 border border-white/30 shadow-md">
              Pusat Edukasi Medis
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Pusat Informasi Kesehatan Shilah
            </h1>
            <p className="text-base sm:text-lg text-white max-w-2xl mx-auto font-normal leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Temukan informasi kesehatan terverifikasi dari para dokter spesialis Shilah Medicine untuk mendukung gaya hidup sehat Anda.
            </p>

            {/* Search Box */}
            <div className="max-w-xl mx-auto flex items-center bg-white rounded-lg p-2 shadow-2xl border border-white/20">
              <Search className="w-5 h-5 text-gray-400 ml-2" />
              <input
                type="text"
                placeholder="Cari topik kesehatan, gejala, atau penyakit..."
                className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none text-sm sm:text-base"
              />
              <button className="px-6 py-2.5 bg-[#0077C8] hover:bg-[#005fa3] text-white text-sm font-medium rounded-md transition-colors shadow-sm">
                Cari
              </button>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111]">
              Kategori Informasi Kesehatan
            </h2>
            <div className="w-12 h-1 bg-[#0077C8] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-[#0077C8] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0077C8] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-[#4b5563] leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#0077C8] text-sm font-medium hover:underline mt-6"
                  >
                    <span>Baca panduan lengkap</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
