import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function CareCallout() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="bg-[#f7f8f9] border border-[#d1d5db] rounded-2xl sm:rounded-xl p-5 sm:p-10 text-center shadow-xs">
        <h3 className="font-serif text-xl sm:text-[28px] font-normal text-[#222222] mb-3 leading-snug">
          Merasa Kurang Sehat? Panduan Memilih Fasilitas Perawatan
        </h3>
        <p className="text-[15px] sm:text-[16px] text-[#4b5563] max-w-2xl mx-auto mb-6 leading-relaxed">
          Memutuskan apakah Anda memerlukan konsultasi dokter umum, poliklinik spesialis, atau Instalasi Gawat Darurat (IGD) dapat membingungkan. Kami siap memandu Anda menentukan fasilitas yang tepat sesuai kondisi Anda.
        </p>
        <Link
          href="/patient-care"
          className="inline-flex items-center space-x-2 px-6 py-2.5 bg-[#e9ecef] hover:bg-[#dee2e6] text-[#222222] font-medium text-[15px] rounded border border-[#ced4da] transition-colors"
        >
          <span>Pelajari lebih lanjut</span>
          <ChevronRight className="w-4 h-4 text-[#4b5563]" />
        </Link>
      </div>
    </section>
  );
}
