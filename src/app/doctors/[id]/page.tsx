import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import { allDoctors } from "@/data/doctors";
import {
  Award,
  GraduationCap,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  Building,
  Languages,
  ArrowLeft,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

export function generateStaticParams() {
  return allDoctors.map((doc) => ({
    id: doc.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DoctorProfilePage({ params }: PageProps) {
  const { id } = await params;
  const doctor = allDoctors.find((d) => d.id === id);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full pb-16">
        {/* Breadcrumb Bar */}
        <div className="bg-white border-b border-gray-200 py-3.5 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-gray-500">
            <Link href="/" className="hover:text-[#002D72]">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/doctors" className="hover:text-[#002D72]">
              Dokter Spesialis
            </Link>
            <span>/</span>
            <span className="text-[#002D72] font-semibold truncate">
              {doctor.name}
            </span>
          </div>
        </div>

        {/* Back Link */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0077C8] hover:text-[#002D72] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Direktori Dokter
          </Link>
        </div>

        {/* Doctor Hero Card */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden p-6 sm:p-10">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
              {/* Doctor 3:4 Aspect Ratio Photo */}
              <div className="relative w-56 sm:w-64 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-slate-100 shrink-0">
                {doctor.image ? (
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#002D72]">
                    <Stethoscope className="w-20 h-20" />
                  </div>
                )}
              </div>

              {/* Bio Summary & Action CTAs */}
              <div className="flex-1 text-center lg:text-left space-y-4">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#002D72] text-white">
                    {doctor.department}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Menerima Pasien Baru
                  </span>
                </div>

                <h1 className="font-serif text-2xl sm:text-4xl font-bold text-[#111111] leading-tight">
                  {doctor.name}
                </h1>

                <p className="text-base sm:text-lg text-[#0077C8] font-semibold">
                  {doctor.specialty}
                </p>

                <p className="text-sm text-gray-600">
                  <strong className="text-gray-800">Subspesialisasi:</strong>{" "}
                  {doctor.subspecialty}
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#FFC20E]" />
                    {doctor.experience}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Languages className="w-4 h-4 text-gray-400" />
                    {doctor.languages.join(", ")}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-[#0077C8]" />
                    {doctor.hospital}
                  </span>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                  <Link
                    href={`/appointments?doctor=${encodeURIComponent(doctor.name)}`}
                    className="w-full sm:w-auto px-6 py-3 bg-[#0077C8] hover:bg-[#005fa3] text-white text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <span>Jadwalkan Janji Temu</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="tel:+6221500911"
                    className="w-full sm:w-auto px-5 py-3 border border-gray-200 hover:bg-gray-100 text-gray-700 text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-emerald-600" />
                    <span>Hubungi Hotline RS</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Sections Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column (2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
                  <Stethoscope className="w-5 h-5 text-[#0077C8]" />
                  Tentang & Profil Klinis
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {doctor.bio}
                </p>
              </div>

              {/* Education & Degrees */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
                  <GraduationCap className="w-5 h-5 text-[#0077C8]" />
                  Riwayat Pendidikan & Almamater
                </h2>
                <div className="space-y-3">
                  {doctor.degrees.map((deg, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-sm text-gray-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0077C8] mt-0.5 shrink-0" />
                      <span>{deg}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Services */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
                  <ShieldCheck className="w-5 h-5 text-[#0077C8]" />
                  Layanan & Prosedur Medis Unggulan
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {doctor.services.map((srv, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-xs sm:text-sm text-gray-800 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0077C8] shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2 border-b border-gray-100 pb-3">
                  <Award className="w-5 h-5 text-[#FFC20E]" />
                  Sertifikasi & Afiliasi Profesional
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {doctor.certifications.map((cert, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 shadow-xs"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Sidebar Schedule & Location) */}
            <div className="space-y-6">
              {/* Schedule Card */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm space-y-5 sticky top-24">
                <h2 className="text-lg font-bold text-[#002D72] flex items-center gap-2 border-b border-gray-100 pb-3">
                  <Calendar className="w-5 h-5 text-[#0077C8]" />
                  Jadwal Praktik & Ruangan
                </h2>

                <div className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <span>{doctor.hospital}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-gray-800">Ruangan:</strong>{" "}
                      {doctor.room}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  {doctor.scheduleList.map((sched, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-gray-200"
                    >
                      <div className="font-semibold text-xs text-[#002D72]">
                        {sched.day}
                      </div>
                      <div className="text-xs text-gray-600 flex items-center gap-1 mt-1">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        {sched.hours}
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">
                        {sched.location}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={`/appointments?doctor=${encodeURIComponent(doctor.name)}`}
                    className="w-full py-3 bg-[#0077C8] hover:bg-[#005fa3] text-white text-sm font-semibold rounded-xl transition-colors shadow flex items-center justify-center gap-2 text-center"
                  >
                    <span>Reservasi Jadwal Ini</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
