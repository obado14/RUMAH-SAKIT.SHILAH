"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HealthGuide } from "@/data/healthGuides";
import {
  X,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  ArrowRight,
  BookOpen,
} from "lucide-react";

interface HealthGuideModalProps {
  guide: HealthGuide | null;
  onClose: () => void;
}

export function HealthGuideModal({ guide, onClose }: HealthGuideModalProps) {
  useEffect(() => {
    if (!guide) return;

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
  }, [guide, onClose]);

  if (!guide) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto border border-gray-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 border-b border-gray-100 bg-slate-50/90 shrink-0">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#002D72] truncate pr-2">
            <BookOpen className="w-4 h-4 text-[#0077C8] shrink-0" />
            <span className="truncate">Panduan Edukasi Kesehatan Shilah Medicine</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors cursor-pointer shrink-0"
            aria-label="Tutup panduan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">
          {/* Guide Banner */}
          <div className="space-y-3 bg-gradient-to-br from-blue-50/70 via-slate-50 to-white p-5 rounded-2xl border border-blue-100/60">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#002D72] text-white">
                {guide.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-[#0077C8] border border-blue-100">
                Informasi Terverifikasi Medis
              </span>
            </div>

            <h2
              id="guide-modal-title"
              className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#111111] leading-tight"
            >
              {guide.fullTitle}
            </h2>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {guide.intro}
            </p>
          </div>

          {/* Warning Signs */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-red-900 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              Tanda & Gejala Bahaya yang Perlu Diwaspadai (Red Flags)
            </h3>
            <div className="space-y-2">
              {guide.warningSigns.map((sign, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-red-50/60 border border-red-200/80 text-xs sm:text-sm text-red-950"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-red-600 mt-0.5 shrink-0" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prevention & Lifestyle Tips */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              Langkah Pencegahan & Pola Hidup Sehat
            </h3>
            <div className="space-y-2">
              {guide.preventionTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100 text-xs sm:text-sm text-gray-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Medical Exams */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-[#002D72] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0077C8] shrink-0" />
              Pemeriksaan Diagnostik yang Dianjurkan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {guide.recommendedExams.map((exam, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-xs sm:text-sm text-gray-800 font-medium flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0077C8] shrink-0" />
                  <span>{exam}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor Specialist Reference Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-gray-200 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="relative w-20 sm:w-24 aspect-[3/4] rounded-xl overflow-hidden border border-gray-200 bg-white shadow-xs shrink-0">
              <Image
                src={guide.doctorImage}
                alt={guide.doctorName}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex-1 text-center sm:text-left space-y-1">
              <span className="text-[11px] font-semibold text-[#0077C8] uppercase tracking-wider">
                Dokter Konsultan Rujukan
              </span>
              <h4 className="font-serif text-base sm:text-lg font-bold text-gray-900">
                {guide.doctorName}
              </h4>
              <p className="text-xs text-gray-600">
                {guide.doctorSpecialty}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-3.5 sm:p-5 border-t border-gray-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 border border-gray-200 hover:bg-gray-100 text-gray-700 text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer text-center"
            >
              Tutup
            </button>
            <Link
              href={`/health/${guide.slug}`}
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 text-center"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Halaman Penuh</span>
            </Link>
          </div>

          <Link
            href={`/appointments?doctor=${encodeURIComponent(guide.doctorName)}`}
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#0077C8] hover:bg-[#005fa3] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group text-center"
          >
            <Calendar className="w-4 h-4" />
            <span>Jadwalkan Konsultasi</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
