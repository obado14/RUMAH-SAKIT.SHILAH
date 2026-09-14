"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { allDoctors, departments } from "@/data/doctors";
import {
  Search,
  Filter,
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  Stethoscope,
  X,
} from "lucide-react";

export function FindDoctorSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("Semua Spesialisasi");
  const [selectedLocation, setSelectedLocation] = useState("Semua Lokasi");

  const locationOptions = [
    "Semua Lokasi",
    "Shilah Central Hospital",
    "Shilah Children''s",
    "Shilah Specialist Clinic",
    "Shilah Healthcare BSD",
  ];

  const filteredDoctors = allDoctors.filter((doctor) => {
    const matchesQuery =
      !searchQuery.trim() ||
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.subspecialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.services.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesDept =
      selectedDept === "Semua Spesialisasi" ||
      doctor.department.toLowerCase() === selectedDept.toLowerCase();

    const matchesLocation =
      selectedLocation === "Semua Lokasi" ||
      doctor.hospital.toLowerCase().includes(selectedLocation.toLowerCase());

    return matchesQuery && matchesDept && matchesLocation;
  });

  return (
    <section id="find-doctor" className="w-full py-14 sm:py-20 bg-[#f8fafc] border-b border-gray-200 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#0077C8] text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-100">
            Direktori Medis Terpercaya
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#111111] mb-3 leading-tight">
            Find the Right Doctor for You
          </h2>
          <div className="w-16 h-1 bg-[#0077C8] mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
            Temukan dokter spesialis dan konsultan berpengalaman di Shilah Medicine yang berdedikasi memberikan perawatan terbaik sesuai kebutuhan kesehatan Anda.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-200 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Nama Dokter atau Keluhan
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Contoh: dr. Adrian, jantung koroner, anak, stroke..."
                  className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
                    aria-label="Hapus kata pencarian"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Specialty Filter */}
            <div className="md:col-span-3">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Spesialisasi
              </label>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:bg-white transition-all cursor-pointer"
              >
                {departments.map((dept, i) => (
                  <option key={i} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="md:col-span-3">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Lokasi Rumah Sakit
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-gray-300 rounded-xl text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:bg-white transition-all cursor-pointer"
              >
                {locationOptions.map((loc, i) => (
                  <option key={i} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Category Chips */}
          <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-100 text-xs">
            <span className="text-gray-500 font-medium flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#0077C8]" /> Filter Cepat:
            </span>
            {departments.slice(0, 6).map((dept, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedDept(dept)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  selectedDept === dept
                    ? "bg-[#002D72] text-white"
                    : "bg-slate-100 text-gray-600 hover:bg-slate-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm text-gray-600">
            Menampilkan <strong className="text-gray-900">{filteredDoctors.length}</strong> dokter spesialis terverifikasi
          </p>
          <Link
            href="/doctors"
            className="text-xs sm:text-sm font-semibold text-[#0077C8] hover:text-[#002D72] hover:underline flex items-center gap-1"
          >
            <span>Lihat Semua Dokter</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Doctor Cards Grid */}
        {filteredDoctors.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-gray-200 max-w-md mx-auto shadow-sm">
            <Stethoscope className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-gray-800 mb-1">
              Dokter Tidak Ditemukan
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-4">
              Tidak ada dokter yang cocok dengan kriteria pencarian Anda. Coba atur ulang kata kunci atau filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedDept("Semua Spesialisasi");
                setSelectedLocation("Semua Lokasi");
              }}
              className="px-4 py-2 bg-[#0077C8] text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#005fa3] transition-colors cursor-pointer"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.slice(0, 6).map((doctor) => (
              <div
                key={doctor.id}
                className="group bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#0077C8] transition-all flex flex-col justify-between overflow-hidden text-left"
              >
                {/* Doctor Visual & Basic Info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    {/* Doctor Photo */}
                    <div className="relative w-20 sm:w-24 aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 border border-gray-200 shrink-0 shadow-sm">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        sizes="(max-width: 640px) 80px, 96px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Name & Specialty */}
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-[#0077C8] border border-blue-100 uppercase tracking-wider">
                        {doctor.department}
                      </span>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#002D72] transition-colors leading-snug">
                        {doctor.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#0077C8] leading-tight">
                        {doctor.specialty}
                      </p>
                      <p className="text-xs text-gray-500 line-clamp-1">
                        {doctor.subspecialty}
                      </p>
                    </div>
                  </div>

                  {/* Next Available Live Badge */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/80">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="truncate">
                      Next Available: {doctor.scheduleList[0]?.day || "Minggu ini"}, {doctor.scheduleList[0]?.hours.split("-")[0]?.trim() || "08:30"} WIB
                    </span>
                  </div>

                  {/* Location & Practice Room */}
                  <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#0077C8] shrink-0 mt-0.5" />
                      <span className="line-clamp-1 font-medium">{doctor.hospital}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1 text-gray-600">
                        {doctor.schedule}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-4 bg-slate-50/90 border-t border-gray-100 grid grid-cols-2 gap-2.5">
                  <Link
                    href={`/doctors/${doctor.id}`}
                    className="w-full px-3 py-2.5 bg-white hover:bg-slate-100 text-gray-800 text-xs sm:text-sm font-semibold rounded-xl border border-gray-300 transition-colors text-center flex items-center justify-center gap-1 shadow-xs"
                  >
                    <span>View Profile</span>
                  </Link>

                  <Link
                    href={`/appointments?doctor=${encodeURIComponent(doctor.name)}`}
                    className="w-full px-3 py-2.5 bg-[#0077C8] hover:bg-[#005fa3] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-sm hover:shadow-md text-center flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Appointment</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
