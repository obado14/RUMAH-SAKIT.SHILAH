"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import {
  Phone,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export default function AppointmentsPage() {
  const [formData, setFormData] = useState({
    polyclinic: "Kardiologi & Jantung",
    doctor: "dr. Adrian Shilah, Sp.JP(K), FIHA",
    date: "",
    session: "Pagi (08:00 - 12:00)",
    patientName: "",
    idNumber: "",
    phone: "",
    email: "",
    paymentType: "Asuransi Swasta / Umum",
    notes: "",
  });

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const docParam = params.get("doctor");
      if (docParam) {
        setFormData((prev) => ({
          ...prev,
          doctor: docParam,
        }));
      }
    }
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = "SHL-" + Math.floor(100000 + Math.random() * 900000);
    setBookingCode(randomCode);
    setIsSubmitted(true);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full bg-[#002D72] text-white py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase mb-3 border border-white/20">
              Pendaftaran Janji Temu Daring
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal mb-4">
              Jadwalkan Janji Temu Dokter
            </h1>
            <p className="text-base sm:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              Reservasi konsultasi dengan dokter spesialis dan subspesialis Shilah Medicine secara cepat, praktis, dan terkonfirmasi langsung.
            </p>
          </div>
        </section>

        {/* Emergency Alert Banner */}
        <div className="bg-amber-50 border-b border-amber-200 py-3.5 px-4 text-xs sm:text-sm text-amber-900">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center space-x-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>Darurat Medis?</strong> Jangan menunggu jadwal janji temu online. Segera kunjungi IGD 24 Jam atau hubungi hotline gawat darurat Shilah di{" "}
                <strong className="text-red-700">(021) 500-911</strong>.
              </span>
            </div>
            <Link
              href="/locations"
              className="text-[#002D72] underline font-medium hover:text-blue-900 whitespace-nowrap hidden sm:inline"
            >
              Lihat Lokasi IGD
            </Link>
          </div>
        </div>

        {/* Main Content Area */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-xl border border-gray-200 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-6">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#002D72] mb-2">
                      Reservasi Berhasil Diajukan!
                    </h2>
                    <p className="text-sm text-gray-600 max-w-md mx-auto">
                      Terima kasih, <strong>{formData.patientName}</strong>. Konfirmasi jadwal janji temu dan instruksi pra-kunjungan telah dikirimkan ke nomor WhatsApp dan email Anda.
                    </p>
                  </div>

                  <div className="bg-[#f0f9ff] border border-blue-200 rounded-lg p-6 max-w-md mx-auto text-left space-y-3">
                    <div className="flex justify-between border-b border-blue-100 pb-2">
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Kode Booking</span>
                      <span className="text-base font-bold text-[#0077C8]">{bookingCode}</span>
                    </div>
                    <div className="flex justify-between border-b border-blue-100 pb-2">
                      <span className="text-xs text-gray-500">Poli / Spesialis</span>
                      <span className="text-sm font-semibold text-gray-800">{formData.polyclinic}</span>
                    </div>
                    <div className="flex justify-between border-b border-blue-100 pb-2">
                      <span className="text-xs text-gray-500">Dokter</span>
                      <span className="text-sm font-semibold text-gray-800">{formData.doctor}</span>
                    </div>
                    <div className="flex justify-between border-b border-blue-100 pb-2">
                      <span className="text-xs text-gray-500">Waktu Kunjungan</span>
                      <span className="text-sm font-semibold text-gray-800">{formData.date || "Sesuai konfirmasi petugas"} ({formData.session})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">Metode Pembayaran</span>
                      <span className="text-sm font-semibold text-gray-800">{formData.paymentType}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition-colors"
                    >
                      Buat Janji Temu Baru
                    </button>
                    <Link
                      href="/mychart"
                      className="px-6 py-2.5 bg-[#0077C8] hover:bg-[#005fa3] text-white text-sm font-medium rounded-md transition-colors"
                    >
                      Buka di Shilah MyChart
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#111111] mb-1">
                      Formulir Pendaftaran Pasien
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Silakan lengkapi informasi di bawah ini untuk mengamankan slot konsultasi Anda.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Pilihan Poliklinik / Layanan
                      </label>
                      <select
                        value={formData.polyclinic}
                        onChange={(e) => setFormData({ ...formData, polyclinic: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                        required
                      >
                        <option value="Kardiologi & Jantung">Pusat Jantung & Kardiologi</option>
                        <option value="Neurologi & Saraf">Pusat Saraf & Otak</option>
                        <option value="Penyakit Dalam (Internis)">Penyakit Dalam (Subspesialis Gastro/Ginjal/Endokrin)</option>
                        <option value="Kesehatan Anak (Pediatrik)">Kesehatan Anak & Perinatologi</option>
                        <option value="Ortopedi & Traumatologi">Ortopedi, Sendi & Tulang Belakang</option>
                        <option value="Kebidanan & Kandungan (Obgyn)">Kebidanan & Kandungan (Obgyn)</option>
                        <option value="Onkologi Terpadu">Onkologi & Perawatan Kanker</option>
                        <option value="Kesehatan Mata">Kesehatan Mata & Vitreoretina</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Dokter Spesialis
                      </label>
                      <select
                        value={formData.doctor}
                        onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                        required
                      >
                        <option value="dr. Adrian Shilah, Sp.JP(K), FIHA">dr. Adrian Shilah, Sp.JP(K), FIHA (Kardiologi)</option>
                        <option value="Prof. Dr. dr. Ratna Shilah, Sp.S(K), FANA">Prof. Dr. dr. Ratna Shilah, Sp.S(K), FANA (Saraf / Neurologi)</option>
                        <option value="dr. Maya Kartika, Sp.A(K), M.Kes">dr. Maya Kartika, Sp.A(K), M.Kes (Anak / Pediatrik)</option>
                        <option value="dr. Hendra Pratama, Sp.OT(K), Spine">dr. Hendra Pratama, Sp.OT(K), Spine (Bedah Ortopedi)</option>
                        <option value="dr. Dewi Anggraini, Sp.PD-KHOM, FINASIM">dr. Dewi Anggraini, Sp.PD-KHOM, FINASIM (Onkologi)</option>
                        <option value="dr. Farhan Gunawan, Sp.OG(K)-FER">dr. Farhan Gunawan, Sp.OG(K)-FER (Kebidanan & Kandungan)</option>
                        <option value="Dokter Pertama yang Tersedia">Dokter Pertama yang Tersedia (Jadwal Tercepat)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Rencana Tanggal Konsultasi
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Sesi Waktu
                      </label>
                      <select
                        value={formData.session}
                        onChange={(e) => setFormData({ ...formData, session: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                      >
                        <option value="Pagi (08:00 - 12:00)">Sesi Pagi (08:00 - 12:00 WIB)</option>
                        <option value="Siang (13:00 - 16:00)">Sesi Siang (13:00 - 16:00 WIB)</option>
                        <option value="Sore / Malam (16:30 - 20:00)">Sesi Sore / Malam (16:30 - 20:00 WIB)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-200">
                    <h3 className="text-sm font-bold text-[#002D72] mb-3">Informasi Identitas Pasien</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                          Nama Lengkap Pasien *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Sesuai KTP / Paspor"
                          value={formData.patientName}
                          onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                          Nomor Induk Kependudukan (NIK) *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="16 digit NIK"
                          value={formData.idNumber}
                          onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                        Nomor Handphone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="contoh: 081234567890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                        Alamat Email
                      </label>
                      <input
                        type="email"
                        placeholder="pasien@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                        Metode Penjaminan
                      </label>
                      <select
                        value={formData.paymentType}
                        onChange={(e) => setFormData({ ...formData, paymentType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                      >
                        <option value="Umum / Pembayaran Mandiri">Umum / Pembayaran Mandiri</option>
                        <option value="BPJS Kesehatan">BPJS Kesehatan (Sertakan Rujukan)</option>
                        <option value="Asuransi Swasta / Korporasi">Asuransi Swasta / Korporasi Rekanan</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                        Keluhan Medis Singkat
                      </label>
                      <input
                        type="text"
                        placeholder="Misal: Nyeri dada saat aktivitas, kontrol rutin..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077C8]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#0077C8] hover:bg-[#005fa3] text-white font-semibold text-sm rounded-md shadow-md transition-colors"
                    >
                      Konfirmasi & Jadwalkan Kunjungan
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar Information */}
            <div className="lg:col-span-4 space-y-6">
              {/* WhatsApp Quick Booking */}
              <div className="bg-[#002D72] text-white p-6 rounded-xl shadow-sm">
                <h3 className="font-serif text-lg font-bold mb-2">
                  Butuh Bantuan Reservasi Cepat?
                </h3>
                <p className="text-xs text-white/80 leading-relaxed mb-4">
                  Petugas pendaftaran Shilah Medicine siap membantu menjadwalkan kunjungan Anda melalui pesan WhatsApp.
                </p>
                <a
                  href="https://wa.me/628111223344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs rounded-md shadow transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Chat WhatsApp Customer Care</span>
                </a>
              </div>

              {/* What to Prepare */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                <h3 className="font-serif text-base font-bold text-[#111111] flex items-center space-x-2">
                  <FileCheck className="w-5 h-5 text-[#0077C8]" />
                  <span>Yang Perlu Disiapkan</span>
                </h3>
                <ul className="text-xs text-gray-600 space-y-2.5 list-disc pl-4 leading-relaxed">
                  <li>Kartu identitas resmi (KTP / SIM / Paspor).</li>
                  <li>Kartu asuransi fisik atau digital (bagi pasien asuransi/korporasi).</li>
                  <li>Surat rujukan FKTP (bagi pasien BPJS Kesehatan).</li>
                  <li>Hasil rekam medis atau radiologi terdahulu jika ada.</li>
                  <li>Harap hadir 15-30 menit sebelum jam konsultasi dimulai.</li>
                </ul>
              </div>

              {/* Quick links */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-xs space-y-3">
                <span className="font-bold text-gray-800 uppercase tracking-wider block">Layanan Terkait</span>
                <Link href="/doctors" className="block text-[#0077C8] hover:underline">
                  → Cari Profil Lengkap Dokter Kami
                </Link>
                <Link href="/billing" className="block text-[#0077C8] hover:underline">
                  → Informasi Asuransi & Estimasi Biaya
                </Link>
                <Link href="/locations" className="block text-[#0077C8] hover:underline">
                  → Petunjuk Arah & Lokasi Poliklinik
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
