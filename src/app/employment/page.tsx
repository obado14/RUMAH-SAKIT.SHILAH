"use client";

import React, { useState } from "react";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import {
  GraduationCap,
  Heart,
  Users,
  Award,
  ChevronRight,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
} from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
}

const jobOpenings: JobOpening[] = [
  {
    id: "job-01",
    title: "Dokter Spesialis Penyakit Dalam (Internis)",
    department: "Divisi Medis",
    type: "Penuh Waktu (Full Time)",
    location: "Shilah Central Hospital",
    description: "Membutuhkan dokter spesialis dengan STR & SIP aktif, berkomitmen pada patient-centered care dan riset klinis.",
  },
  {
    id: "job-02",
    title: "Perawat Ruang Perawatan Intensif (ICU / ICCU)",
    department: "Keperawatan",
    type: "Penuh Waktu (Full Time)",
    location: "Shilah Central Hospital",
    description: "Kualifikasi S1 Keperawatan + Ners, sertifikat BCLS & Kardiologi Dasar, pengalaman min. 2 tahun di unit intensif.",
  },
  {
    id: "job-03",
    title: "Apoteker Farmasi Klinis",
    department: "Farmasi & Farmakologi",
    type: "Penuh Waktu (Full Time)",
    location: "Shilah Specialist Clinic",
    description: "Bertanggung jawab atas telaah resep, konseling obat pasien rawat jalan, dan monitoring efikasi terapi obat.",
  },
  {
    id: "job-04",
    title: "Ahli Teknologi Laboratorium Medis (ATLM)",
    department: "Laboratorium Patologi",
    type: "Penuh Waktu (Full Time)",
    location: "Shilah Central Hospital",
    description: "Mengoperasikan instrumen hematologi, kimia darah otomatis, dan uji molekuler PCR.",
  },
  {
    id: "job-05",
    title: "Hospital IT Specialist & System Analyst",
    department: "Teknologi Informasi & Digital",
    type: "Penuh Waktu (Full Time)",
    location: "Kantor Pusat Shilah Group",
    description: "Mengembangkan dan memelihara sistem Electronic Health Record (EHR) dan infrastruktur jaringan rumah sakit.",
  },
];

export default function EmploymentPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applicantSubmitted, setApplicantSubmitted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full bg-[#002D72] text-white py-14 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase mb-3 border border-white/20">
              Karir & Peluang Kerja
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal mb-4">
              Karir & Peluang Kerja di Shilah Medicine
            </h1>
            <p className="text-base sm:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              Bergabunglah dengan tim profesional medis dan non-medis terdepan dalam misi memberikan pelayanan kesehatan penuh kasih dan berstandar internasional.
            </p>
          </div>
        </section>

        {/* Benefits Values */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] mb-2">
              Mengapa Berkarir di Shilah Medicine?
            </h2>
            <div className="w-16 h-1 bg-[#FFC20E] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-lg border border-gray-200 text-center">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0077C8] flex items-center justify-center mx-auto mb-3">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#111111] mb-1">Budaya Peduli & Kolaboratif</h3>
              <p className="text-xs text-gray-500">Lingkungan kerja suportif yang mengutamakan keselamatan dan kesejahteraan seluruh staf.</p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#111111] mb-1">Pengembangan Berkelanjutan</h3>
              <p className="text-xs text-gray-500">Akses ke pelatihan berkala, beasiswa spesialisasi, dan simposium kedokteran global.</p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 text-center">
              <div className="w-10 h-10 rounded-full bg-yellow-50 text-amber-600 flex items-center justify-center mx-auto mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#111111] mb-1">Kompensasi Kompetitif</h3>
              <p className="text-xs text-gray-500">Gaji atraktif, asuransi kesehatan keluarga menyeluruh, serta bonus kinerja tahunan.</p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 text-center">
              <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#111111] mb-1">Teknologi Mutakhir</h3>
              <p className="text-xs text-gray-500">Peralatan medis modern, sistem rekam digital terpadu, dan fasilitas laboratorium canggih.</p>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6 pb-16">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="font-serif text-2xl font-bold text-[#111111]">
              Posisi Terbuka Saat Ini
            </h2>
            <span className="text-xs text-gray-500">{jobOpenings.length} lowongan aktif</span>
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-[#0077C8] border border-blue-100">
                      {job.department}
                    </span>
                    <span className="flex items-center text-[11px] text-gray-500">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {job.type}
                    </span>
                    <span className="flex items-center text-[11px] text-gray-500">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-rose-500" />
                      {job.location}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#111111]">
                    {job.title}
                  </h3>
                  <p className="text-xs text-gray-600 max-w-2xl leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => {
                      setSelectedJob(job.title);
                      setApplicantSubmitted(false);
                      const el = document.getElementById("apply-form");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center space-x-1.5 px-5 py-2.5 bg-[#0077C8] hover:bg-[#005fa3] text-white text-xs font-semibold rounded-md transition-colors"
                  >
                    <span>Lamar Posisi Ini</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div id="apply-form" className="mt-12 bg-white p-6 sm:p-10 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#002D72] mb-1">
              Kirimkan Lamaran & CV Anda
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              Tertarik bergabung? Isi formulir di bawah ini dan tim Human Resources kami akan meninjau kualifikasi Anda.
            </p>

            {applicantSubmitted ? (
              <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                <h4 className="font-bold text-green-900 text-base">Lamaran Berhasil Dikirimkan!</h4>
                <p className="text-xs text-green-800 max-w-md mx-auto">
                  Terima kasih atas minat Anda bergabung dengan Shilah Medicine. Tim Rekrutmen kami akan menghubungi kandidat yang memenuhi kualifikasi dalam 7 hari kerja.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setApplicantSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama lengkap beserta gelar jika ada"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                      Nomor Kontak / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="08xxxxxxxxxx"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@anda.com"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                      Posisi yang Dilamar
                    </label>
                    <input
                      type="text"
                      value={selectedJob || ""}
                      onChange={(e) => setSelectedJob(e.target.value)}
                      placeholder="Pilih dari daftar di atas atau tuliskan keahlian Anda"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                    Profil Singkat & Motivasi
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Ceritakan latar belakang pendidikan, pengalaman kerja, dan minat Anda bergabung di Shilah..."
                    className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0077C8] hover:bg-[#005fa3] text-white text-xs font-semibold rounded-md shadow transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Lamaran Sekarang</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
