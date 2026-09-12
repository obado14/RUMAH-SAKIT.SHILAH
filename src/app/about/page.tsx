import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import { ShieldCheck, HeartPulse, Award, Users, ChevronRight, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | Shilah Medicine - Kesehatan Anda, Prioritas Kami",
  description:
    "Pelajari lebih lanjut tentang visi, misi, nilai-nilai, dan dedikasi Shilah Medicine dalam memberikan pelayanan kesehatan terbaik dan terpercaya.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="relative w-full bg-[#00205B] text-white py-20 sm:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/sites/hopkinsmedicine/images/about_hero_bg.png"
              alt="Klinik dan Layanan Medis Shilah Medicine"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Elegant Translucent Blue Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001D4A]/85 via-[#002D72]/60 to-[#001D4A]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001433]/75 via-transparent to-black/35" />

          {/* Foreground Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 border border-white/30 shadow-md">
              Tentang Kami
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Tentang Shilah Medicine
            </h1>
            <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Kesehatan Anda, Prioritas Kami. Berdedikasi menghadirkan layanan kesehatan unggul, terpercaya, dan berstandar internasional.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111] leading-tight">
                Mendedikasikan Layanan Medis Terbaik untuk Setiap Pasien
              </h2>
              <div className="w-16 h-1 bg-[#0077C8]" />
              <p className="text-[16px] text-[#4b5563] leading-relaxed">
                Shilah Medicine berdiri dengan komitmen utama: menempatkan kesejahteraan, kenyamanan, dan kesembuhan pasien di atas segalanya. Sebagai institusi layanan kesehatan terpadu, kami mengintegrasikan pelayanan klinis mutakhir, riset ilmiah, dan pendidikan kedokteran untuk memajukan standar kesehatan bangsa.
              </p>
              <p className="text-[16px] text-[#4b5563] leading-relaxed">
                Didukung oleh para dokter spesialis terkemuka, perawat berdedikasi, serta fasilitas laboratorium dan diagnostik tercanggih, kami senantiasa siap melayani Anda dan keluarga di setiap tahapan perawatan.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/sites/hopkinsmedicine/images/hero_bg.jpg"
                  alt="Pelayanan penuh kasih di Shilah Medicine"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#002D72] text-white p-6 rounded-lg shadow-lg hidden sm:block max-w-[240px]">
                <p className="font-serif text-2xl font-bold">24/7</p>
                <p className="text-xs text-white/80 mt-1">Layanan Gawat Darurat & Perawatan Intensif Siaga Setiap Saat</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-[#f8fafc] py-14 sm:py-20 border-y border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111]">
                Nilai-Nilai Utama Kami
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#4b5563] mt-3">
                Prinsip dasar yang memandu setiap langkah tenaga medis kami dalam melayani Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 sm:p-8 rounded border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0077C8] flex items-center justify-center mb-5">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">Keunggulan Klinis</h3>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  Menjaga standar kualitas medis tertinggi dengan bukti ilmiah dan teknologi perawatan terkini.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0077C8] flex items-center justify-center mb-5">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">Kepedulian Tulus</h3>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  Memperlakukan setiap pasien dengan rasa empati mendalam, keramahan, dan penghormatan martabat.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0077C8] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">Integritas & Keamanan</h3>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  Memprioritaskan keselamatan pasien, transparansi tindakan medis, dan kerahasiaan data rekam medis.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0077C8] flex items-center justify-center mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">Kolaborasi Tim</h3>
                <p className="text-sm text-[#4b5563] leading-relaxed">
                  Sinergi multidisiplin antar dokter spesialis untuk memberikan solusi perawatan paling komprehensif.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Banner */}
        <section className="w-full bg-[#002D72] text-white py-14 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFC20E]">500+</p>
                <p className="text-sm sm:text-base text-white/90 mt-2">Dokter Spesialis & Subspesialis</p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFC20E]">100K+</p>
                <p className="text-sm sm:text-base text-white/90 mt-2">Pasien Terlayani per Tahun</p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFC20E]">24/7</p>
                <p className="text-sm sm:text-base text-white/90 mt-2">Layanan Darurat Siaga</p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFC20E]">98.5%</p>
                <p className="text-sm sm:text-base text-white/90 mt-2">Tingkat Kepuasan Pasien</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <div className="bg-[#f3f4f6] border border-gray-200 rounded-lg p-8 sm:p-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111] mb-4">
              Siap Berkonsultasi dengan Tim Dokter Shilah?
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#4b5563] max-w-xl mx-auto mb-8">
              Jadwalkan konsultasi dokter atau dapatkan panduan layanan kesehatan terbaik sesuai kebutuhan Anda.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0077C8] hover:bg-[#005fa3] text-white font-medium text-[15px] rounded shadow-sm transition-colors"
              >
                <span>Kembali ke Beranda</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/appointments"
                className="inline-flex items-center space-x-2 px-6 py-3 border border-[#111111] text-[#111111] hover:bg-white font-medium text-[15px] rounded transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Jadwalkan Janji Temu</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
