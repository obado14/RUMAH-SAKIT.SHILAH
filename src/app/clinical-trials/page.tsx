"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import {
  FlaskRound,
  ShieldCheck,
  Search,
  Users,
  ChevronRight,
} from "lucide-react";

interface Trial {
  id: string;
  title: string;
  category: string;
  phase: string;
  condition: string;
  investigator: string;
  status: "Menerima Relawan" | "Fase Analisis Data";
  summary: string;
}

const trialsList: Trial[] = [
  {
    id: "trial-01",
    title: "Evaluasi Terapi Target Kombinasi Imunoterapi pada Kanker Paru Stadium Lanjut",
    category: "Onkologi",
    phase: "Fase III",
    condition: "Non-Small Cell Lung Cancer (NSCLC)",
    investigator: "dr. Dewi Anggraini, Sp.PD-KHOM & Shilah Oncology Team",
    status: "Menerima Relawan",
    summary:
      "Studi klinis multisenter untuk mengevaluasi efektivitas antibodi monoklonal spesifik dalam meningkatkan respons sistem imun terhadap sel kanker.",
  },
  {
    id: "trial-02",
    title: "Uji Coba Klinis Stent Bioresorbable Generasi Baru untuk Pasien Penyakit Jantung Koroner",
    category: "Kardiologi",
    phase: "Fase II",
    condition: "Penyumbatan Pembuluh Darah Jantung",
    investigator: "dr. Adrian Shilah, Sp.JP(K) & Cardiovascular Institute",
    status: "Menerima Relawan",
    summary:
      "Penelitian inovatif mengenai scaffold vaskular biodegradable yang dapat diserap tubuh secara bertahap setelah pembuluh darah sembuh sempurna.",
  },
  {
    id: "trial-03",
    title: "Uji Efikasi Terapi Neuroprotektif Terkini pada Deteksi Dini Penyakit Alzheimer & Demensia",
    category: "Neurologi",
    phase: "Fase II",
    condition: "Mild Cognitive Impairment (MCI)",
    investigator: "Prof. Dr. dr. Ratna Shilah, Sp.S(K)",
    status: "Menerima Relawan",
    summary:
      "Meneliti efektivitas molekul penghambat plak beta-amiloid dalam memperlambat penurunan fungsi kognitif pada pasien usia 55-75 tahun.",
  },
  {
    id: "trial-04",
    title: "Penerapan Nanoteknologi dalam Formulasi Insulin Oral untuk Diabetes Melitus Tipe 1",
    category: "Endokrinologi",
    phase: "Fase I",
    condition: "Diabetes Mellitus Tipe 1",
    investigator: "Shilah Center for Metabolic & Genomic Health",
    status: "Menerima Relawan",
    summary:
      "Studi keamanan dan toleransi sistem penghantaran obat insulin berbasis nanopartikel pelindung asam lambung.",
  },
];

export default function ClinicalTrialsPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [search, setSearch] = useState("");

  const filtered = trialsList.filter((item) => {
    const matchCat = activeCategory === "Semua" || item.category === activeCategory;
    const matchQuery =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.condition.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative w-full bg-[#00205B] text-white py-16 sm:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/sites/hopkinsmedicine/images/clinical_trials_hero_bg.jpeg"
              alt="Tim Dokter Spesialis Bedah Shilah Medicine"
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
              Uji Coba & Riset Medis
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Uji Coba Klinis & Riset Terapi Shilah Medicine
            </h1>
            <p className="text-base sm:text-lg text-white font-normal max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Memajukan ilmu kedokteran untuk masa depan yang lebih sehat. Jelajahi uji coba klinis aktif kami dan pelajari bagaimana Anda dapat berpartisipasi.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto flex items-center bg-white rounded-lg p-2 shadow-2xl border border-white/20">
              <Search className="w-5 h-5 text-gray-400 ml-2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari uji klinis berdasarkan penyakit, obat, atau topik..."
                className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 focus:outline-none text-sm"
              />
            </div>
          </div>
        </section>

        {/* Why Participate Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <FlaskRound className="w-8 h-8 text-[#0077C8] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#111111] mb-2">
                Akses ke Terapi Terkini
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Relawan mendapatkan akses ke opsi perawatan medis paling mutakhir sebelum obat atau metode tersebut beredar secara komersial.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="font-serif text-base font-bold text-[#111111] mb-2">
                Diawasi Komite Etik Medis
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Setiap uji klinis diawasi secara independen oleh Komite Etik Penelitian Shilah Medicine untuk memastikan keselamatan mutlak relawan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <Users className="w-8 h-8 text-[#FFC20E] mb-3" />
              <h3 className="font-serif text-base font-bold text-[#111111] mb-2">
                Membantu Generasi Mendatang
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Partisipasi Anda memberikan kontribusi langsung dalam penemuan obat penyelamat nyawa bagi jutaan pasien di masa depan.
              </p>
            </div>
          </div>
        </section>

        {/* Trials Listing */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6 pb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="font-serif text-2xl font-bold text-[#111111]">
              Uji Coba Klinis yang Sedang Berjalan
            </h2>
            {/* Filter */}
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {["Semua", "Onkologi", "Kardiologi", "Neurologi", "Endokrinologi"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-[#002D72] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filtered.map((trial) => (
              <div
                key={trial.id}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-[#0077C8] border border-blue-100">
                    {trial.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-purple-50 text-purple-700 border border-purple-100">
                    {trial.phase}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {trial.status}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#111111] mb-2 leading-snug">
                  {trial.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                  {trial.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-500 mb-4 pt-3 border-t border-gray-100">
                  <div>
                    <strong className="text-gray-700">Kondisi Target:</strong> {trial.condition}
                  </div>
                  <div>
                    <strong className="text-gray-700">Peneliti Utama:</strong> {trial.investigator}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Link
                    href={`/appointments?trial=${encodeURIComponent(trial.title)}`}
                    className="inline-flex items-center space-x-1 px-4 py-2 bg-[#0077C8] hover:bg-[#005fa3] text-white text-xs font-semibold rounded transition-colors"
                  >
                    <span>Ajukan Konsultasi Kelayakan</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] text-gray-400">ID Riset: {trial.id.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
