"use client";

import React, { useState } from "react";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import {
  ShieldCheck,
  FileSpreadsheet,
  HeartHandshake,
  Receipt,
  Search,
} from "lucide-react";

export default function BillingPage() {
  const [billNumber, setBillNumber] = useState("");
  const [patientDob, setPatientDob] = useState("");
  const [billStatus, setBillStatus] = useState<null | {
    found: boolean;
    invoiceNo?: string;
    amount?: string;
    status?: string;
  }>(null);

  const handleCheckBill = (e: React.FormEvent) => {
    e.preventDefault();
    if (billNumber.trim()) {
      setBillStatus({
        found: true,
        invoiceNo: billNumber.toUpperCase(),
        amount: "Rp 1.450.000",
        status: "Belum Dibayar (Menunggu Pembayaran)",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Banner */}
        <section className="w-full bg-[#002D72] text-white py-14 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase mb-3 border border-white/20">
              Layanan Administrasi & Pembayaran
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal mb-4">
              Pembayaran & Layanan Asuransi Kesehatan
            </h1>
            <p className="text-base sm:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              Kemudahan pembayaran tagihan medis Anda secara online, informasi kemitraan asuransi kesehatan, serta program transparansi biaya Shilah Medicine.
            </p>
          </div>
        </section>

        {/* Quick Pay Online Box */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Receipt className="w-6 h-6 text-[#0077C8]" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                Bayar Tagihan Rumah Sakit Online
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              Masukkan nomor tagihan (Invoice) dan tanggal lahir pasien yang tertera pada lembar billing perawatan Anda.
            </p>

            <form onSubmit={handleCheckBill} className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-5">
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Nomor Tagihan / Invoice ID
                </label>
                <input
                  type="text"
                  required
                  placeholder="Misal: INV-2026-889"
                  value={billNumber}
                  onChange={(e) => setBillNumber(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                />
              </div>

              <div className="sm:col-span-4">
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Tanggal Lahir Pasien
                </label>
                <input
                  type="date"
                  required
                  value={patientDob}
                  onChange={(e) => setPatientDob(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                />
              </div>

              <div className="sm:col-span-3 flex items-end">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-[#0077C8] hover:bg-[#005fa3] text-white text-sm font-semibold rounded-md shadow transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Search className="w-4 h-4" />
                  <span>Cek Tagihan</span>
                </button>
              </div>
            </form>

            {billStatus && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-700">Invoice: {billStatus.invoiceNo}</span>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded">
                    {billStatus.status}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-blue-200">
                  <span className="text-gray-600">Total Pembayaran:</span>
                  <span className="text-lg font-bold text-[#002D72]">{billStatus.amount}</span>
                </div>
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={() => alert("Mengarahkan ke Payment Gateway Shilah Medicine (QRIS / Virtual Account)...")}
                    className="w-full py-2.5 bg-[#002D72] hover:bg-blue-900 text-white font-medium text-xs rounded transition-colors"
                  >
                    Lanjutkan Pembayaran (QRIS / VA Bank / CC)
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 3 Information Pillars */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0077C8] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
                Asuransi & Penjaminan
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Shilah Medicine bekerjasama dengan BPJS Kesehatan, puluhan asuransi swasta nasional, serta korporasi multinasional melalui metode cashless.
              </p>
              <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4">
                <li>BPJS Kesehatan & Ketenagakerjaan</li>
                <li>Prudential, Allianz, AIA, Manulife</li>
                <li>Sinarmas MSIG, Sequis, Astra Life</li>
                <li>Mandiri Inhealth & AdMedika Network</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
                Transparansi Tarif Pelayanan
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Kami berkomitmen pada transparansi biaya medis tanpa biaya tersembunyi. Dapatkan rincian estimasi biaya prosedur sebelum menjalani tindakan.
              </p>
              <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4">
                <li>Estimasi Biaya Paket Melahirkan Normal & Caesar</li>
                <li>Paket Medical Check-Up (MCU) Lengkap</li>
                <li>Tarif Kamar Rawat Inap VVIP, VIP, & Kelas 1-3</li>
                <li>Tindakan Kateterisasi Jantung & Bedah Minimal Invasif</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-2">
                Program Bantuan Finansial
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                Melalui Yayasan Shilah Peduli, kami menyediakan fasilitas cicilan bebas bunga dan bantuan keringanan pembiayaan bagi pasien yang membutuhkan.
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Hubungi Petugas Finansial Pasien di loket administrasi lantai 1 untuk konsultasi rencana pembayaran fleksibel.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Support for Billing */}
        <section className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h3 className="font-serif text-2xl font-bold text-[#111111] mb-2">
              Pertanyaan Mengenai Rincian Tagihan Anda?
            </h3>
            <p className="text-sm text-gray-600 max-w-lg mx-auto mb-6">
              Tim Layanan Administrasi Pasien Shilah Medicine siap membantu menjelaskan rincian biaya, klaim asuransi, atau kwitansi resmi.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold">
              <div className="px-4 py-2.5 bg-gray-100 rounded-lg text-gray-800">
                Hotline Billing: (021) 500-745
              </div>
              <div className="px-4 py-2.5 bg-gray-100 rounded-lg text-gray-800">
                Email: billing@shilah.medicine.id
              </div>
              <div className="px-4 py-2.5 bg-gray-100 rounded-lg text-gray-800">
                Jam Layanan: Senin - Sabtu (08:00 - 17:00 WIB)
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
