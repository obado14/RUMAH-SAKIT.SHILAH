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

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  department: string;
  subspecialty: string;
  hospital: string;
  education: string;
  schedule: string;
  image: string;
}

const allDoctors: Doctor[] = [
  {
    id: "dr-adrian",
    name: "dr. Adrian Shilah, Sp.JP(K), FIHA",
    specialty: "Spesialis Jantung & Pembuluh Darah",
    department: "Kardiologi",
    subspecialty: "Kardiologi Intervensi & Aritmia",
    hospital: "Shilah Central Hospital (Gedung A, Lt. 3)",
    education: "Shilah School of Medicine, Fellowship Interventional Cardiology",
    schedule: "Senin, Rabu, Jumat: 08:30 - 13:00 WIB",
    image: "/sites/hopkinsmedicine/images/hero_bg.jpg",
  },
  {
    id: "prof-ratna",
    name: "Prof. Dr. dr. Ratna Shilah, Sp.S(K), FANA",
    specialty: "Spesialis Saraf (Neurolog)",
    department: "Neurologi",
    subspecialty: "Neurovaskular, Stroke Akut & Gangguan Memori",
    hospital: "Shilah Central Hospital (Pusat Otak, Lt. 2)",
    education: "Doktor Ilmu Kedokteran Shilah University & Postdoc Neuroscience",
    schedule: "Selasa & Kamis: 09:00 - 14:00 WIB",
    image: "/sites/hopkinsmedicine/images/14_researcher-in-lab_jpg.png",
  },
  {
    id: "dr-maya",
    name: "dr. Maya Kartika, Sp.A(K), M.Kes",
    specialty: "Spesialis Anak (Pediatri)",
    department: "Pediatrik",
    subspecialty: "Tumbuh Kembang Anak & Alergi Imunologi Pediatrik",
    hospital: "Shilah Children's Center (Paviliun Anak, Lt. 1)",
    education: "Universitas Indonesia & Fellowship Pediatric Care Shilah Medicine",
    schedule: "Senin - Sabtu: 08:00 - 12:00 WIB",
    image: "/sites/hopkinsmedicine/images/10_ocd-children_jpg.png",
  },
  {
    id: "dr-hendra",
    name: "dr. Hendra Pratama, Sp.OT(K), Spine",
    specialty: "Spesialis Bedah Ortopedi & Traumatologi",
    department: "Ortopedi",
    subspecialty: "Bedah Rekonstruksi Tulang Belakang & Sendi Minimal Invasif",
    hospital: "Shilah Central Hospital (Klinik Ortopedi, Lt. 4)",
    education: "Shilah School of Medicine & Spine Institute Fellowship",
    schedule: "Senin, Selasa, Kamis: 13:00 - 17:00 WIB",
    image: "/sites/hopkinsmedicine/images/hero_bg.jpg",
  },
  {
    id: "dr-dewi",
    name: "dr. Dewi Anggraini, Sp.PD-KHOM, FINASIM",
    specialty: "Spesialis Penyakit Dalam - Konsultan Hematologi Onkologi",
    department: "Onkologi",
    subspecialty: "Terapi Target Kanker & Kemoterapi Komprehensif",
    hospital: "Shilah Cancer Comprehensive Center (Lt. 5)",
    education: "Shilah University School of Medicine",
    schedule: "Rabu, Jumat, Sabtu: 10:00 - 15:00 WIB",
    image: "/sites/hopkinsmedicine/images/14_researcher-in-lab_jpg.png",
  },
  {
    id: "dr-farhan",
    name: "dr. Farhan Gunawan, Sp.OG(K)-FER",
    specialty: "Spesialis Kebidanan & Kandungan",
    department: "Kebidanan",
    subspecialty: "Fertilitas, Endokrinologi Reproduksi & USG Fetomaternal 4D",
    hospital: "Shilah Women's & Maternal Health Center (Lt. 2)",
    education: "Fakultas Kedokteran Shilah University & Reproductive Fellowship",
    schedule: "Selasa, Kamis, Sabtu: 08:30 - 13:30 WIB",
    image: "/sites/hopkinsmedicine/images/12_digital-twin-heart_jpg.png",
  },
];

const departments = [
  "Semua Spesialisasi",
  "Kardiologi",
  "Neurologi",
  "Pediatrik",
  "Ortopedi",
  "Onkologi",
  "Kebidanan",
];

export default function DoctorsPage() {
  const [selectedDept, setSelectedDept] = useState("Semua Spesialisasi");
  const [searchTerm, setSearchTerm] = useState("");

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
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase mb-4 border border-white/30 shadow-md">
              Direktori Dokter Spesialis
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Cari Dokter Spesialis Shilah Medicine
            </h1>
            <p className="text-base sm:text-lg text-white font-normal max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Temukan dokter spesialis dan subspesialis terkemuka yang berdedikasi memberikan perawatan medis berstandar internasional untuk Anda.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto flex items-center bg-white rounded-lg p-2 shadow-2xl border border-white/20">
              <Search className="w-5 h-5 text-gray-400 ml-2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari berdasarkan nama dokter, penyakit, atau keahlian..."
                className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none text-sm sm:text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-2 text-xs text-gray-400 hover:text-gray-700"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Filters and List */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          {/* Department Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 border-b border-gray-200 scrollbar-none">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center mr-2 shrink-0">
              <Filter className="w-3.5 h-3.5 mr-1" />
              Filter:
            </span>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedDept === dept
                    ? "bg-[#002D72] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
            <span>
              Menampilkan <strong>{filteredDoctors.length}</strong> dokter spesialis
            </span>
          </div>

          {/* Doctors Grid */}
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-[#0077C8] border border-blue-100 mb-2">
                          {doc.department}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111111]">
                          {doc.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#0077C8] font-medium mt-0.5">
                          {doc.specialty}
                        </p>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-blue-100/70 border border-blue-200 flex items-center justify-center shrink-0 text-[#002D72]">
                        <Stethoscope className="w-8 h-8" />
                      </div>
                    </div>

                    <div className="space-y-2.5 text-xs text-gray-600 border-t border-gray-100 pt-3">
                      <div className="flex items-start space-x-2">
                        <Award className="w-4 h-4 text-[#FFC20E] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-gray-800">Subspesialisasi:</strong> {doc.subspecialty}
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <GraduationCap className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-gray-800">Alumni:</strong> {doc.education}
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-gray-800">Lokasi Praktik:</strong> {doc.hospital}
                        </span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Calendar className="w-4 h-4 text-[#0077C8] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-gray-800">Jadwal Praktik:</strong> {doc.schedule}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/appointments?doctor=${encodeURIComponent(doc.name)}`}
                      className="flex-1 text-center py-2.5 px-4 bg-[#0077C8] hover:bg-[#005fa3] text-white text-xs font-semibold rounded-md transition-colors shadow-sm"
                    >
                      Jadwalkan Janji Temu
                    </Link>
                    <Link
                      href="/about"
                      className="py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-md transition-colors"
                    >
                      Detail Profil
                    </Link>
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

      <Footer />
      <CookieBanner />
    </div>
  );
}
