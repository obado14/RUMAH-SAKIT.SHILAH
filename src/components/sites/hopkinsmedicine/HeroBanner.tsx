"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Search,
  Calendar,
  Stethoscope,
  Phone,
} from "lucide-react";

export function HeroBanner() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="relative w-full min-h-[400px] sm:min-h-[480px] md:min-h-[540px] flex items-center justify-center">
        <Image
          src="/sites/hopkinsmedicine/images/hero_bg.jpg"
          alt="Pelayanan medis penuh kasih dan kepedulian di Shilah Medicine"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Deep Translucent Blue Gradient Overlay for High Contrast */}
        <div className="absolute inset-0 bg-[#001D4A]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001D4A]/90 via-[#002D72]/40 to-black/45" />

        {/* Foreground Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center text-white space-y-6">
          {/* Emergency 24/7 Quick Access Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-white">
              Emergency 24/7:
            </span>
            <a
              href="tel:021500911"
              className="text-xs sm:text-sm font-bold text-red-300 hover:text-white underline underline-offset-2 flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>(021) 500-911</span>
            </a>
          </div>

          {/* Main Titles */}
          <div className="space-y-3 max-w-3xl mx-auto">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] leading-tight">
              Shilah Medicine
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-blue-100 font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              Perawatan Medis Berstandar Internasional Berpusat Pada Anda
            </p>
          </div>

          {/* Quick Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-xl mx-auto flex items-center bg-white rounded-2xl p-1.5 sm:p-2 shadow-2xl border border-white/30"
          >
            <Search className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari dokter, spesialisasi, atau gejala..."
              className="w-full px-3 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
            />
            <button
              type="submit"
              className="px-5 sm:px-6 py-2.5 bg-[#0077C8] hover:bg-[#005fa3] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-sm shrink-0 cursor-pointer"
            >
              Cari
            </button>
          </form>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <a
              href="#appointment-wizard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0077C8] hover:bg-[#005fa3] active:scale-95 text-white font-bold text-sm rounded-xl transition-all shadow-xl hover:shadow-2xl cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </a>

            <a
              href="#find-doctor"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 active:scale-95 text-white border border-white/30 font-semibold text-sm rounded-xl transition-all backdrop-blur-md cursor-pointer"
            >
              <Stethoscope className="w-4 h-4 text-blue-200" />
              <span>Find a Doctor</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative striped ribbon */}
      <div
        className="w-full h-3 sm:h-3.5 bg-[#e5e7eb]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #c5c9d0 0, #c5c9d0 2px, transparent 2px, transparent 8px)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
