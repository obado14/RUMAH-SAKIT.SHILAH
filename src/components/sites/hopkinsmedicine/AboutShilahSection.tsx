import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Microscope,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";

export function AboutShilahSection() {
  const pillars = [
    {
      title: "Patient-Centered Healthcare",
      subtitle: "Pelayanan Medis Paripurna",
      desc: "Menempatkan keselamatan, kenyamanan, dan martabat pasien sebagai prioritas utama dalam setiap tindakan klinis dan keperawatan.",
      icon: HeartHandshake,
      link: "/patient-care",
    },
    {
      title: "Academic Medical Education",
      subtitle: "Fakultas Kedokteran Shilah",
      desc: "Mendidik calon dokter umum, dokter spesialis, dan peneliti medis berintegritas tinggi dengan kurikulum terakreditasi internasional WFME.",
      icon: GraduationCap,
      link: "/som",
    },
    {
      title: "Translational Clinical Research",
      subtitle: "Riset Biomedis & Inovasi",
      desc: "Menghubungkan temuan laboratorium dengan praktik klinis nyata untuk menghasilkan terapi dan obat baru yang menyelamatkan nyawa.",
      icon: Microscope,
      link: "/research",
    },
  ];

  const stats = [
    { value: "700+", label: "Tempat Tidur Rawat Inap Terstandarisasi", sub: "VVIP, VIP, Kelas 1-3 & Ruang Intensif" },
    { value: "150+", label: "Dokter Spesialis & Subspesialis", sub: "Konsultan Lulusan Terbaik Dalam & Luar Negeri" },
    { value: "24/7", label: "Layanan Gawat Darurat & Trauma Center", sub: "Siaga Kateterisasi Jantung & Stroke 24 Jam" },
    { value: "Paripurna", label: "Akreditasi Mutu Rumah Sakit", sub: "Standar KARS & Rekognisi Internasional JCI" },
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Header & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#0077C8] text-xs font-semibold uppercase tracking-wider border border-blue-100">
              Institusi Kesehatan Akademik
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#111111] leading-tight">
              Tentang Shilah Medicine: Sinergi Pelayanan, Pendidikan & Riset
            </h2>
            <div className="w-16 h-1 bg-[#0077C8]" />
            <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
              Shilah Medicine adalah sistem kesehatan akademik terintegrasi yang menggabungkan rumah sakit rujukan nasional, fakultas kedokteran unggul, dan lembaga riset biomedis terkemuka. Kami berkomitmen menghadirkan standar mutu pelayanan kesehatan terbaik bagi seluruh masyarakat Indonesia.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#002D72] hover:bg-[#001D4A] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-xs"
              >
                <span>Pelajari Profil Lengkap</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/som"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-gray-800 text-xs sm:text-sm font-semibold rounded-xl transition-colors"
              >
                <span>Fakultas Kedokteran</span>
              </Link>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <Image
                src="/sites/hopkinsmedicine/images/about_hero_bg.png"
                alt="Gedung Utama Shilah Medicine"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00205B]/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <span className="text-[11px] font-semibold text-blue-200 uppercase tracking-wider block">
                  Komitmen Pelayanan
                </span>
                <p className="font-serif text-base sm:text-lg font-bold">
                  Dedikasi Tanpa Henti untuk Keselamatan dan Martabat Setiap Pasien
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl p-6 sm:p-7 border border-gray-200/90 hover:border-[#0077C8] hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077C8] flex items-center justify-center shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-[#0077C8] block uppercase tracking-wider">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-gray-200/60">
                  <Link
                    href={pillar.link}
                    className="inline-flex items-center text-xs font-semibold text-[#0077C8] hover:text-[#002D72] hover:underline"
                  >
                    <span>Selengkapnya</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Hospital Statistics */}
        <div className="bg-[#00205B] text-white rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
            {stats.map((st, i) => (
              <div key={i} className="space-y-1 sm:border-r last:border-r-0 border-white/15 sm:pr-6">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {st.value}
                </span>
                <h4 className="text-xs sm:text-sm font-semibold text-blue-100">
                  {st.label}
                </h4>
                <p className="text-[11px] text-blue-200/70">
                  {st.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
