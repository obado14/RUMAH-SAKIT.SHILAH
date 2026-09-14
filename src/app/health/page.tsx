"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import { HealthGuideModal } from "@/components/HealthGuideModal";
import { HealthArticleModal } from "@/components/HealthArticleModal";
import { healthGuides, type HealthGuide } from "@/data/healthGuides";
import {
  healthArticles,
  popularHealthTopics,
  type HealthArticle,
} from "@/data/healthArticles";
import {
  Heart,
  Brain,
  Baby,
  Bone,
  ShieldPlus,
  ShieldCheck,
  ShieldAlert,
  Activity,
  Apple,
  Search,
  ChevronRight,
  Stethoscope,
  X,
  ExternalLink,
  Clock,
  Calendar,
  AlertCircle,
  Phone,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Brain,
  Baby,
  Bone,
  ShieldPlus,
  Activity,
};

const topicIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Activity,
  Baby,
  Apple,
  Brain,
  Bone,
  ShieldAlert,
  ShieldCheck,
};

const quickSearchQueries = [
  "Nyeri Dada",
  "Diabetes",
  "Stunting Anak",
  "Sakit Pinggang",
  "Gejala Stroke",
  "Skrining MCU",
  "Insomnia",
];

export default function HealthPage() {
  const [selectedGuide, setSelectedGuide] = useState<HealthGuide | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<HealthArticle | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  // Handle topic tag click
  const handleTopicClick = (query: string) => {
    if (activeTopic === query) {
      setActiveTopic(null);
      setSearchTerm("");
    } else {
      setActiveTopic(query);
      setSearchTerm(query);
    }
  };

  // Filter health guides
  const filteredGuides = useMemo(() => {
    if (!searchTerm.trim()) return healthGuides;
    const q = searchTerm.toLowerCase().trim();
    return healthGuides.filter((guide) => {
      const matchBasic =
        guide.title.toLowerCase().includes(q) ||
        guide.summary.toLowerCase().includes(q) ||
        guide.category.toLowerCase().includes(q) ||
        guide.fullTitle.toLowerCase().includes(q) ||
        guide.doctorName.toLowerCase().includes(q) ||
        guide.doctorSpecialty.toLowerCase().includes(q);

      const matchSigns = guide.warningSigns?.some((s) => s.toLowerCase().includes(q));
      const matchTips = guide.preventionTips?.some((t) => t.toLowerCase().includes(q));
      const matchExams = guide.recommendedExams?.some((e) => e.toLowerCase().includes(q));

      return matchBasic || matchSigns || matchTips || matchExams;
    });
  }, [searchTerm]);

  // Filter health articles
  const filteredArticles = useMemo(() => {
    if (!searchTerm.trim()) return healthArticles;
    const q = searchTerm.toLowerCase().trim();
    return healthArticles.filter((article) => {
      const matchBasic =
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        article.reviewer.name.toLowerCase().includes(q) ||
        article.reviewer.specialty.toLowerCase().includes(q);

      const matchTags = article.tags?.some((t) => t.toLowerCase().includes(q));
      const matchParagraphs = article.contentParagraphs?.some((p) => p.toLowerCase().includes(q));

      return matchBasic || matchTags || matchParagraphs;
    });
  }, [searchTerm]);

  const hasAnyResults = filteredGuides.length > 0 || filteredArticles.length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* 1. HERO SECTION */}
        <section className="relative w-full bg-[#00205B] text-white py-16 sm:py-24 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/sites/hopkinsmedicine/images/health_hero_bg.jpeg"
              alt="Pusat Informasi Kesehatan Shilah Medicine"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Elegant Translucent Blue Overlay */}
          <div className="absolute inset-0 bg-[#002D72]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001733]/90 via-[#002D72]/40 to-black/40" />

          {/* Foreground Content */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            {/* Requirement 1: Badge "INFORMASI KESEHATAN" */}
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 border border-white/25 shadow-sm">
              <BookOpen className="w-3.5 h-3.5 text-blue-200" />
              INFORMASI KESEHATAN
            </span>

            {/* Requirement 1: Retain title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Pusat Informasi Kesehatan Shilah
            </h1>

            {/* Requirement 1: Subtitle focused on health info & patient education */}
            <p className="text-sm sm:text-base lg:text-lg text-white/95 max-w-2xl mx-auto font-normal leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              Panduan medis tepercaya, edukasi pencegahan penyakit, dan wawasan kesehatan terkini yang disusun untuk mendukung keputusan kesehatan terbaik bagi Anda dan keluarga.
            </p>

            {/* 2. SEARCH BAR - Requirement 2 */}
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-2 shadow-2xl border border-white/30 flex items-center gap-2">
              <Search className="w-5 h-5 text-[#0077C8] ml-2 shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setActiveTopic(null);
                }}
                placeholder="Cari topik kesehatan, gejala, penyakit, spesialisasi, atau artikel..."
                className="w-full px-2 py-2 text-gray-800 placeholder-gray-400 focus:outline-none text-xs sm:text-sm md:text-base bg-transparent"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setActiveTopic(null);
                  }}
                  className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
                  title="Hapus pencarian"
                  aria-label="Hapus kata kunci pencarian"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                className="px-5 py-2.5 bg-[#0077C8] hover:bg-[#005a99] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-sm shrink-0 cursor-pointer flex items-center gap-1.5"
              >
                <span>Cari</span>
              </button>
            </div>

            {/* Quick Search Tag Suggestions */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs text-white/90 max-w-2xl mx-auto">
              <span className="text-white/70 font-medium mr-1 text-[11px] sm:text-xs">
                Pencarian Populer:
              </span>
              {quickSearchQueries.map((query, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleTopicClick(query)}
                  className={`px-2.5 py-1 rounded-full text-[11px] sm:text-xs transition-all cursor-pointer ${
                    searchTerm.toLowerCase() === query.toLowerCase()
                      ? "bg-white text-[#00205B] font-bold shadow-xs"
                      : "bg-white/15 hover:bg-white/25 text-white border border-white/20"
                  }`}
                >
                  {query}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 4. TOPIK KESEHATAN POPULER - Requirement 4 */}
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3 border-b border-gray-200/80 pb-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#0077C8]" />
                Jelajahi Berdasarkan Tema
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#00205B]">
                Topik Kesehatan Populer
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md">
              Pilih tema kesehatan untuk memfilter panduan klinis dan artikel edukasi relevan secara instan.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {popularHealthTopics.map((topic) => {
              const IconComp = topicIconMap[topic.icon] || Heart;
              const isSelected = activeTopic === topic.query || searchTerm.toLowerCase() === topic.query.toLowerCase();
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => handleTopicClick(topic.query)}
                  className={`group text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#00205B] text-white border-[#00205B] shadow-md ring-2 ring-[#0077C8]"
                      : "bg-white border-gray-200 hover:border-[#0077C8] hover:shadow-md text-gray-800"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-white/15 text-white"
                            : "bg-blue-50 text-[#0077C8] group-hover:bg-[#0077C8] group-hover:text-white"
                        }`}
                      >
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          isSelected ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {topic.count}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-sm sm:text-base leading-snug">
                      {topic.name}
                    </h3>
                    <p
                      className={`text-xs mt-1 line-clamp-2 leading-relaxed ${
                        isSelected ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {topic.description}
                    </p>
                  </div>

                  <div
                    className={`mt-3 pt-2.5 border-t text-[11px] font-semibold flex items-center justify-between ${
                      isSelected
                        ? "border-white/20 text-blue-200"
                        : "border-gray-100 text-[#0077C8] group-hover:text-[#002D72]"
                    }`}
                  >
                    <span>{isSelected ? "Filter Aktif" : "Lihat Topik"}</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* SEARCH NOT FOUND STATE */}
        {searchTerm && !hasAnyResults && (
          <section className="max-w-md mx-auto px-4 py-16 text-center">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">
                Topik Tidak Ditemukan
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-6">
                Tidak ada panduan atau artikel yang sesuai dengan &ldquo;{searchTerm}&rdquo;. Coba gunakan kata kunci umum seperti &ldquo;jantung&rdquo;, &ldquo;anak&rdquo;, atau &ldquo;sendi&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveTopic(null);
                }}
                className="px-5 py-2.5 bg-[#0077C8] hover:bg-[#005a99] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Tampilkan Semua Informasi
              </button>
            </div>
          </section>
        )}

        {/* KATEGORI INFORMASI KESEHATAN (Retained & Polished) */}
        {filteredGuides.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3 border-b border-gray-200/80 pb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
                  <Stethoscope className="w-3.5 h-3.5 text-[#0077C8]" />
                  Panduan Medis Berkelanjutan
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#00205B]">
                  Kategori Informasi Kesehatan
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 max-w-md">
                Disusun bersama dokter spesialis Shilah Medicine untuk memberikan wawasan pencegahan penyakit dan tanda bahaya yang harus diwaspadai.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides.map((guide) => {
                const IconComponent = categoryIconMap[guide.iconName] || Heart;
                return (
                  <div
                    key={guide.slug}
                    onClick={() => setSelectedGuide(guide)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedGuide(guide);
                      }
                    }}
                    className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#0077C8] transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden text-left"
                  >
                    {/* Top Accent bar on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0077C8]/0 to-transparent group-hover:from-[#00205B] group-hover:via-[#0077C8] group-hover:to-[#00A3E0] transition-all duration-300" />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-[#0077C8] text-[#0077C8] group-hover:text-white flex items-center justify-center transition-colors shadow-xs">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-semibold tracking-wide text-gray-600 bg-slate-100 px-3 py-1 rounded-full">
                          {guide.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-[#111111] group-hover:text-[#0077C8] transition-colors mb-2 leading-snug">
                        {guide.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {guide.summary}
                      </p>
                    </div>

                    {/* Doctor Reviewer Card */}
                    <div className="pt-4 border-t border-gray-100 mt-2">
                      <div className="flex items-center gap-2.5 mb-4 text-xs text-gray-700 bg-slate-50 p-2.5 rounded-xl border border-gray-100">
                        <Stethoscope className="w-4 h-4 text-[#0077C8] shrink-0" />
                        <div className="min-w-0">
                          <div className="text-[10px] text-gray-400 uppercase font-semibold">
                            Dokter Penelaah Medis:
                          </div>
                          <div className="font-medium text-gray-800 truncate">
                            {guide.doctorName}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedGuide(guide);
                          }}
                          className="inline-flex items-center text-[#0077C8] text-xs sm:text-sm font-semibold hover:text-[#00205B] group-hover:underline cursor-pointer"
                        >
                          <span>Baca panduan lengkap</span>
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <Link
                          href={`/health/${guide.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          title="Buka panduan di halaman penuh"
                          className="p-1.5 text-gray-400 hover:text-[#0077C8] hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 3. ARTIKEL KESEHATAN TERBARU - Requirement 3 & 5 */}
        {filteredArticles.length > 0 && (
          <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 border-t border-gray-200/80">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3 border-b border-gray-200/80 pb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#0077C8]" />
                  Wawasan &amp; Edukasi Klinis
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#00205B]">
                  Artikel Kesehatan Terbaru
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 max-w-md">
                Artikel kesehatan mendalam dan saran praktis yang ditelaah bersama tim dokter spesialis Shilah Medicine.
              </p>
            </div>

            {/* Articles Grid - Requirement 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#0077C8]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Article Image Container */}
                    <div className="relative w-full h-[190px] sm:h-[210px] overflow-hidden bg-gray-100">
                      <Image
                        src={article.imageSrc}
                        alt={article.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="inline-block text-[11px] font-semibold bg-white/95 text-[#00205B] px-3 py-1 rounded-full shadow-xs backdrop-blur-xs">
                          {article.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-[11px] font-medium">
                        <span className="flex items-center gap-1 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1 bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-5 sm:p-6">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#0077C8] transition-colors leading-snug mb-2.5">
                        {article.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  {/* Article Footer with Medical Reviewer info - Requirement 5 */}
                  <div className="px-5 sm:px-6 pb-5 pt-0">
                    <div className="p-3 rounded-xl bg-slate-50 border border-gray-100 mb-4 text-[11px] text-gray-600 space-y-1">
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <Stethoscope className="w-3.5 h-3.5 text-[#0077C8] shrink-0" />
                        <span>Ditinjau secara medis oleh:</span>
                      </div>
                      <div className="font-semibold text-gray-800 truncate">
                        {article.reviewer.name}
                      </div>
                      <div className="text-[10px] text-gray-500 truncate">
                        {article.reviewer.specialty}
                      </div>
                      <div className="text-[10px] text-gray-400 pt-1 border-t border-gray-200/60 flex items-center justify-between">
                        <span>Terakhir diperbarui:</span>
                        <span className="font-medium text-gray-600">{article.reviewer.lastUpdated}</span>
                      </div>
                    </div>

                    {/* Button Baca Artikel */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedArticle(article);
                      }}
                      className="w-full py-2.5 px-4 bg-blue-50 hover:bg-[#0077C8] text-[#0077C8] hover:text-white text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 group/btn cursor-pointer shadow-2xs"
                    >
                      <span>Baca Artikel</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. MEDICAL DISCLAIMER SECTION - Requirement 6 */}
        <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="bg-gradient-to-r from-blue-50/90 via-slate-50 to-blue-50/90 border border-blue-200/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-100 text-[#002D72] flex items-center justify-center shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5 text-[#0077C8]" />
              </div>
              <div className="space-y-1.5">
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#00205B]">
                  Pemberitahuan Medis (Medical Disclaimer)
                </h4>
                {/* Exact wording per requirement 6 */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-3xl">
                  Informasi yang tersedia di halaman ini ditujukan untuk tujuan edukasi dan informasi umum dan tidak dimaksudkan sebagai pengganti konsultasi, diagnosis, atau perawatan dari tenaga medis profesional.
                </p>
                <p className="text-[11px] sm:text-xs text-gray-500">
                  Jika Anda mengalami gejala gawat darurat medis, segera hubungi <strong>IGD 24 Jam RS Shilah: (021) 500-911</strong> atau kunjungi unit gawat darurat terdekat.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/appointments"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#0077C8] hover:bg-[#005a99] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-sm text-center flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Konsultasi Dokter</span>
              </Link>
              <a
                href="tel:021500911"
                className="w-full sm:w-auto px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors text-center flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 animate-pulse" />
                <span>IGD 24/7</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />

      {/* Interactive Medical Health Guide Modal */}
      <HealthGuideModal
        guide={selectedGuide}
        onClose={() => setSelectedGuide(null)}
      />

      {/* Interactive Health Article Modal Reader */}
      <HealthArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
