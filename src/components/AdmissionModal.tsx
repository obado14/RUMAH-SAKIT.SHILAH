"use client";

import React, { useState, useEffect } from "react";
import { AcademicProgram } from "@/data/academicPrograms";
import {
  X,
  GraduationCap,
  Calendar,
  FileText,
  DollarSign,
  Building2,
  CheckCircle2,
  Clock,
  Award,
  Send,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface AdmissionModalProps {
  program: AcademicProgram | null;
  onClose: () => void;
}

type TabType = "requirements" | "timeline" | "tuition" | "facilities" | "consult";

export function AdmissionModal({ program, onClose }: AdmissionModalProps) {
  if (!program) return null;
  return <AdmissionModalDialog key={program.id} program={program} onClose={onClose} />;
}

function AdmissionModalDialog({
  program,
  onClose,
}: {
  program: AcademicProgram;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<TabType>("requirements");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    schoolOrigin: "",
    message: "",
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const encodedWhatsapp = encodeURIComponent(
    `${program.whatsappMessage}\n\nMohon info persyaratan dan formulir pendaftaran terbaru.`
  );
  const whatsappUrl = `https://wa.me/6281288887744?text=${encodedWhatsapp}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="admission-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[88vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto border border-gray-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100 bg-slate-50/90 shrink-0">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#002D72] truncate pr-2">
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#0077C8] shrink-0" />
            <span className="truncate">Informasi Admisi & Pendaftaran Mahasiswa Baru</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-gray-800 hover:bg-gray-200 transition-colors cursor-pointer shrink-0"
            aria-label="Tutup jendela informasi pendaftaran"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Hero Banner */}
        <div className="bg-gradient-to-br from-[#00205B] to-[#003B95] text-white p-5 sm:p-6 shrink-0 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20">
                {program.badge}
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-blue-400/20 text-blue-100 border border-blue-300/30 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                {program.accreditation}
              </span>
            </div>

            <h2
              id="admission-modal-title"
              className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug drop-shadow-sm"
            >
              {program.title}
            </h2>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-blue-100">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-300" />
                <span>Durasi: {program.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-blue-300" />
                <span>Gelar: {program.degree}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 bg-white px-3 sm:px-6 overflow-x-auto no-scrollbar shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab("requirements")}
            className={`flex items-center gap-1.5 py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === "requirements"
                ? "border-[#0077C8] text-[#0077C8]"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Persyaratan</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("timeline")}
            className={`flex items-center gap-1.5 py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === "timeline"
                ? "border-[#0077C8] text-[#0077C8]"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Jadwal & Gelombang</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("tuition")}
            className={`flex items-center gap-1.5 py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === "tuition"
                ? "border-[#0077C8] text-[#0077C8]"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Biaya & Beasiswa</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("facilities")}
            className={`flex items-center gap-1.5 py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === "facilities"
                ? "border-[#0077C8] text-[#0077C8]"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Fasilitas & Kurikulum</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("consult")}
            className={`flex items-center gap-1.5 py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
              activeTab === "consult"
                ? "border-[#0077C8] text-[#0077C8]"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
          >
            <Send className="w-4 h-4" />
            <span>Formulir Pendaftaran</span>
          </button>
        </div>

        {/* Scrollable Tab Content Area */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 flex-1 text-gray-700 text-sm">
          {/* TAB 1: REQUIREMENTS */}
          {activeTab === "requirements" && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">
                  Kualifikasi & Persyaratan Calon Mahasiswa
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Berikut merupakan kualifikasi akademik dan dokumen yang wajib dipenuhi calon peserta.
                </p>
              </div>

              {/* Academic requirements */}
              <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-gray-200/80 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#002D72]">
                  1. Persyaratan Akademik Dasar
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {program.requirements.academic.map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0077C8] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exams requirements */}
              <div className="bg-blue-50/50 p-4 sm:p-5 rounded-2xl border border-blue-100 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0077C8]">
                  2. Tahapan Tes & Ujian Seleksi
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {program.requirements.exams.map((exam, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-[#0077C8] shrink-0 mt-0.5" />
                      <span>{exam}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents requirements */}
              <div className="bg-amber-50/50 p-4 sm:p-5 rounded-2xl border border-amber-200/60 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  3. Berkas Dokumen Administrasi
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-amber-950">
                  {program.requirements.documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-2" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 2: TIMELINE */}
          {activeTab === "timeline" && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">
                  Jadwal & Gelombang Pendaftaran
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Perhatikan batas waktu pengunggahan berkas dan pelaksanaan seleksi untuk tahun akademik berjalan.
                </p>
              </div>

              <div className="space-y-4">
                {program.timeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl border border-gray-200 bg-white shadow-xs hover:border-[#0077C8] transition-all space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-[#0077C8] font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h4 className="font-serif font-bold text-sm sm:text-base text-gray-900">
                        {item.wave}
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs sm:text-sm pt-2 border-t border-gray-100">
                      <div className="p-2.5 rounded-xl bg-slate-50">
                        <span className="block text-[11px] font-semibold text-gray-400 uppercase">
                          Periode Registrasi
                        </span>
                        <span className="font-medium text-gray-800">
                          {item.registrationPeriod}
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50">
                        <span className="block text-[11px] font-semibold text-gray-400 uppercase">
                          Pelaksanaan Ujian
                        </span>
                        <span className="font-medium text-gray-800">
                          {item.examDate}
                        </span>
                      </div>

                      <div className="p-2.5 rounded-xl bg-blue-50/70 border border-blue-100">
                        <span className="block text-[11px] font-semibold text-[#0077C8] uppercase">
                          Pengumuman Kelulusan
                        </span>
                        <span className="font-bold text-[#002D72]">
                          {item.announcement}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: TUITION & SCHOLARSHIPS */}
          {activeTab === "tuition" && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">
                  Struktur Biaya Pendidikan & Program Beasiswa
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Fakultas Kedokteran Shilah berkomitmen memastikan akses pendidikan kedokteran terbuka bagi putra-putri berprestasi melalui berbagai skema beasiswa.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#002D72]">
                    Biaya Kuliah (BOK / UKT)
                  </span>
                  <p className="text-sm font-semibold text-gray-900">
                    {program.tuitionInfo.tuitionRange}
                  </p>
                  <p className="text-xs text-gray-500">
                    Dapat diangsur per semester melalui sistem autodebet perbankan mitra resmi.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#002D72]">
                    Biaya Pengembangan (SPI/BOP)
                  </span>
                  <p className="text-sm font-semibold text-gray-900">
                    {program.tuitionInfo.admissionFee}
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-700 shrink-0" />
                  <h4 className="font-bold text-sm text-emerald-950">
                    Jalur Beasiswa Tersedia
                  </h4>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-emerald-900">
                  {program.tuitionInfo.scholarships.map((sch, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{sch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: FACILITIES */}
          {activeTab === "facilities" && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">
                  Fasilitas Unggulan & Sorotan Kurikulum
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Pendidikan didukung sarana simulasi klinis berstandar global dan rumah sakit pendidikan utama.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#002D72]">
                  Fasilitas Rumah Sakit & Laboratorium
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {program.facilities.map((fac, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-50 border border-gray-200/80 flex items-start gap-2.5 text-xs sm:text-sm"
                    >
                      <Building2 className="w-4 h-4 text-[#0077C8] shrink-0 mt-0.5" />
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#002D72]">
                  Keunggulan Kurikulum & Metode Belajar
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {program.curriculumHighlights.map((cur, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0077C8] shrink-0 mt-0.5" />
                      <span>{cur}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 5: CONSULTATION / REGISTRATION FORM */}
          {activeTab === "consult" && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-1">
                  Formulir Konsultasi & Minat Pendaftaran
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Isi data singkat berikut untuk menerima panduan pendaftaran resmi (PDF), jadwal simulasi ujian CBT, dan konsultasi tatap muka dengan tim admisi.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in zoom-in-95">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-lg font-bold text-emerald-950">
                    Permintaan Berhasil Dikirim!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Terima kasih, <strong className="font-semibold">{formData.fullName}</strong>. Tim Admisi Shilah School of Medicine akan mengirimkan berkas panduan lengkap ke email <span className="underline">{formData.email}</span> dan menghubungi WhatsApp Anda dalam 1x24 jam kerja.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="inline-block mt-2 px-4 py-2 text-xs font-semibold text-emerald-700 hover:text-emerald-900 bg-white rounded-lg border border-emerald-300 cursor-pointer"
                  >
                    Kirim Pertanyaan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Nama Lengkap Calon Mahasiswa *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Contoh: Sarah Aulia"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0077C8] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Nomor WhatsApp Aktif *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="0812-xxxx-xxxx"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0077C8] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Alamat Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="nama@email.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0077C8] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Asal Sekolah / Universitas / Institusi
                      </label>
                      <input
                        type="text"
                        value={formData.schoolOrigin}
                        onChange={(e) =>
                          setFormData({ ...formData, schoolOrigin: e.target.value })
                        }
                        placeholder="SMA / Universitas asal"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0077C8] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Pertanyaan Khusus atau Catatan
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tuliskan pertanyaan seputar beasiswa, jadwal ujian, atau kurikulum..."
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0077C8] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0077C8] hover:bg-[#005fa3] text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Permintaan Informasi Pendaftaran</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-3.5 sm:p-5 border-t border-gray-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 border border-gray-200 hover:bg-gray-100 text-gray-700 text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer text-center"
            >
              Tutup
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("consult")}
              className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 text-center cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#0077C8]" />
              <span>Isi Form Minat</span>
            </button>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group text-center cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat WhatsApp Admisi</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
}
