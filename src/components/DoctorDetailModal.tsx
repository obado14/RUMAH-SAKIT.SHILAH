"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Doctor } from "@/data/doctors";
import {
  X,
  Award,
  GraduationCap,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Stethoscope,
  Building,
  Languages,
  ArrowRight,
} from "lucide-react";

interface DoctorDetailModalProps {
  doctor: Doctor | null;
  onClose: () => void;
}

export function DoctorDetailModal({ doctor, onClose }: DoctorDetailModalProps) {
  useEffect(() => {
    if (!doctor) return;

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
  }, [doctor, onClose]);

  if (!doctor) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="doctor-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto border border-gray-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 border-b border-gray-100 bg-slate-50/90 shrink-0">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#002D72] truncate pr-2">
            <ShieldCheck className="w-4 h-4 text-[#0077C8] shrink-0" />
            <span className="truncate">Profil Dokter Spesialis Shilah Medicine</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors cursor-pointer shrink-0"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
          {/* Doctor Header Banner */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 bg-gradient-to-br from-blue-50/80 via-slate-50 to-white p-4 sm:p-5 rounded-2xl border border-blue-100/70">
            {/* 3:4 Aspect Ratio Photo in Modal */}
            <div className="relative w-28 sm:w-40 aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden border-2 border-white shadow-md bg-slate-100 shrink-0">
              {doctor.image ? (
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#002D72]">
                  <Stethoscope className="w-10 h-10" />
                </div>
              )}
            </div>

            {/* Header Text Info */}
            <div className="flex-1 text-center sm:text-left space-y-1.5 sm:space-y-2">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold bg-[#002D72] text-white">
                  {doctor.department}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Praktik Aktif
                </span>
              </div>

              <h2
                id="doctor-modal-title"
                className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#111111] leading-tight"
              >
                {doctor.name}
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-[#0077C8] font-semibold">
                {doctor.specialty}
              </p>

              <p className="text-xs sm:text-sm text-gray-600">
                <strong className="text-gray-800">Subspesialisasi:</strong> {doctor.subspecialty}
              </p>

              <div className="pt-1.5 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#FFC20E]" />
                  {doctor.experience}
                </span>
                <span className="flex items-center gap-1">
                  <Languages className="w-3.5 h-3.5 text-gray-400" />
                  {doctor.languages.join(", ")}
                </span>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-[#0077C8]" />
              Tentang & Profil Klinis
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed bg-gray-50/80 p-3.5 sm:p-4 rounded-xl border border-gray-100">
              {doctor.bio}
            </p>
          </div>

          {/* Education & Degrees */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#0077C8]" />
              Riwayat Pendidikan & Almamater
            </h3>
            <div className="space-y-2">
              {doctor.degrees.map((deg, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 bg-white p-2.5 sm:p-3 rounded-lg border border-gray-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0077C8] mt-1.5 shrink-0" />
                  <span>{deg}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services & Procedures */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0077C8]" />
              Layanan & Prosedur Medis Unggulan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {doctor.services.map((srv, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-50/50 border border-blue-100 text-xs sm:text-sm text-gray-800"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0077C8] shrink-0" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FFC20E]" />
              Sertifikasi & Keanggotaan Profesional
            </h3>
            <div className="flex flex-wrap gap-2">
              {doctor.certifications.map((cert, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Practice Location & Detailed Schedule */}
          <div className="space-y-3 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-gray-200">
            <h3 className="text-sm sm:text-base font-bold text-[#002D72] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#0077C8]" />
              Lokasi & Jadwal Praktik Konsultasi
            </h3>

            <div className="space-y-1.5 text-xs sm:text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <Building className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Rumah Sakit:</strong> {doctor.hospital}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Ruangan / Poliklinik:</strong> {doctor.room}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-1">
              {doctor.scheduleList.map((sched, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded-xl border border-gray-200 shadow-xs"
                >
                  <div className="font-semibold text-xs text-[#002D72]">{sched.day}</div>
                  <div className="text-xs text-gray-600 flex items-center gap-1 mt-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    {sched.hours}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1 font-medium">{sched.location}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-3.5 sm:p-5 border-t border-gray-100 bg-white flex flex-col-reverse sm:flex-row items-center justify-between gap-2.5 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 border border-gray-200 hover:bg-gray-100 text-gray-700 text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer text-center"
          >
            Tutup
          </button>

          <Link
            href={`/appointments?doctor=${encodeURIComponent(doctor.name)}`}
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#0077C8] hover:bg-[#005fa3] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group text-center"
          >
            <span>Jadwalkan Janji Temu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
