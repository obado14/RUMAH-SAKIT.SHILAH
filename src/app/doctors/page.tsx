"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import {
  Search,
  Calendar,
  Award,
  GraduationCap,
  MapPin,
  Stethoscope,
  Filter,
} from "lucide-react";

import { allDoctors, departments, type Doctor } from "@/data/doctors";
import { DoctorDetailModal } from "@/components/DoctorDetailModal";

export default function DoctorsPage() {
  const [selectedDept, setSelectedDept] = useState("Semua Spesialisasi");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const filteredDoctors = useMemo(() => {
    return allDoctors.filter((doc) => {
      const matchDept =
        selectedDept === "Semua Spesialisasi" || doc.department === selectedDept;
      const matchSearch =
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.subspecialty.toLowerCase().includes(searchTerm.toLowerCase());
      return matchDept && matchSearch;
    });
  }, [selectedDept, searchTerm]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative w-full bg-[#00205B] text-white py-16 sm:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/sites/hopkinsmedicine/images/doctors_hero_bg.jpeg"
              alt="Gedung Rumah Sakit Shilah Medicine"
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
            <span className="inline-block px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/35 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4 border border-white/30 shadow-md">
              Direktori Dokter Spesialis
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal mb-3 sm:mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] leading-tight">
              Cari Dokter Spesialis Shilah Medicine
            </h1>
            <p className="text-xs sm:text-base md:text-lg text-white font-normal max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Temukan dokter spesialis dan subspesialis terkemuka yang berdedikasi memberikan perawatan medis berstandar internasional untuk Anda.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto flex items-center bg-white rounded-xl p-1.5 sm:p-2 shadow-xl border border-white/30">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 ml-2.5 shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari dokter, spesialisasi, atau keahlian..."
                className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-gray-800 placeholder-gray-400 focus:outline-none text-xs sm:text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-2.5 py-1 text-xs text-gray-400 hover:text-gray-700 font-medium shrink-0"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Filters and List */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
          {/* Department Filter Pills (Mobile Horizontal Scrollable) */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 sm:mb-8 border-b border-gray-200 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            <span className="text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center mr-1 shrink-0">
              <Filter className="w-3.5 h-3.5 mr-1" />
              Filter:
            </span>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors shrink-0 ${
                  selectedDept === dept
                    ? "bg-[#002D72] text-white shadow-xs"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="flex justify-between items-center mb-5 sm:mb-6 text-xs sm:text-sm text-gray-500">
            <span>
              Menampilkan <strong>{filteredDoctors.length}</strong> dokter spesialis
            </span>
          </div>

          {/* Doctors Grid - 3:4 Aspect Ratio Cards */}
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 max-w-sm sm:max-w-none mx-auto">
              {filteredDoctors.map((doc, idx) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* 3:4 Aspect Ratio Photo Container */}
                    <div
                      className="relative w-full aspect-[3/4] bg-slate-100 overflow-hidden cursor-pointer"
                      onClick={() => setSelectedDoctor(doc)}
                      title={`Klik untuk melihat detail profil ${doc.name}`}
                    >
                      {doc.image ? (
                        <Image
                          src={doc.image}
                          alt={doc.name}
                          fill
                          priority={idx < 2}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#002D72]">
                          <Stethoscope className="w-16 h-16" />
                        </div>
                      )}

                      {/* Dark Gradient Overlay at Bottom of Photo */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                      {/* Floating Department Badge */}
                      <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5">
                        <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-white/95 text-[#0077C8] backdrop-blur-md shadow-sm border border-blue-100">
                          {doc.department}
                        </span>
                      </div>

                      {/* Floating "Lihat Profil" Pill */}
                      <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-[#002D72]/85 text-white backdrop-blur-md shadow">
                          Lihat Profil
                        </span>
                      </div>

                      {/* Doctor Name & Specialty Overlay */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                        <h3 className="font-serif text-base sm:text-lg lg:text-xl font-bold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] group-hover:text-blue-200 transition-colors">
                          {doc.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/95 font-medium mt-1 drop-shadow line-clamp-1">
                          {doc.specialty}
                        </p>
                      </div>
                    </div>

                    {/* Information Details */}
                    <div className="p-4 sm:p-5 space-y-2 sm:space-y-2.5 text-xs text-gray-600">
                      <div className="flex items-start space-x-2">
                        <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFC20E] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">
                          <strong className="text-gray-800">Subspesialis:</strong> {doc.subspecialty}
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1" title={doc.education}>
                          <strong className="text-gray-800">Alumni:</strong> {doc.education}
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1" title={doc.hospital}>
                          <strong className="text-gray-800">Lokasi:</strong> {doc.hospital}
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0077C8] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">
                          <strong className="text-gray-800">Jadwal:</strong> {doc.schedule}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions (Balanced 2-Column on Mobile) */}
                  <div className="p-4 sm:p-5 pt-0 grid grid-cols-2 gap-2 sm:gap-2.5">
                    <Link
                      href={`/appointments?doctor=${encodeURIComponent(doc.name)}`}
                      className="w-full text-center py-2.5 px-2 bg-[#0077C8] hover:bg-[#005fa3] text-white text-xs font-semibold rounded-xl transition-all shadow-sm active:scale-95 flex items-center justify-center"
                    >
                      Jadwalkan Janji
                    </Link>
                    <button
                      onClick={() => setSelectedDoctor(doc)}
                      className="w-full text-center py-2.5 px-2 bg-blue-50 hover:bg-blue-100 text-[#002D72] text-xs font-semibold rounded-xl border border-blue-200 transition-all active:scale-95 flex items-center justify-center cursor-pointer"
                    >
                      Detail Profil
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
              <p className="text-base text-gray-600 mb-4">
                Tidak ada dokter yang cocok dengan kriteria pencarian &quot;{searchTerm}&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedDept("Semua Spesialisasi");
                }}
                className="px-5 py-2 bg-[#002D72] text-white text-xs font-medium rounded-md hover:bg-blue-900 transition-colors"
              >
                Tampilkan Semua Dokter
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Doctor Detail Modal */}
      <DoctorDetailModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
      />

      <Footer />
      <CookieBanner />
    </div>
  );
}
