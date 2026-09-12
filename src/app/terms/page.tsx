import React from "react";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan Penggunaan | Shilah Medicine",
  description: "Syarat dan ketentuan penggunaan situs web dan layanan digital Shilah Medicine.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#002D72] mb-6">
          Syarat & Ketentuan Penggunaan
        </h1>
        <div className="w-16 h-1 bg-[#FFC20E] mb-8" />

        <div className="bg-white p-6 sm:p-10 rounded-xl border border-gray-200 shadow-sm space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p>
            Selamat datang di situs resmi Shilah Medicine. Dengan mengakses situs web ini, portal Shilah MyChart, serta layanan daring terkait lainnya, Anda menyetujui untuk terikat oleh syarat dan ketentuan penggunaan berikut.
          </p>

          <h2 className="font-serif text-xl font-bold text-[#111111]">
            1. Bukan Pengganti Nasihat Medis Darurat
          </h2>
          <p>
            Informasi edukasi, materi artikel, dan konten yang disajikan di situs web ini bertujuan untuk informasi umum semata dan bukan merupakan saran medis langsung, diagnosis, atau rencana perawatan mandiri. Jika Anda mengalami kegawatdaruratan medis, segera hubungi nomor gawat darurat (021) 500-911 atau datangi IGD terdekat.
          </p>

          <h2 className="font-serif text-xl font-bold text-[#111111]">
            2. Penggunaan Akun & Keamanan Sandi
          </h2>
          <p>
            Pengguna bertanggung jawab penuh atas kerahasiaan kredensial login akun Shilah MyChart masing-masing dan aktivitas yang terjadi di bawah akun tersebut.
          </p>

          <h2 className="font-serif text-xl font-bold text-[#111111]">
            3. Hak Kekayaan Intelektual
          </h2>
          <p>
            Seluruh konten, merek dagang Shilah Medicine, logo, publikasi riset, dan aset grafis dilindungi undang-undang hak cipta Republik Indonesia dan konvensi internasional.
          </p>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
