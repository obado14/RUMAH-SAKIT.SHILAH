import React from "react";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import { Clock, Phone, CalendarCheck, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan & Perawatan Pasien | Shilah Medicine",
  description:
    "Layanan perawatan medis komprehensif, rawat inap, IGD 24 jam, dan panduan pasien di Shilah Medicine.",
};

const careServices = [
  {
    title: "Unit Gawat Darurat (IGD) 24 Jam",
    desc: "Penanganan medis darurat cepat tanggap oleh tim dokter spesialis emergensi dan perawat terlatih dengan fasilitas triage canggih.",
    cta: "Layanan IGD",
  },
  {
    title: "Rawat Inap & Kamar Perawatan",
    desc: "Ruang rawat inap nyaman dari kelas standar hingga suite VIP dengan pengawasan medis intensif dan sistem panggilan perawat digital.",
    cta: "Fasilitas Rawat Inap",
  },
  {
    title: "Poliklinik Rawat Jalan Spesialis",
    desc: "Konsultasi rawat jalan dengan lebih dari 30 poliklinik spesialis dan subspesialis untuk penanganan penyakit secara terarah.",
    cta: "Jadwal Poliklinik",
  },
  {
    title: "Bedah Sentral & Minimal Invasif",
    desc: "Ruang operasi modern berstandar laminar air flow untuk operasi laparoskopi, bedah jantung, ortopedi, dan bedah saraf.",
    cta: "Layanan Bedah",
  },
  {
    title: "Pusat Diagnostik & Laboratorium",
    desc: "MRI 3T, CT Scan 128 Slices, USG 4D, dan laboratorium patologi klinik dengan hasil presisi dan cepat.",
    cta: "Layanan Diagnostik",
  },
  {
    title: "Rehabilitasi Medik & Fisioterapi",
    desc: "Pemulihan pasca operasi, stroke, dan cedera olahraga dengan bimbingan fisioterapis profesional dan peralatan modern.",
    cta: "Fisioterapi",
  },
];

export default function PatientCarePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="relative w-full bg-[#002D72] text-white py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 border border-white/20">
              Pelayanan Pasien
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal mb-6">
              Layanan Pasien di Shilah Medicine
            </h1>
            <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
              Pelayanan berfokus pada keselamatan, kenyamanan, dan pemulihan optimal bagi Anda dan keluarga tercinta.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111]">
              Layanan Medis Utama
            </h2>
            <div className="w-14 h-1 bg-[#0077C8] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {careServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-md hover:border-[#0077C8] transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#111111] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#4b5563] leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                <Link
                  href="/appointments"
                  className="inline-flex items-center text-sm font-medium text-[#0077C8] hover:underline"
                >
                  <span>{service.cta}</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>

          {/* Patient Guide Callout */}
          <div className="bg-[#f8fafc] border border-gray-200 rounded-xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start">
                <Clock className="w-8 h-8 text-[#0077C8] mb-3" />
                <h4 className="font-serif text-lg font-bold text-[#111111] mb-1">Jam Berkunjung Pasien</h4>
                <p className="text-sm text-[#4b5563]">Siang: 11.00 – 13.00 WIB<br />Sore: 17.00 – 20.00 WIB</p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <Phone className="w-8 h-8 text-[#0077C8] mb-3" />
                <h4 className="font-serif text-lg font-bold text-[#111111] mb-1">Hotline Gawat Darurat</h4>
                <p className="text-sm text-[#4b5563]">Siap sedia 24 jam setiap hari<br /><span className="font-bold text-[#002D72]">1500-745 (SHILAH)</span></p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <CalendarCheck className="w-8 h-8 text-[#0077C8] mb-3" />
                <h4 className="font-serif text-lg font-bold text-[#111111] mb-1">Pendaftaran Online</h4>
                <p className="text-sm text-[#4b5563]">Buat janji temu dokter spesialis secara praktis tanpa antre.</p>
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
