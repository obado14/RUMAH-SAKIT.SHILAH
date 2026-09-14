import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FlaskConical, BookOpen, Users, Award, Microscope } from "lucide-react";

interface ResearchArticle {
  tag: string;
  title: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const researchArticles: ResearchArticle[] = [
  {
    tag: "Onkologi Presisi",
    title: "Inovasi Deteksi Dini Kanker Prostat Berbasis Biomarker Molekuler",
    summary:
      "Tim peneliti Shilah mengembangkan metode skrining non-invasif dengan akurasi 94% untuk deteksi dini sel tumor prostat agresif.",
    imageSrc: "/sites/hopkinsmedicine/images/7_dannals_pomper_jpg.png",
    imageAlt: "Peneliti Shilah menerima penghargaan inovator riset medis",
    href: "/research",
  },
  {
    tag: "Hematologi & Genomik",
    title: "Terobosan Terapi Seluler untuk Penyakit Darah Kompleks",
    summary:
      "Uji klinis fase lanjutan berhasil membuktikan efektivitas transplantasi sel punca dalam pemulihan pasien thalasemia dan anemia refrakter.",
    imageSrc: "/sites/hopkinsmedicine/images/8_audrey_smith-copy_jpg.png",
    imageAlt: "Pasien tersenyum hangat setelah perawatan di Shilah",
    href: "/research",
  },
  {
    tag: "Teknologi Bedah",
    title: "Integrasi Navigasi AI & Robotik pada Operasi Tulang Belakang",
    summary:
      "Penerapan presisi mikroskopis robotik menurunkan waktu operasi hingga 35% dengan tingkat pemulihan pasca-bedah yang jauh lebih cepat.",
    imageSrc: "/sites/hopkinsmedicine/images/9_rsl-640_jpg.png",
    imageAlt: "Simbol riset medis Shilah Medicine",
    href: "/research",
  },
];

const researchMetrics = [
  {
    icon: FlaskConical,
    value: "140+",
    label: "Uji Klinis Aktif",
    detail: "Protokol internasional",
  },
  {
    icon: BookOpen,
    value: "850+",
    label: "Publikasi Ilmiah",
    detail: "Jurnal peer-reviewed terindeks",
  },
  {
    icon: Users,
    value: "120+",
    label: "Dokter Peneliti",
    detail: "Spesialis & ilmuwan biomedis",
  },
  {
    icon: Award,
    value: "28",
    label: "Paten & Lisensi Terapi",
    detail: "Inovasi teknologi klinis",
  },
];

export function ResearchSpotlight() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 border-t border-gray-100">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2.5">
          <Microscope className="w-3.5 h-3.5" />
          Riset &amp; Inovasi Biomedis
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#00205B]">
          Research &amp; Clinical Innovation
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
          Menerjemahkan penemuan laboratorium terdepan langsung ke ranah terapi klinis demi memperpanjang harapan dan meningkatkan mutu hidup pasien.
        </p>
      </div>

      {/* Stats Ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
        {researchMetrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-gray-50/80 border border-gray-200/80 rounded-xl p-4 sm:p-5 flex items-center gap-3.5 hover:bg-blue-50/50 hover:border-blue-200 transition-colors"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#0077C8] shadow-sm shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xl sm:text-2xl font-bold font-serif text-[#00205B] leading-none">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-gray-800 mt-1 truncate">
                  {item.label}
                </div>
                <div className="text-[11px] text-gray-500 hidden sm:block truncate">
                  {item.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Feature Banner + Side Articles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Main Highlight Hero Card (7 cols) */}
        <div className="lg:col-span-7 bg-[#00205B] rounded-2xl overflow-hidden text-white shadow-md flex flex-col justify-between relative group">
          <div className="relative w-full h-[240px] sm:h-[280px] bg-slate-900 overflow-hidden">
            <Image
              src="/sites/hopkinsmedicine/images/14_researcher-in-lab_jpg.png"
              alt="Peneliti medis di laboratorium sedang mengamati sampel melalui mikroskop"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00205B] via-[#00205B]/40 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-block text-xs font-semibold bg-[#0077C8] text-white px-3 py-1 rounded-full shadow-sm">
                Fokus Riset Utama 2026
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                Pusat Penelitian Onkologi &amp; Kedokteran Presisi Shilah
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                Melalui kolaborasi lintas disiplin bersama institusi akademik internasional, Shilah Medicine memimpin pengembangan terapi seluler terarah, pemetaan biomarker genomik, serta digitalisasi protokol bedah berstandar global.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center gap-3">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0077C8] hover:bg-[#005a99] text-white font-medium text-xs sm:text-sm transition-colors shadow-sm"
              >
                <span>Jelajahi Riset Medis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/clinical-trials"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/30 hover:bg-white/10 text-white font-medium text-xs sm:text-sm transition-colors"
              >
                <span>Partisipasi Uji Klinis</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Compact Research Articles (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          {researchArticles.map((article, idx) => (
            <Link
              key={idx}
              href={article.href}
              className="group bg-white border border-gray-200 rounded-xl p-4 sm:p-5 hover:border-[#0077C8]/50 hover:shadow-md transition-all duration-200 flex gap-4 items-center"
            >
              {/* Thumbnail */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <span className="inline-block text-[11px] font-bold text-[#0077C8] mb-1">
                  {article.tag}
                </span>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#0077C8] transition-colors line-clamp-2 leading-snug mb-1">
                  {article.title}
                </h4>
                <p className="text-[12px] text-gray-500 line-clamp-2 leading-relaxed">
                  {article.summary}
                </p>
                <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#0077C8]">
                  <span>Baca ringkasan</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
