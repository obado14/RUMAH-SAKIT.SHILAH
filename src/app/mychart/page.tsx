import React from "react";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import {
  FileText,
  FlaskConical,
  CalendarCheck,
  Pill,
  Video,
  MessageSquare,
  Lock,
  Smartphone,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal Pasien Shilah MyChart | Shilah Medicine",
  description:
    "Akses rekam medis, hasil lab, buat janji temu dokter, dan kelola resep obat Anda kapan saja secara aman melalui Shilah MyChart.",
};

export default function MyChartPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* Top Hero Banner */}
        <section className="w-full bg-[#002D72] text-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase border border-white/20">
                  Portal Pasien Mandiri
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl font-normal leading-tight">
                  Shilah MyChart
                </h1>
                <p className="text-base sm:text-lg text-white/90 font-light max-w-xl leading-relaxed">
                  Kelola kesehatan Anda dan keluarga dalam satu pintu. Akses catatan medis, jadwal kontrol, hasil laboratorium, dan konsultasi dokter 24/7.
                </p>
                <div className="flex items-center space-x-2 pt-2 text-white/80 text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#FFC20E]" />
                  <span>Enkripsi Medis 256-bit & Terverifikasi Aman</span>
                </div>
              </div>

              {/* Login Card Component */}
              <div className="lg:col-span-5 bg-white text-[#111111] p-6 sm:p-8 rounded-xl shadow-xl border border-gray-200">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#002D72] mb-1">
                  Masuk ke MyChart
                </h2>
                <p className="text-xs text-gray-500 mb-6">
                  Gunakan nomor rekam medis atau email terdaftar
                </p>

                <form className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                      Username / Email
                    </label>
                    <input
                      type="text"
                      placeholder="contoh: pasien@shilah.id"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:border-[#0077C8]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                        Kata Sandi
                      </label>
                      <a href="#" className="text-xs text-[#0077C8] hover:underline">
                        Lupa sandi?
                      </a>
                    </div>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:border-[#0077C8]"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-[#0077C8]" />
                      <span>Ingat saya di perangkat ini</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0077C8] hover:bg-[#005fa3] text-white font-medium text-sm rounded-md shadow transition-colors"
                  >
                    Masuk Sekarang
                  </button>

                  <div className="pt-3 border-t border-gray-200 text-center">
                    <p className="text-xs text-gray-600 mb-2">Belum memiliki akun Shilah MyChart?</p>
                    <Link
                      href="/appointments"
                      className="inline-block w-full py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-[#002D72] text-xs font-semibold rounded-md transition-colors"
                    >
                      Aktivasi Akun Pasien Baru
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111] mb-3">
              Semua Kebutuhan Medis Anda dalam Genggaman
            </h2>
            <div className="w-16 h-1 bg-[#FFC20E] mx-auto mb-4" />
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Didesain untuk memudahkan Anda mengelola perawatan kesehatan secara mandiri tanpa antrean panjang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0077C8] flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
                Rekam Medis Lengkap
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Tinjau riwayat kunjungan dokter, diagnosis, ringkasan kepulangan rawat inap, dan catatan terapi kapan saja.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-green-50 text-emerald-600 flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
                Hasil Tes Cepat & Akurat
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dapatkan notifikasi instan ketika hasil uji laboratorium patologi klinis atau radiologi Anda sudah selesai dianalisis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-yellow-50 text-amber-600 flex items-center justify-center mb-4">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
                Jadwal & Janji Temu
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pilih dokter spesialis, tentukan waktu kunjungan yang sesuai, dan dapatkan pengingat janji temu otomatis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <Pill className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
                Penebusan & Refill Resep
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Permintaan isi ulang obat rutin tanpa perlu antre di instalasi farmasi. Obat dapat dikirimkan langsung ke alamat Anda.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-red-50 text-rose-600 flex items-center justify-center mb-4">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
                Telekonsultasi HD
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Konsultasi tatap muka daring melalui video berkualitas tinggi bersama dokter spesialis langsung dari kenyamanan rumah Anda.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
                Pesan Tim Medis
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Kirim pertanyaan non-darurat mengenai gejala ringan atau instruksi pasca-perawatan langsung kepada tim perawat dan dokter Anda.
              </p>
            </div>
          </div>
        </section>

        {/* Mobile App Download Banner */}
        <section className="bg-white border-y border-gray-200 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-[#0077C8]">
                  <Smartphone className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Aplikasi Mobile Shilah</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#111111]">
                  Unduh Shilah MyChart di Ponsel Anda
                </h3>
                <p className="text-sm text-gray-600 max-w-xl">
                  Tersedia gratis di iOS App Store dan Google Play Store. Dapatkan pembaruan langsung di layar kunci smartphone Anda.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="px-5 py-2.5 bg-black hover:bg-gray-800 text-white rounded-lg flex items-center space-x-3 transition-colors text-left"
                >
                  <div>
                    <p className="text-[10px] text-gray-400 leading-none">Download on the</p>
                    <p className="text-sm font-semibold leading-tight">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="px-5 py-2.5 bg-black hover:bg-gray-800 text-white rounded-lg flex items-center space-x-3 transition-colors text-left"
                >
                  <div>
                    <p className="text-[10px] text-gray-400 leading-none">GET IT ON</p>
                    <p className="text-sm font-semibold leading-tight">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Security and Help Callout */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 border border-blue-100 rounded-lg flex items-start space-x-4">
              <Lock className="w-6 h-6 text-[#002D72] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-[#002D72] text-base mb-1">Privasi & Keamanan Data</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Informasi rekam medis Anda dilindungi dengan standar enkripsi militer. Akses hanya diizinkan untuk Anda dan tenaga medis resmi Shilah yang merawat Anda.
                </p>
              </div>
            </div>

            <div className="p-6 bg-gray-50 border border-gray-200 rounded-lg flex items-start space-x-4">
              <HelpCircle className="w-6 h-6 text-[#0077C8] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-[#111111] text-base mb-1">Butuh Bantuan Teknis MyChart?</h4>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">
                  Hubungi tim bantuan Shilah MyChart Help Desk kami di (021) 500-744 atau email melalui layanan bantuan teknis kami.
                </p>
                <Link href="/about" className="text-xs font-semibold text-[#0077C8] hover:underline inline-flex items-center space-x-1">
                  <span>Pusat Bantuan & Kontak</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
