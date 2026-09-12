import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fakultas Kedokteran Shilah | Shilah School of Medicine",
  description:
    "Institusi pendidikan kedokteran terkemuka yang mencetak dokter, peneliti, dan spesialis medis masa depan.",
};

const academicPrograms = [
  {
    title: "Program Sarjana & Profesi Dokter (MD)",
    desc: "Kurikulum kedokteran komprehensif berbasis bukti dan pengalaman klinis langsung di rumah sakit jejaring Shilah.",
  },
  {
    title: "Pendidikan Dokter Spesialis & Subspesialis",
    desc: "Program residensi dan fellowship intensif dalam bidang bedah, kardiologi, neurologi, pediatrik, dan onkologi.",
  },
  {
    title: "Magister & Doktoral Riset Biomedis (Ph.D)",
    desc: "Riset tingkat lanjut dalam biologi molekuler, genetika manusia, pengembangan farmasi, dan bioteknologi kesehatan.",
  },
  {
    title: "Pendidikan Kedokteran Berkelanjutan (CME)",
    desc: "Seminar, workshop klinis, dan sertifikasi terkini bagi para praktisi medis profesional di seluruh Indonesia.",
  },
];

export default function SchoolOfMedicinePage() {
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

          {/* Premium Blue Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001D4A]/92 via-[#002D72]/86 to-[#004B87]/80" />
          <div className="absolute inset-0 bg-[#001433]/40 mix-blend-multiply" />

          {/* Text Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 border border-white/30 shadow-sm">
              Pendidikan & Riset Akademis
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              Fakultas Kedokteran Shilah
            </h1>
            <p className="text-base sm:text-xl text-white/95 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
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
                  <span>Akreditasi Unggul & standar kurikulum internasional</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0077C8] shrink-0" />
                  <span>Laboratorium simulasi bedah dan anatomi berteknologi tinggi</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0077C8] shrink-0" />
                  <span>Jejaring fellowship riset medis global</span>
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
          <div className="pt-8 border-t border-gray-200">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111] mb-8 text-center">
              Program Akademik yang Ditawarkan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academicPrograms.map((prog, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-serif text-lg font-bold text-[#111111] mb-2">{prog.title}</h4>
                  <p className="text-sm text-[#4b5563] leading-relaxed mb-4">{prog.desc}</p>
                  <Link href="#" className="inline-flex items-center text-sm font-medium text-[#0077C8] hover:underline">
                    <span>Informasi pendaftaran</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
