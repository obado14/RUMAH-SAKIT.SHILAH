"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import { HealthGuideModal } from "@/components/HealthGuideModal";
import { healthGuides, type HealthGuide } from "@/data/healthGuides";
import {
  Heart,
  Brain,
  Baby,
  Bone,
  ShieldPlus,
  Activity,
  Search,
  ChevronRight,
  Stethoscope,
  X,
  ExternalLink,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Brain,
  Baby,
  Bone,
  ShieldPlus,
  Activity,
};

export default function HealthPage() {
  const [selectedGuide, setSelectedGuide] = useState<HealthGuide | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredGuides = healthGuides.filter((guide) => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      guide.title.toLowerCase().includes(q) ||
      guide.summary.toLowerCase().includes(q) ||
      guide.category.toLowerCase().includes(q) ||
      guide.fullTitle.toLowerCase().includes(q) ||
      guide.doctorName.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative w-full bg-[#00205B] text-white py-20 sm:py-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/sites/hopkinsmedicine/images/health_hero_bg.jpeg"
              alt="Pusat Informasi Kesehatan Shilah Medicine"
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
            <div className="max-w-xl mx-auto flex items-center bg-white rounded-xl p-2 shadow-2xl border border-white/20">
              <Search className="w-5 h-5 text-gray-400 ml-2 shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari topik kesehatan, gejala, atau dokter spesialis..."
                className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none text-sm sm:text-base bg-transparent"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="p-1.5 text-gray-400 hover:text-gray-600 mr-1 cursor-pointer"
                  title="Hapus kata kunci"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                className="px-5 py-2.5 bg-[#0077C8] hover:bg-[#005fa3] text-white text-sm font-medium rounded-lg transition-colors shadow-sm shrink-0 cursor-pointer"
              >
                Cari
              </button>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111]">
              Kategori Informasi Kesehatan
            </h2>
            <div className="w-12 h-1 bg-[#0077C8] mx-auto mt-3" />
            <p className="text-sm text-gray-600 mt-3">
              Klik kartu atau tombol &ldquo;Baca panduan lengkap&rdquo; untuk membaca ringkasan medis interaktif.
            </p>
          </div>

          {filteredGuides.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-gray-200 max-w-md mx-auto shadow-sm">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-gray-800 mb-1">
                Topik Tidak Ditemukan
              </h3>
              <p className="text-sm text-gray-500 mb-5">
                Tidak ada panduan yang cocok dengan kata kunci &ldquo;{searchTerm}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="px-4 py-2 bg-[#0077C8] text-white text-sm font-medium rounded-lg hover:bg-[#005fa3] transition-colors cursor-pointer"
              >
                Tampilkan Semua Kategori
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides.map((guide) => {
                const IconComponent = iconMap[guide.iconName] || Heart;
                return (
                  <div
                    key={guide.slug}
                    onClick={() => setSelectedGuide(guide)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedGuide(guide);
                      }
                    }}
                    className="group bg-white border border-gray-200/90 rounded-2xl p-6 hover:shadow-xl hover:border-[#0077C8] transition-all flex flex-col justify-between cursor-pointer relative overflow-hidden text-left"
                  >
                    {/* Top Accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0077C8]/0 to-transparent group-hover:from-[#002D72] group-hover:via-[#0077C8] group-hover:to-[#00A3E0] transition-all duration-300" />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-[#0077C8] text-[#0077C8] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-semibold tracking-wide text-gray-500 uppercase bg-slate-100 px-2.5 py-1 rounded-full">
                          {guide.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-[#111111] group-hover:text-[#002D72] transition-colors mb-2 leading-snug">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {guide.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 mt-2">
                      <div className="flex items-center gap-2.5 mb-4 text-xs text-gray-600 bg-slate-50/80 p-2 rounded-lg">
                        <Stethoscope className="w-4 h-4 text-[#0077C8] shrink-0" />
                        <span className="truncate font-medium">
                          {guide.doctorName}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedGuide(guide);
                          }}
                          className="inline-flex items-center text-[#0077C8] text-sm font-semibold hover:text-[#002D72] group-hover:underline cursor-pointer"
                        >
                          <span>Baca panduan lengkap</span>
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <Link
                          href={`/health/${guide.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          title="Buka artikel di halaman penuh"
                          className="p-1.5 text-gray-400 hover:text-[#0077C8] hover:bg-blue-50 rounded-md transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>

      <Footer />
      <CookieBanner />

      {/* Interactive Medical Health Guide Modal */}
      <HealthGuideModal
        guide={selectedGuide}
        onClose={() => setSelectedGuide(null)}
      />
    </div>
  );
}
