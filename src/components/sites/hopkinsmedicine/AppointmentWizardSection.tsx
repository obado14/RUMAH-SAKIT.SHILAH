"use client";

import React, { useState } from "react";
import Image from "next/image";
import { allDoctors } from "@/data/doctors";
import {
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Printer,
  MessageCircle,
} from "lucide-react";

export function AppointmentWizardSection() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  // Form State
  const [selectedSpecialty, setSelectedSpecialty] = useState("Kardiologi");
  const [selectedDoctorId, setSelectedDoctorId] = useState(allDoctors[0]?.id || "");
  const [selectedDate, setSelectedDate] = useState("2026-09-18");
  const [selectedSession, setSelectedSession] = useState("Pagi (08:30 - 12:00 WIB)");
  const [patientData, setPatientData] = useState({
    fullName: "",
    idNumber: "",
    phone: "",
    email: "",
    paymentType: "Asuransi Swasta / Umum",
    notes: "",
  });
  const [bookingCode, setBookingCode] = useState("");

  const specialtyOptions = [
    { id: "Kardiologi", label: "Kardiologi & Jantung", icon: "❤️" },
    { id: "Neurologi", label: "Neurologi & Saraf", icon: "🧠" },
    { id: "Pediatrik", label: "Kesehatan Anak (Pediatrik)", icon: "👶" },
    { id: "Ortopedi", label: "Ortopedi & Sendi", icon: "🦴" },
    { id: "Onkologi", label: "Kanker & Onkologi", icon: "🎗️" },
    { id: "Kebidanan", label: "Kebidanan & Kandungan", icon: "🌸" },
  ];

  // Filter doctors by specialty
  const availableDoctors = allDoctors.filter(
    (d) => d.department.toLowerCase() === selectedSpecialty.toLowerCase()
  );

  const selectedDoctor =
    allDoctors.find((d) => d.id === selectedDoctorId) || availableDoctors[0] || allDoctors[0];

  const handleNext = () => {
    if (currentStep === 1) {
      if (availableDoctors.length > 0 && !availableDoctors.some((d) => d.id === selectedDoctorId)) {
        setSelectedDoctorId(availableDoctors[0].id);
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    } else if (currentStep === 3) {
      setCurrentStep(4);
    } else if (currentStep === 4) {
      if (!patientData.fullName || !patientData.phone) {
        alert("Mohon lengkapi Nama Lengkap dan Nomor WhatsApp Anda.");
        return;
      }
      const phoneDigits = patientData.phone.replace(/\D/g, "");
      const generatedCode = `SHL-2026-${phoneDigits.slice(-4) || "8821"}`;
      setBookingCode(generatedCode);
      setCurrentStep(5);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3 | 4 | 5);
    }
  };

  const resetWizard = () => {
    setCurrentStep(1);
    setPatientData({
      fullName: "",
      idNumber: "",
      phone: "",
      email: "",
      paymentType: "Asuransi Swasta / Umum",
      notes: "",
    });
  };

  return (
    <section id="appointment-wizard" className="w-full py-14 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#0077C8] text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-100">
            Booking Online Terpadu
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#111111] mb-3 leading-tight">
            Jadwal Janji Temu Dokter Spesialis
          </h2>
          <div className="w-16 h-1 bg-[#0077C8] mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
            Pilih spesialisasi, dokter, dan waktu konsultasi yang Anda inginkan dengan alur mudah dan konfirmasi instan.
          </p>
        </div>

        {/* Wizard Card Container */}
        <div className="bg-slate-50/70 border border-gray-200/90 rounded-3xl shadow-xl overflow-hidden">
          {/* Step Progress Bar */}
          <div className="bg-[#00205B] text-white px-4 sm:px-8 py-5">
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {[
                { step: 1, label: "Spesialisasi" },
                { step: 2, label: "Dokter" },
                { step: 3, label: "Waktu" },
                { step: 4, label: "Data Pasien" },
                { step: 5, label: "Konfirmasi" },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center relative flex-1">
                  <div
                    className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-colors ${
                      currentStep >= item.step
                        ? "bg-[#0077C8] text-white shadow-md ring-2 ring-white/40"
                        : "bg-white/20 text-white/60"
                    }`}
                  >
                    {currentStep > item.step ? (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    ) : (
                      item.step
                    )}
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs mt-1.5 hidden sm:block font-medium ${
                      currentStep >= item.step ? "text-white" : "text-white/50"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Wizard Content Body */}
          <div className="p-5 sm:p-8 md:p-10">
            {/* STEP 1: CHOOSE SPECIALTY */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                    Langkah 1: Pilih Poliklinik / Spesialisasi Medis
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Pilih departemen spesialisasi yang sesuai dengan keluhan kesehatan Anda.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {specialtyOptions.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setSelectedSpecialty(item.id);
                        const docs = allDoctors.filter(
                          (d) => d.department.toLowerCase() === item.id.toLowerCase()
                        );
                        if (docs.length > 0) setSelectedDoctorId(docs[0].id);
                      }}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
                        selectedSpecialty === item.id
                          ? "bg-white border-[#0077C8] shadow-md ring-2 ring-[#0077C8]/20"
                          : "bg-white/60 border-gray-200 hover:border-gray-300 hover:bg-white"
                      }`}
                    >
                      <span className="text-2xl shrink-0">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs sm:text-sm font-bold text-gray-900 block truncate">
                          {item.label}
                        </span>
                        <span className="text-[11px] text-gray-500">
                          {allDoctors.filter((d) => d.department === item.id).length} Dokter Tersedia
                        </span>
                      </div>
                      {selectedSpecialty === item.id && (
                        <CheckCircle2 className="w-5 h-5 text-[#0077C8] shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: CHOOSE DOCTOR */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                    Langkah 2: Pilih Dokter Konsultan ({selectedSpecialty})
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Pilih dokter spesialis sesuai jadwal dan keahlian subspesifik yang Anda inginkan.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(availableDoctors.length > 0 ? availableDoctors : allDoctors.slice(0, 2)).map(
                    (doc) => (
                      <button
                        key={doc.id}
                        type="button"
                        onClick={() => setSelectedDoctorId(doc.id)}
                        className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-start gap-4 ${
                          selectedDoctorId === doc.id
                            ? "bg-white border-[#0077C8] shadow-md ring-2 ring-[#0077C8]/20"
                            : "bg-white/70 border-gray-200 hover:border-gray-300 hover:bg-white"
                        }`}
                      >
                        <div className="relative w-16 sm:w-20 aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-gray-200">
                          <Image
                            src={doc.image}
                            alt={doc.name}
                            fill
                            className="object-cover object-top"
                          />
                        </div>

                        <div className="flex-1 min-w-0 space-y-1">
                          <h4 className="font-serif text-sm sm:text-base font-bold text-gray-900 leading-snug">
                            {doc.name}
                          </h4>
                          <p className="text-xs font-semibold text-[#0077C8]">
                            {doc.specialty}
                          </p>
                          <p className="text-[11px] text-gray-500">
                            {doc.subspecialty}
                          </p>
                          <div className="pt-2 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{doc.schedule}</span>
                          </div>
                        </div>

                        {selectedDoctorId === doc.id && (
                          <CheckCircle2 className="w-5 h-5 text-[#0077C8] shrink-0" />
                        )}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {/* STEP 3: CHOOSE DATE & TIME */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                    Langkah 3: Tentukan Tanggal & Sesi Konsultasi
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Pilih tanggal kunjungan dan sesi waktu periksa dengan {selectedDoctor.name}.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date selection */}
                  <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-3">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Pilih Tanggal Kunjungan *
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min="2026-09-15"
                      max="2026-12-31"
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-300 rounded-xl text-sm font-semibold text-gray-800 focus:ring-2 focus:ring-[#0077C8] focus:outline-none"
                    />
                    <p className="text-[11px] text-gray-500">
                      * Harap hadir 15 menit sebelum sesi dimulai untuk verifikasi administrasi.
                    </p>
                  </div>

                  {/* Session selection */}
                  <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-3">
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Pilih Sesi Waktu *
                    </label>
                    <div className="space-y-2">
                      {[
                        "Pagi (08:30 - 12:00 WIB)",
                        "Siang (13:00 - 16:30 WIB)",
                        "Sore / Malam (17:00 - 20:00 WIB)",
                      ].map((sess, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setSelectedSession(sess)}
                          className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold flex items-center justify-between cursor-pointer transition-colors ${
                            selectedSession === sess
                              ? "bg-blue-50 border-[#0077C8] text-[#002D72]"
                              : "bg-slate-50 border-gray-200 text-gray-700 hover:bg-slate-100"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#0077C8]" />
                            <span>{sess}</span>
                          </div>
                          {selectedSession === sess && (
                            <CheckCircle2 className="w-4 h-4 text-[#0077C8]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: PATIENT INFORMATION */}
            {currentStep === 4 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">
                    Langkah 4: Data Identitas Pasien
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Masukkan data pasien yang akan berkonsultasi untuk penerbitan nomor antrean rekam medis.
                  </p>
                </div>

                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Nama Lengkap Pasien *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sesuai KTP / Paspor"
                        value={patientData.fullName}
                        onChange={(e) =>
                          setPatientData({ ...patientData, fullName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0077C8] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Nomor Induk Kependudukan (NIK / KTP)
                      </label>
                      <input
                        type="text"
                        placeholder="16 digit NIK"
                        value={patientData.idNumber}
                        onChange={(e) =>
                          setPatientData({ ...patientData, idNumber: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0077C8] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="0812-xxxx-xxxx"
                        value={patientData.phone}
                        onChange={(e) =>
                          setPatientData({ ...patientData, phone: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0077C8] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Alamat Email
                      </label>
                      <input
                        type="email"
                        placeholder="alamat@email.com"
                        value={patientData.email}
                        onChange={(e) =>
                          setPatientData({ ...patientData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0077C8] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Metode Penjaminan / Pembayaran
                      </label>
                      <select
                        value={patientData.paymentType}
                        onChange={(e) =>
                          setPatientData({ ...patientData, paymentType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0077C8] focus:outline-none bg-white"
                      >
                        <option value="Asuransi Swasta / Korporasi">Asuransi Swasta / Korporasi</option>
                        <option value="Umum / Pembayaran Pribadi">Umum / Pembayaran Pribadi</option>
                        <option value="BPJS Kesehatan (Dengan Rujukan Faskes 1)">BPJS Kesehatan</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Keluhan Singkat (Opsional)
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Kontrol rutin, nyeri dada..."
                        value={patientData.notes}
                        onChange={(e) =>
                          setPatientData({ ...patientData, notes: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0077C8] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: CONFIRMATION SUCCESS */}
            {currentStep === 5 && (
              <div className="space-y-6 text-center animate-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Pemesanan Janji Temu Berhasil
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                    Konfirmasi Reservasi Medis Shilah
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                    Kode reservasi Anda telah tercatat pada sistem rumah sakit. Notifikasi konfirmasi dan bukti pendaftaran juga telah disiapkan.
                  </p>
                </div>

                {/* Booking Ticket Summary Card */}
                <div className="max-w-xl mx-auto bg-white rounded-2xl border-2 border-dashed border-[#0077C8]/40 p-6 text-left shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div>
                      <span className="text-[11px] font-semibold text-gray-400 uppercase">
                        Nomor Booking Registrasi
                      </span>
                      <p className="text-lg font-mono font-bold text-[#002D72]">
                        {bookingCode}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-200">
                      Terkonfirmasi
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    <div>
                      <span className="text-gray-400 block text-[11px]">Nama Pasien</span>
                      <p className="font-bold text-gray-800">{patientData.fullName || "Pasien Shilah"}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[11px]">Nomor WhatsApp</span>
                      <p className="font-bold text-gray-800">{patientData.phone}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[11px]">Dokter Spesialis</span>
                      <p className="font-bold text-gray-800">{selectedDoctor.name}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[11px]">Poliklinik & Lokasi</span>
                      <p className="font-bold text-gray-800">{selectedDoctor.room}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[11px]">Tanggal Kunjungan</span>
                      <p className="font-bold text-[#0077C8]">{selectedDate}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[11px]">Sesi Waktu</span>
                      <p className="font-bold text-gray-800">{selectedSession}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-5 py-2.5 bg-white hover:bg-slate-100 text-gray-800 border border-gray-300 font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Printer className="w-4 h-4 text-gray-600" />
                    <span>Cetak Bukti Reservasi</span>
                  </button>

                  <a
                    href={`https://wa.me/6281288887744?text=${encodeURIComponent(
                      `Halo Customer Care Shilah, saya telah membuat janji temu dengan kode: ${bookingCode} untuk dokter ${selectedDoctor.name} pada ${selectedDate}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Konfirmasi via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={resetWizard}
                    className="px-5 py-2.5 text-gray-500 hover:text-gray-800 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Buat Janji Temu Lain
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Wizard Navigation Footer Bar */}
          {currentStep < 5 && (
            <div className="px-5 sm:px-8 py-4 bg-white border-t border-gray-200/80 flex items-center justify-between">
              <button
                type="button"
                disabled={currentStep === 1}
                onClick={handleBack}
                className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center gap-1.5 ${
                  currentStep === 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-gray-700 hover:bg-slate-100 border border-gray-200 cursor-pointer"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Kembali</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="px-6 sm:px-8 py-2.5 bg-[#0077C8] hover:bg-[#005fa3] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer"
              >
                <span>{currentStep === 4 ? "Konfirmasi Janji Temu" : "Lanjutkan"}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
