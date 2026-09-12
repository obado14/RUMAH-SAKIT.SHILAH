"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import {
  Search,
  ChevronRight,
} from "lucide-react";

interface SearchResult {
  title: string;
  category: "Dokter" | "Layanan" | "Artikel" | "Lokasi" | "Pasien";
  description: string;
  href: string;
}

const mockDatabase: SearchResult[] = [
  {
    title: "dr. Adrian Shilah, Sp.JP(K), FIHA - Spesialis Jantung",
    category: "Dokter",
    description: "Kardiologi intervensi, pemasangan stent jantung, penanganan aritmia, dan penyakit jantung koroner.",
    href: "/doctors",
  },
  {
    title: "Prof. Dr. dr. Ratna Shilah, Sp.S(K) - Spesialis Saraf",
    category: "Dokter",
    description: "Pusat penanganan stroke akut, gangguan memori, neurovaskular, dan rehabilitasi sistem saraf.",
    href: "/doctors",
  },
  {
    title: "dr. Maya Kartika, Sp.A(K) - Spesialis Kesehatan Anak",
    category: "Dokter",
    description: "Pediatrik umum, tumbuh kembang anak, imunisasi lengkap, dan alergi imunologi anak.",
    href: "/doctors",
  },
  {
    title: "Pendaftaran Janji Temu Dokter (Schedule an Appointment)",
    category: "Layanan",
    description: "Reservasi jadwal konsultasi tatap muka dokter spesialis Shilah Medicine secara daring.",
    href: "/appointments",
  },
  {
    title: "Shilah MyChart - Portal Akses Rekam Medis & Hasil Lab",
    category: "Pasien",
    description: "Akses riwayat pengobatan, hasil laboratorium patologi, dan konsultasi dokter digital.",
    href: "/mychart",
  },
  {
    title: "Pembayaran Tagihan & Informasi Asuransi (Billing)",
    category: "Pasien",
    description: "Bayar tagihan rumah sakit via online, cek rincian biaya medis, dan mitra asuransi rekanan / BPJS.",
    href: "/billing",
  },
  {
    title: "Shilah Central Hospital & IGD 24 Jam",
    category: "Lokasi",
    description: "Jl. Shilah Medika No. 101, Cilandak, Jakarta Selatan. Instalasi Gawat Darurat & Pusat Trauma 24 Jam.",
    href: "/locations",
  },
  {
    title: "Uji Coba Klinis & Riset Kedokteran (Clinical Trials)",
    category: "Layanan",
    description: "Informasi partisipasi studi klinis, evaluasi terapi target baru, dan pengembangan obat masa depan.",
    href: "/clinical-trials",
  },
  {
    title: "A Digital 'Twin' for Individualized Cardiology",
    category: "Artikel",
    description: "Terobosan pemodelan komputasi jantung 3D untuk akurasi operasi kardiovaskular presisi.",
    href: "/news",
  },
  {
    title: "Pencegahan Penyakit Kardiovaskular & Hidup Sehat",
    category: "Artikel",
    description: "Tips menjaga kesehatan jantung, pola makan seimbang, dan pemeriksaan medical check-up berkala.",
    href: "/health",
  },
  {
    title: "Shilah School of Medicine (Fakultas Kedokteran)",
    category: "Layanan",
    description: "Program pendidikan kedokteran unggulan, residensi spesialis, dan riset translasi biomedis.",
    href: "/som",
  },
  {
    title: "Tentang Shilah Medicine (Visi, Misi & Sejarah)",
    category: "Layanan",
    description: "Mendedikasikan layanan kesehatan unggul, terpercaya, dan berstandar internasional bagi masyarakat.",
    href: "/about",
  },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [activeFilter, setActiveFilter] = useState<string>("Semua");

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const results = mockDatabase.filter((item) => {
    const matchFilter = activeFilter === "Semua" || item.category === activeFilter;
    if (!query.trim()) return matchFilter;
    const q = query.toLowerCase();
    const matchQuery =
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    return matchFilter && matchQuery;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* Search Input Box */}
      <form onSubmit={handleSearchSubmit} className="mb-8">
        <div className="flex items-center bg-white rounded-xl border-2 border-[#0077C8] p-2 shadow-md">
          <Search className="w-6 h-6 text-[#0077C8] ml-2 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari dokter, spesialisasi, tindakan, artikel kesehatan, atau lokasi..."
            className="w-full px-4 py-3 text-base text-gray-800 placeholder-gray-400 focus:outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#0077C8] hover:bg-[#005fa3] text-white font-medium text-sm rounded-lg transition-colors shrink-0"
          >
            Cari
          </button>
        </div>
      </form>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-8 border-b border-gray-200">
        {["Semua", "Dokter", "Layanan", "Pasien", "Artikel", "Lokasi"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
              activeFilter === tab
                ? "bg-[#002D72] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Results Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-lg sm:text-xl font-bold text-[#111111]">
          {query ? (
            <span>
              Hasil pencarian untuk &ldquo;<span className="text-[#0077C8]">{query}</span>&rdquo;
            </span>
          ) : (
            <span>Pencarian Populer & Layanan Unggulan</span>
          )}
        </h2>
        <span className="text-xs text-gray-500">
          {results.length} hasil ditemukan
        </span>
      </div>

      {/* Results List */}
      {results.length > 0 ? (
        <div className="space-y-4">
          {results.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-[#0077C8] border border-blue-100">
                  {item.category}
                </span>
              </div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#002D72] hover:underline mb-1">
                <Link href={item.href}>{item.title}</Link>
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="inline-flex items-center space-x-1 text-xs font-semibold text-[#0077C8] hover:underline"
              >
                <span>Buka halaman</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
          <p className="text-base text-gray-600 mb-2">
            Tidak ada hasil yang cocok dengan &ldquo;{query}&rdquo;.
          </p>
          <p className="text-xs text-gray-400 mb-6">
            Coba periksa ejaan kata kunci atau gunakan istilah yang lebih umum seperti &ldquo;jantung&rdquo;, &ldquo;janji temu&rdquo;, atau &ldquo;jadwal dokter&rdquo;.
          </p>
          <button
            onClick={() => {
              setQuery("");
              setActiveFilter("Semua");
            }}
            className="px-5 py-2.5 bg-[#0077C8] text-white text-xs font-semibold rounded-md hover:bg-[#005fa3] transition-colors"
          >
            Tampilkan Semua Halaman
          </button>
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* Top Header */}
        <section className="w-full bg-[#002D72] text-white py-10 sm:py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-serif text-2xl sm:text-4xl font-normal mb-2">
              Pencarian Layanan Medis Shilah
            </h1>
            <p className="text-xs sm:text-sm text-white/80 font-light">
              Cari informasi dokter, poliklinik, layanan medis, artikel, dan lokasi fasilitas Shilah.
            </p>
          </div>
        </section>

        {/* Suspense wrapped Search Content */}
        <Suspense
          fallback={
            <div className="max-w-5xl mx-auto px-4 py-16 text-center text-sm text-gray-500">
              Memuat data pencarian...
            </div>
          }
        >
          <SearchContent />
        </Suspense>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
