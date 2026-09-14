"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import {
  Microscope,
  FlaskConical,
  Dna,
  FileText,
  Search,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Heart,
  Brain,
  ShieldAlert,
  Bug,
  Activity,
  Cpu,
  Users,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Stethoscope,
} from "lucide-react";

// 4 Focus Riset Unggulan (Preserved)
const researchFocusCards = [
  {
    icon: Microscope,
    title: "Penelitian Kanker & Onkologi Presisi",
    desc: "Mengembangkan terapi target dan imunoterapi mutakhir untuk mendeteksi serta menghancurkan sel kanker secara selektif.",
  },
  {
    icon: Dna,
    title: "Genomika & Pengobatan Personal",
    desc: "Menganalisis profil genetik pasien untuk menentukan rencana terapi yang tepat dan meminimalkan efek samping obat.",
  },
  {
    icon: FlaskConical,
    title: "Uji Klinis Terapi Kardiovaskular",
    desc: "Studi klinis terkontrol untuk penanganan gagal jantung, intervensi vaskular, dan regenerasi jaringan miokardium.",
  },
  {
    icon: FileText,
    title: "Publikasi Jurnal Ilmiah Internasional",
    desc: "Diseminasi hasil riset biomedis dan telaah klinis melalui jurnal ilmiah kedokteran bereputasi dan terindeks global.",
  },
];

// 8 Bidang Penelitian (Research Areas - Compact Grid)
const researchAreasList = [
  {
    icon: ShieldAlert,
    title: "Cancer & Oncology",
    desc: "Terapi target molekuler, imunoterapi seluler, dan deteksi dini biomarker keganasan.",
  },
  {
    icon: Heart,
    title: "Cardiovascular Research",
    desc: "Intervensi vaskular mutakhir, scaffold bioresorbable, dan pemodelan elektrofisiologi.",
  },
  {
    icon: Brain,
    title: "Neuroscience",
    desc: "Neuroplastisitas, deteksi dini demensia Alzheimer, dan manajemen stroke iskemik akut.",
  },
  {
    icon: Dna,
    title: "Genomics & Precision Medicine",
    desc: "Pemetaan profil DNA dan terapi individual berbasis farmakogenomik presisi.",
  },
  {
    icon: Bug,
    title: "Infectious Diseases",
    desc: "Surveilans resistensi antimikroba, imunologi infeksi, dan pengembangan protokol diagnostik.",
  },
  {
    icon: Activity,
    title: "Regenerative Medicine",
    desc: "Terapi sel punca hematopoietik, regenerasi jaringan kartilago, dan rekayasa biomaterial.",
  },
  {
    icon: Cpu,
    title: "Medical Technology",
    desc: "Sistem navigasi bedah robotik, mikroskop digital presisi, dan komputasi biomedical.",
  },
  {
    icon: Users,
    title: "Population Health",
    desc: "Epidemiologi klinis, pencegahan penyakit kardiovaskular komunitas, dan nutrisi preventif.",
  },
];

// 3 Penelitian Unggulan (Featured Research)
const featuredProjects = [
  {
    id: "proj-01",
    category: "Oncology",
    title: "Analisis Biomarker Genomik Cair (Liquid Biopsy) untuk Deteksi Dini Kanker",
    desc: "Pengembangan metode deteksi dini fragmen DNA tumor sirkulasi (ctDNA) melalui tes darah non-invasif untuk memonitor respons terapi onkologi secara presisi.",
    status: "Ongoing",
    statusColor: "bg-blue-50 text-[#0077C8] border-blue-200",
    image: "/sites/hopkinsmedicine/images/7_dannals_pomper_jpg.png",
    lead: "dr. Dewi Anggraini, Sp.PD-KHOM",
  },
  {
    id: "proj-02",
    category: "Cardiovascular Research",
    title: "Pemodelan Komputasi Digital Twin untuk Terapi Ablasi Aritmia Kompleks",
    desc: "Menciptakan representasi digital 3D jantung pasien guna memetakan jalur impuls listrik abnormal sebelum prosedur kateterisasi ablasi ventrikel dilakukan.",
    status: "Featured",
    statusColor: "bg-amber-50 text-amber-800 border-amber-200",
    image: "/sites/hopkinsmedicine/images/12_digital-twin-heart_jpg.png",
    lead: "dr. Adrian Shilah, Sp.JP(K)",
  },
  {
    id: "proj-03",
    category: "Precision Medicine & Robotic",
    title: "Navigasi Robotik Presisi Tinggi pada Operasi Tulang Belakang & Saraf",
    desc: "Penerapan mikronavigasi sensorik terintegrasi AI untuk meningkatkan akurasi pemasangan implan tulang belakang hingga tingkat presisi sub-milimeter.",
    status: "Ongoing",
    statusColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
    image: "/sites/hopkinsmedicine/images/11_microgrippers-illustration_jpg.png",
    lead: "dr. Hendra Pratama, Sp.OT(K)",
  },
];

// Daftar Uji Klinis (Clinical Trials)
const clinicalTrialsData = [
  {
    id: "trial-01",
    specialty: "Oncology",
    title: "Evaluasi Terapi Target Kombinasi Imunoterapi pada Kanker Paru Stadium Lanjut",
    condition: "Non-Small Cell Lung Cancer (NSCLC)",
    phase: "Fase III",
    status: "Recruiting",
    investigator: "dr. Dewi Anggraini, Sp.PD-KHOM & Oncology Team",
    desc: "Studi klinis terkontrol untuk mengevaluasi efektivitas antibodi monoklonal spesifik dalam meningkatkan respons sistem imun.",
  },
  {
    id: "trial-02",
    specialty: "Cardiovascular",
    title: "Uji Coba Klinis Stent Bioresorbable Generasi Baru untuk Pasien Jantung Koroner",
    condition: "Penyumbatan Pembuluh Darah Koroner",
    phase: "Fase II",
    status: "Recruiting",
    investigator: "dr. Adrian Shilah, Sp.JP(K) & Cardiovascular Institute",
    desc: "Penelitian scaffold vaskular biodegradable yang diserap alami oleh tubuh setelah pembuluh arteri sembuh stabil.",
  },
  {
    id: "trial-03",
    specialty: "Neuroscience",
    title: "Uji Efikasi Terapi Neuroprotektif pada Deteksi Dini Penurunan Kognitif",
    condition: "Mild Cognitive Impairment (MCI) & Fase Awal Demensia",
    phase: "Fase II",
    status: "Active",
    investigator: "Prof. Dr. dr. Ratna Shilah, Sp.S(K)",
    desc: "Meneliti efektivitas molekul penghambat plak amiloid dalam menjaga plastisitas sinaps sel saraf otak.",
  },
];

// Peneliti & Pakar (Researchers & Experts)
const researchers = [
  {
    name: "Prof. Dr. dr. Ratna Shilah, Sp.S(K), FANA",
    role: "Kepala Peneliti Neurovaskular & Stroke",
    area: "Neuroscience & Neuroproteksi",
    image: "/sites/hopkinsmedicine/images/prof_ratna_shilah.jpeg",
    slug: "prof-ratna",
  },
  {
    name: "dr. Adrian Shilah, Sp.JP(K), FIHA",
    role: "Peneliti Utama Kardiologi Intervensi",
    area: "Cardiovascular & Digital Twin",
    image: "/sites/hopkinsmedicine/images/dr_adrian_shilah.jpeg",
    slug: "dr-adrian",
  },
  {
    name: "dr. Dewi Anggraini, Sp.PD-KHOM, FINASIM",
    role: "Peneliti Utama Onkologi & Imunoterapi",
    area: "Precision Oncology & Hematologi",
    image: "/sites/hopkinsmedicine/images/dr_dewi_anggraini.jpeg",
    slug: "dr-dewi",
  },
  {
    name: "dr. Hendra Pratama, Sp.OT(K), Spine",
    role: "Peneliti Biomekanika & Bedah Robotik",
    area: "Orthopedics & Spine Surgery",
    image: "/sites/hopkinsmedicine/images/dr_hendra_pratama.jpeg",
    slug: "dr-hendra",
  },
];

// Publikasi Ilmiah Terbaru
const latestPublications = [
  {
    title: "Biomarker-Driven Early Detection of Aggressive Prostate Adenocarcinoma: A Multicenter Cohort Study",
    journal: "Indonesian Journal of Clinical Oncology",
    year: "2026",
    area: "Oncology",
    authors: "Anggraini D., Shilah R., et al.",
  },
  {
    title: "Computational Patient-Specific Modeling for Complex Ventricular Tachycardia Catheter Ablation",
    journal: "Asia-Pacific Cardiology & Arrhythmia Review",
    year: "2025",
    area: "Cardiovascular",
    authors: "Shilah A., Santoso B., et al.",
  },
  {
    title: "Serum Neurofilament Light Chain as a Prognostic Biomarker in Early Ischemic Stroke Recovery",
    journal: "Journal of Clinical Neurosciences & Cerebrovascular Health",
    year: "2025",
    area: "Neuroscience",
    authors: "Shilah R., Kartika M., et al.",
  },
  {
    title: "Minimally Invasive Endoscopic Transforaminal Decompression Outcomes in Lumbar Spinal Stenosis",
    journal: "International Orthopedic & Spine Surgery Journal",
    year: "2025",
    area: "Orthopedics",
    authors: "Pratama H., Wijaya H., et al.",
  },
];

// Alur: Dari Laboratorium ke Pasien (Translational Pipeline)
const translationSteps = [
  {
    step: "01",
    label: "Research",
    desc: "Identifikasi hipotesis ilmiah dan pemahaman mekanisme molekuler penyakit.",
  },
  {
    step: "02",
    label: "Laboratory Discovery",
    desc: "Pengujian biomarker presisi dan karakterisasi senyawa kandidat di laboratorium.",
  },
  {
    step: "03",
    label: "Clinical Research",
    desc: "Pelaksanaan protokol uji klinis fase bertahap dengan evaluasi keamanan ketat.",
  },
  {
    step: "04",
    label: "Medical Innovation",
    desc: "Integrasi teknologi terapi dan metode diagnostik baru ke standar tata laksana klinis.",
  },
  {
    step: "05",
    label: "Better Patient Care",
    desc: "Aplikasi langsung di tempat tidur pasien untuk mempercepat pemulihan dan kualitas hidup.",
  },
];

export default function ResearchPage() {
  const [trialCategory, setTrialCategory] = useState("Semua");
  const [trialSearch, setTrialSearch] = useState("");

  const filteredTrials = clinicalTrialsData.filter((t) => {
    const matchCat = trialCategory === "Semua" || t.specialty === trialCategory;
    const matchQuery =
      t.title.toLowerCase().includes(trialSearch.toLowerCase()) ||
      t.condition.toLowerCase().includes(trialSearch.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* HERO SECTION (Preserved) */}
        <section className="relative w-full bg-[#00205B] text-white py-16 sm:py-24 lg:py-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/sites/hopkinsmedicine/images/research_hero_bg.jpeg"
              alt="Penelitian dan Riset Laboratorium Shilah Medicine"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Translucent Blue Overlay */}
          <div className="absolute inset-0 bg-[#002D72]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001733]/90 via-[#002D72]/40 to-black/40" />

          {/* Foreground Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 border border-white/25 shadow-xs">
              <Microscope className="w-3.5 h-3.5 text-blue-200" />
              Inovasi Medis Masa Depan
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold mb-5 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Riset &amp; Inovasi Medis Shilah
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Riset adalah pondasi Shilah Medicine untuk menghasilkan wawasan baru, terapi inovatif, dan keselamatan hidup pasien.
            </p>
          </div>
        </section>

        {/* RESEARCH SPOTLIGHT: Menghubungkan Laboratorium dengan Tempat Tidur Pasien (Preserved) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#0077C8]" />
                Riset Translasi Terpadu
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B] leading-tight">
                Menghubungkan Laboratorium dengan Tempat Tidur Pasien
              </h2>
              <div className="w-14 h-1 bg-[#0077C8]" />
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Di Shilah Medicine, para saintis dan klinisi bekerja berdampingan dalam model riset translasi (*bench-to-bedside*). Hasil penemuan mutakhir di laboratorium dapat langsung diaplikasikan ke dalam praktik medis nyata untuk menyelamatkan nyawa pasien dengan kondisi klinis paling kompleks.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Melalui kolaborasi lintas disiplin bersama institusi akademik kedokteran terkemuka, kami terus memperluas batas pengetahuan demi menciptakan masa depan terapi kesehatan yang presisi, aman, dan berorientasi pada pemulihan pasien.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-slate-100">
                <Image
                  src="/sites/hopkinsmedicine/images/14_researcher-in-lab_jpg.png"
                  alt="Laboratorium penelitian Shilah Medicine"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#00205B] text-white p-4 sm:p-5 rounded-xl shadow-lg border border-white/20 hidden sm:block max-w-[240px]">
                <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wider block mb-1">
                  Standar Etik
                </span>
                <p className="text-xs text-gray-200 leading-snug">
                  Kepatuhan penuh pada protokol komite etik penelitian klinis internasional.
                </p>
              </div>
            </div>
          </div>

          {/* FOKUS RISET UNGGULAN (Preserved 4 Cards) */}
          <div className="pt-10 border-t border-gray-200">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
                Prioritas Ilmiah
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#00205B]">
                Fokus Riset Unggulan
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Empat pilar penelitian strategis yang mendorong transformasi terapi kesehatan modern.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchFocusCards.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md hover:border-[#0077C8]/60 transition-all flex flex-col justify-start"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077C8] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#00205B] mb-2">
                      {area.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 2. RESEARCH AREAS (Bidang Penelitian - Compact Grid) */}
        <section className="w-full bg-[#f8fafc] py-14 sm:py-20 border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs mb-2">
                Disiplin Ilmu
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B]">
                Bidang Penelitian
              </h2>
              <div className="w-14 h-1 bg-[#0077C8] mx-auto mt-3 mb-3" />
              <p className="text-xs sm:text-sm text-gray-600">
                Eksplorasi multidisiplin yang memadukan biologi molekuler, rekayasa biomedis, dan kesehatan populasi.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {researchAreasList.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 hover:border-[#0077C8] hover:shadow-sm transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0077C8] flex items-center justify-center mb-3">
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif font-bold text-sm sm:text-base text-gray-900 mb-1.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 1. FEATURED RESEARCH (Penelitian Unggulan - 3 Cards) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 border-b border-gray-200 pb-4">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
                Proyek Strategis
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B]">
                Penelitian Unggulan
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md">
              Inovasi penemuan terpilih yang sedang dikembangkan untuk memberikan dampak klinis nyata bagi pasien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {featuredProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#0077C8]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-[200px] overflow-hidden bg-slate-100">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="inline-block text-[11px] font-semibold bg-white/95 text-[#00205B] px-2.5 py-0.5 rounded-full shadow-2xs backdrop-blur-xs">
                        {proj.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${proj.statusColor} bg-white/90 shadow-2xs`}>
                        {proj.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#0077C8] transition-colors leading-snug mb-2.5">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {proj.desc}
                    </p>
                    <div className="text-[11px] text-gray-500 pt-3 border-t border-gray-100 flex items-center gap-1.5">
                      <Stethoscope className="w-3.5 h-3.5 text-[#0077C8] shrink-0" />
                      <span className="truncate">Peneliti: <strong>{proj.lead}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 pt-0">
                  <Link
                    href="/clinical-trials"
                    className="w-full py-2.5 px-4 bg-blue-50 hover:bg-[#0077C8] text-[#0077C8] hover:text-white text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>Lihat Penelitian</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. CLINICAL TRIALS (Daftar Penelitian Klinis dengan Filter) */}
        <section className="w-full bg-[#f8fafc] py-14 sm:py-20 border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-gray-200 pb-4">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs mb-2">
                  Studi Klinis Terkontrol
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B]">
                  Clinical Trials
                </h2>
              </div>
              <Link
                href="/clinical-trials"
                className="text-xs sm:text-sm font-semibold text-[#0077C8] hover:underline flex items-center gap-1"
              >
                <span>Halaman Uji Klinis Lengkap &rarr;</span>
              </Link>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                {["Semua", "Oncology", "Cardiovascular", "Neuroscience"].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setTrialCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer shrink-0 ${
                      trialCategory === cat
                        ? "bg-[#00205B] text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={trialSearch}
                  onChange={(e) => setTrialSearch(e.target.value)}
                  placeholder="Cari uji klinis..."
                  className="w-full pl-9 pr-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0077C8]"
                />
              </div>
            </div>

            {/* Trials List */}
            <div className="space-y-4">
              {filteredTrials.map((trial) => (
                <div
                  key={trial.id}
                  className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 hover:shadow-md hover:border-[#0077C8]/60 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-[#0077C8] border border-blue-200">
                        {trial.specialty}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-700">
                        {trial.phase}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Status: {trial.status}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#00205B]">
                      {trial.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {trial.desc}
                    </p>
                    <div className="text-[11px] text-gray-500">
                      Indikasi: <span className="font-medium text-gray-700">{trial.condition}</span> • Peneliti: <span className="font-medium text-gray-700">{trial.investigator}</span>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <Link
                      href="/clinical-trials"
                      className="px-5 py-2.5 bg-[#0077C8] hover:bg-[#005a99] text-white text-xs font-semibold rounded-xl transition-colors shadow-2xs text-center block w-full sm:w-auto"
                    >
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. RESEARCHERS & EXPERTS (Peneliti & Pakar) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
              Tim Peneliti Klinis
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B]">
              Researchers &amp; Experts
            </h2>
            <div className="w-14 h-1 bg-[#0077C8] mx-auto mt-3 mb-3" />
            <p className="text-xs sm:text-sm text-gray-600">
              Dokter spesialis dan ilmuwan biomedis Shilah Medicine yang memimpin studi klinis dan translasi terapi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchers.map((r, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md hover:border-[#0077C8] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-[4/5] bg-slate-100 overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.name}
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4 sm:p-5">
                    <h4 className="font-serif font-bold text-sm sm:text-base text-gray-900 mb-1 leading-snug">
                      {r.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#0077C8] mb-2 leading-tight">
                      {r.role}
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Bidang: <span className="font-medium text-gray-700">{r.area}</span>
                    </p>
                  </div>
                </div>

                <div className="px-4 sm:px-5 pb-4 pt-0">
                  <Link
                    href={`/doctors/${r.slug}`}
                    className="w-full py-2 px-3 border border-gray-200 hover:border-[#0077C8] hover:bg-blue-50 text-gray-700 hover:text-[#0077C8] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Lihat Profil</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. LATEST PUBLICATIONS (Publikasi Terbaru) */}
        <section id="publications" className="w-full bg-[#f8fafc] py-14 sm:py-20 border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-gray-200 pb-4">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs mb-2">
                  Diseminasi Ilmiah
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B]">
                  Publikasi Terbaru
                </h2>
              </div>
              <a
                href="#publications"
                className="text-xs sm:text-sm font-semibold text-[#0077C8] hover:underline flex items-center gap-1"
              >
                <span>View All Publications &rarr;</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {latestPublications.map((pub, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 hover:shadow-sm hover:border-[#0077C8]/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="font-semibold text-[#0077C8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 text-[11px]">
                        {pub.area}
                      </span>
                      <span className="flex items-center gap-1 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {pub.year}
                      </span>
                    </div>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-gray-900 leading-snug">
                      &ldquo;{pub.title}&rdquo;
                    </h4>
                    <p className="text-xs text-gray-500 italic">
                      {pub.journal}
                    </p>
                    <p className="text-[11px] text-gray-400">
                      Penulis: {pub.authors}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400">Peer-Reviewed Article</span>
                    <button
                      type="button"
                      onClick={() => alert(`Publikasi Ilmiah:\n"${pub.title}"\n${pub.journal} (${pub.year})\n\nAbstrak lengkap dapat diakses melalui repositori akademik Shilah Medicine.`)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#0077C8] hover:underline cursor-pointer"
                    >
                      <span>Baca Publikasi</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. RESEARCH TO PATIENT IMPACT (Dari Laboratorium ke Pasien) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
              Model Translasi Medis
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B]">
              Dari Laboratorium ke Pasien
            </h2>
            <div className="w-14 h-1 bg-[#0077C8] mx-auto mt-3 mb-3" />
            <p className="text-xs sm:text-sm text-gray-600">
              Tujuan utama seluruh riset Shilah Medicine adalah menerjemahkan penemuan ilmiah menjadi inovasi nyata yang menyelamatkan nyawa pasien.
            </p>
          </div>

          {/* Stepper Grid Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {translationSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#0077C8] hover:shadow-md transition-all flex flex-col justify-between text-left relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold font-serif text-[#0077C8]">
                      {step.step}
                    </span>
                    {idx < translationSteps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-gray-300 hidden lg:block" />
                    )}
                  </div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#00205B] mb-2 leading-snug">
                    {step.label}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-gray-100 flex items-center gap-1.5 text-[10px] font-bold text-[#0077C8] uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Tahap {idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. FINAL CTA: Bangun Masa Depan Kesehatan Bersama Shilah */}
        <section className="w-full bg-gradient-to-br from-[#00205B] via-[#002D72] to-[#001D4A] text-white py-14 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium mb-3 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              <span>Kolaborasi Ilmiah &amp; Kemajuan Medis</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
              Bangun Masa Depan Kesehatan Bersama Shilah
            </h2>
            <p className="text-xs sm:text-base text-gray-200 max-w-xl mx-auto mb-8 leading-relaxed font-light">
              Kami membuka peluang kemitraan riset biomedis, kolaborasi uji klinis, dan partisipasi ilmiah demi mempercepat penemuan terapi baru.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-[#00205B] hover:bg-gray-100 text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-sm"
              >
                Research Collaboration
              </Link>
              <Link
                href="/clinical-trials"
                className="px-6 py-3 bg-[#0077C8] hover:bg-[#005a99] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-md"
              >
                Explore Clinical Trials
              </Link>
              <a
                href="#publications"
                className="px-6 py-3 bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors border border-white/25"
              >
                View Publications
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
