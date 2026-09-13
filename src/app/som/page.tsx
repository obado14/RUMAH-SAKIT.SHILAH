"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import { AdmissionModal } from "@/components/AdmissionModal";
import { academicPrograms, type AcademicProgram } from "@/data/academicPrograms";
import {
  ChevronRight,
  CheckCircle2,
  GraduationCap,
  Clock,
  Award,
  PhoneCall,
  MessageCircle,
} from "lucide-react";

export default function SchoolOfMedicinePage() {
  const [selectedProgram, setSelectedProgram] = useState<AcademicProgram | null>(
    null
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative w-full bg-[#00205B] text-white py-20 sm:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/sites/hopkinsmedicine/images/som_hero_bg.jpeg"
              alt="Gedung Shilah School of Medicine"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Elegant Translucent Blue Overlay - Balanced & Clear */}
          <div className="absolute inset-0 bg-[#002D72]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001D4A]/70 via-transparent to-black/35" />

          {/* Text Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 border border-white/30 shadow-md">
              Pendidikan & Riset Akademis
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Fakultas Kedokteran Shilah
            </h1>
            <p className="text-base sm:text-xl text-white max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Mendidik generasi dokter dan saintis medis masa depan dengan standar keunggulan klinis, etika tinggi, dan dedikasi untuk kemanusiaan.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111]">
                Pusat Unggulan Pendidikan Kedokteran
              </h2>
              <div className="w-14 h-1 bg-[#0077C8]" />
              <p className="text-[16px] text-[#4b5563] leading-relaxed">
                Shilah School of Medicine menggabungkan pengajaran teori ilmiah yang mendalam dengan akses langsung ke fasilitas rumah sakit modern. Mahasiswa belajar langsung dari para klinisi terkemuka dan berpartisipasi dalam riset mutakhir demi menemukan terapi medis masa depan.
              </p>
              <ul className="space-y-3 text-[#333333] text-[15px]">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0077C8] shrink-0" />
                  <span>Akreditasi Unggul & standar kurikulum internasional WFME</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0077C8] shrink-0" />
                  <span>Laboratorium simulasi bedah, kadaverik, dan virtual reality 3D</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0077C8] shrink-0" />
                  <span>Jejaring fellowship riset medis global & rumah sakit jejaring JCI</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-[300px] sm:w-[360px] h-[110px] sm:h-[130px] p-4 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center">
                <Image
                  src="/sites/hopkinsmedicine/images/shilah_som_logo.png"
                  alt="Shilah School of Medicine Logo"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Academic Programs Grid */}
          <div id="programs" className="pt-8 border-t border-gray-200 scroll-mt-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#0077C8] uppercase tracking-wider">
                Jenjang Studi Kedokteran & Pascasarjana
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111] mt-1 mb-3">
                Program Akademik yang Ditawarkan
              </h3>
              <p className="text-sm text-gray-600">
                Klik kartu atau tombol &ldquo;Informasi pendaftaran&rdquo; untuk melihat jadwal seleksi, persyaratan dokumen, rincian biaya, dan skema beasiswa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academicPrograms.map((prog) => (
                <div
                  key={prog.id}
                  onClick={() => setSelectedProgram(prog)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedProgram(prog);
                    }
                  }}
                  className="group bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#0077C8] transition-all flex flex-col justify-between cursor-pointer relative overflow-hidden text-left"
                >
                  {/* Top accent glow line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0077C8]/0 to-transparent group-hover:from-[#002D72] group-hover:via-[#0077C8] group-hover:to-[#00A3E0] transition-all duration-300" />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-[#0077C8] border border-blue-100">
                        {prog.badge}
                      </span>
                      <span className="text-[11px] text-gray-500 font-medium">
                        {prog.accreditation.split("&")[0].trim()}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#002D72] transition-colors mb-2 leading-snug">
                      {prog.title}
                    </h4>

                    <p className="text-sm text-[#4b5563] leading-relaxed mb-5">
                      {prog.desc}
                    </p>

                    <div className="space-y-2 py-3 px-3.5 bg-slate-50 rounded-xl mb-5 text-xs text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#0077C8] shrink-0" />
                        <span className="truncate">{prog.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-3.5 h-3.5 text-[#0077C8] shrink-0" />
                        <span className="truncate">{prog.degree}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProgram(prog);
                      }}
                      className="inline-flex items-center text-sm font-semibold text-[#0077C8] group-hover:text-[#002D72] group-hover:underline cursor-pointer"
                    >
                      <span>Informasi pendaftaran</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <span className="text-xs text-gray-400 group-hover:text-[#0077C8] transition-colors">
                      Lihat Detail →
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Admission Help Banner */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50/50 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-[#002D72] uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-[#0077C8]" />
                  <span>Kantor Admisi & Informasi Pendaftaran FK Shilah</span>
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-gray-900">
                  Perlu bantuan konsultasi pemilihan program atau beasiswa?
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  Tim konselor akademik kami siap melayani pertanyaan seputar kurikulum, jadwal ujian CBT, dan kunjungan kampus.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                <a
                  href="tel:+622150988888"
                  className="px-4 py-2.5 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-xs flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#0077C8]" />
                  <span>(021) 5098-8888</span>
                </a>
                <a
                  href="https://wa.me/6281288887744?text=Halo%20Admisi%20Fakultas%20Kedokteran%20Shilah,%20saya%20ingin%20konsultasi%20pendaftaran%20program%20akademik."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Admisi</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />

      {/* Interactive Admission Modal */}
      <AdmissionModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
      />
    </div>
  );
}
