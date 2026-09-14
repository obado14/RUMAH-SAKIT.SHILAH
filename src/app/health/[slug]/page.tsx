import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import { healthGuides } from "@/data/healthGuides";
import {
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export function generateStaticParams() {
  return healthGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function HealthGuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = healthGuides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full pb-16">
        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-gray-200 py-3.5 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-[#002D72]">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/health" className="hover:text-[#002D72]">
              Informasi Kesehatan
            </Link>
            <span>/</span>
            <span className="text-[#002D72] font-semibold truncate">
              {guide.title}
            </span>
          </div>
        </div>

        {/* Back Link */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
          <Link
            href="/health"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0077C8] hover:text-[#002D72] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Pusat Informasi Kesehatan
          </Link>
        </div>

        {/* Article Container */}
        <article className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-8">
          {/* Header Banner */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#002D72] text-white">
                {guide.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-[#0077C8] border border-blue-100">
                Informasi Terverifikasi Dokter
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#111111] leading-tight">
              {guide.fullTitle}
            </h1>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {guide.intro}
            </p>
          </div>

          {/* Warning Signs */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-red-900 flex items-center gap-2 border-b border-red-100 pb-3">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
              Tanda & Gejala Bahaya yang Perlu Diwaspadai (Red Flags)
            </h2>
            <div className="space-y-3">
              {guide.warningSigns.map((sign, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-red-50/60 border border-red-200/80 text-sm text-red-950"
                >
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                  <span>{sign}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prevention Tips */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              Langkah Pencegahan & Pola Hidup Sehat
            </h2>
            <div className="space-y-3">
              {guide.preventionTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100 text-sm text-gray-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Exams */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-10 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-[#002D72] flex items-center gap-2 border-b border-gray-100 pb-3">
              <ShieldCheck className="w-5 h-5 text-[#0077C8] shrink-0" />
              Pemeriksaan Diagnostik yang Dianjurkan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {guide.recommendedExams.map((exam, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 text-sm text-gray-800 font-medium flex items-center gap-2.5"
                >
                  <div className="w-2 h-2 rounded-full bg-[#0077C8] shrink-0" />
                  <span>{exam}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specialist Doctor Reference Card */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="relative w-24 sm:w-28 aspect-[3/4] rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-xs shrink-0">
                <Image
                  src={guide.doctorImage}
                  alt={guide.doctorName}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="text-center sm:text-left space-y-1.5">
                <span className="text-xs font-semibold text-[#0077C8] uppercase tracking-wider">
                  Dokter Spesialis Konsultan
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900">
                  {guide.doctorName}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {guide.doctorSpecialty}
                </p>
              </div>
            </div>

            <Link
              href={`/appointments?doctor=${encodeURIComponent(guide.doctorName)}`}
              className="w-full sm:w-auto px-6 py-3 bg-[#0077C8] hover:bg-[#005fa3] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group text-center shrink-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Jadwalkan Konsultasi</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Medical Disclaimer */}
          <div className="bg-gradient-to-r from-blue-50/90 via-slate-50 to-blue-50/90 border border-blue-200/80 rounded-3xl p-6 sm:p-8 flex items-start gap-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#002D72] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-[#0077C8]" />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-serif font-bold text-sm sm:text-base text-[#00205B]">
                Pemberitahuan Medis (Medical Disclaimer)
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Informasi yang tersedia di halaman ini ditujukan untuk tujuan edukasi dan informasi umum dan tidak dimaksudkan sebagai pengganti konsultasi, diagnosis, atau perawatan dari tenaga medis profesional.
              </p>
              <p className="text-[11px] sm:text-xs text-gray-500">
                Terakhir diperbarui: <strong>September 2026</strong> • Sumber telaah klinis Shilah Medicine.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
