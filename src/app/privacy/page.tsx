import React from "react";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pernyataan & Kebijakan Privasi Pasien | Shilah Medicine",
  description:
    "Kebijakan privasi dan perlindungan data rekam medis pasien di Shilah Medicine.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#002D72] mb-6">
          Pernyataan Privasi & Perlindungan Data Pasien
        </h1>
        <div className="w-16 h-1 bg-[#FFC20E] mb-8" />

        <div className="bg-white p-6 sm:p-10 rounded-xl border border-gray-200 shadow-sm space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p>
            Shilah Medicine berkomitmen melindungi kerahasiaan, integritas, dan keamanan informasi medis pribadi Anda. Pernyataan Privasi ini menjelaskan bagaimana informasi kesehatan yang dilindungi (Protected Health Information / PHI) digunakan dan diungkapkan sesuai Undang-Undang Perlindungan Data Pribadi (UU PDP) serta standar medis internasional.
          </p>

          <h2 className="font-serif text-xl font-bold text-[#111111]">
            1. Pengumpulan Informasi Kesehatan
          </h2>
          <p>
            Kami mengumpulkan data demografis, riwayat klinis, hasil tes diagnostik, resep obat, dan data pembayaran yang diperlukan semata-mata untuk tujuan pemberian perawatan kesehatan yang aman, bermutu tinggi, dan terpersonalisasi.
          </p>

          <h2 className="font-serif text-xl font-bold text-[#111111]">
            2. Keamanan & Enkripsi Data Pasien
          </h2>
          <p>
            Sistem Electronic Health Record (EHR) dan portal Shilah MyChart kami dilindungi dengan enkripsi AES-256 dan protokol TLS tingkat tinggi, otentikasi multi-faktor, serta pemantauan akses berkala untuk mencegah akses tanpa hak.
          </p>

          <h2 className="font-serif text-xl font-bold text-[#111111]">
            3. Hak Pasien atas Rekam Medis
          </h2>
          <p>
            Sebagai pasien, Anda memiliki hak penuh untuk memeriksa, meminta salinan ringkasan rekam medis Anda, meminta pembatasan pengungkapan tertentu, dan mendapatkan catatan riwayat akses informasi medis Anda.
          </p>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
