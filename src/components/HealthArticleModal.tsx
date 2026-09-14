"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HealthArticle } from "@/data/healthArticles";
import {
  X,
  Clock,
  Calendar,
  Stethoscope,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface HealthArticleModalProps {
  article: HealthArticle | null;
  onClose: () => void;
}

export function HealthArticleModal({ article, onClose }: HealthArticleModalProps) {
  useEffect(() => {
    if (!article) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto border border-gray-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-gray-100 bg-slate-50/90 shrink-0">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#002D72] truncate pr-2">
            <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#002D72] text-[11px] font-bold">
              {article.category}
            </span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center gap-1 text-gray-600">
              <Clock className="w-3.5 h-3.5 text-[#0077C8]" />
              {article.readTime}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors cursor-pointer shrink-0"
            aria-label="Tutup artikel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">
          {/* Cover Image */}
          <div className="relative w-full h-[200px] sm:h-[280px] rounded-2xl overflow-hidden bg-slate-100 border border-gray-100">
            <Image
              src={article.imageSrc}
              alt={article.imageAlt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex items-center justify-between">
              <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                {article.date}
              </span>
              <span className="text-white/80">Edukasi Pasien Shilah Medicine</span>
            </div>
          </div>

          {/* Title & Summary */}
          <div>
            <h2
              id="article-modal-title"
              className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-3"
            >
              {article.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal bg-blue-50/50 p-4 rounded-xl border-l-4 border-[#0077C8]">
              {article.summary}
            </p>
          </div>

          {/* Key Takeaways */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 space-y-2.5">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Poin Kunci Edukasi (Key Takeaways)
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-800">
                {article.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Body Content Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            {article.contentParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Medical Review Accreditation Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-gray-200 space-y-2.5">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-[#0077C8]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#002D72]">
                Informasi Penelaahan Medis
              </span>
            </div>
            <div className="text-xs sm:text-sm text-gray-800">
              <span className="text-gray-500">Ditinjau secara medis oleh: </span>
              <strong className="text-[#00205B]">{article.reviewer.name}</strong>
              <div className="text-xs text-gray-600 mt-0.5">
                {article.reviewer.specialty} • {article.reviewer.hospitalDepartment}
              </div>
            </div>
            <div className="pt-2 border-t border-gray-200/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-500">
              <span>Terakhir diperbarui: <strong>{article.reviewer.lastUpdated}</strong></span>
              <span>Disusun untuk tujuan edukasi kesehatan umum</span>
            </div>
          </div>

          {/* Mini Medical Disclaimer in modal */}
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-950">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Catatan Medis:</strong> Informasi ini tidak menggantikan diagnosis langsung atau resep dari dokter spesialis. Bila Anda mengalami gejala menetap, segera lakukan konsultasi di fasilitas kesehatan.
            </p>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-3.5 sm:p-5 border-t border-gray-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 border border-gray-200 hover:bg-gray-100 text-gray-700 text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer text-center"
          >
            Tutup Bacaan
          </button>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {article.relatedDoctorSlug && (
              <Link
                href={`/doctors/${article.relatedDoctorSlug}`}
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl transition-colors text-center"
              >
                Profil Dokter
              </Link>
            )}
            <Link
              href={`/appointments?doctor=${encodeURIComponent(article.reviewer.name)}`}
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-[#0077C8] hover:bg-[#005fa3] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group text-center"
            >
              <Calendar className="w-4 h-4" />
              <span>Jadwalkan Konsultasi</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
