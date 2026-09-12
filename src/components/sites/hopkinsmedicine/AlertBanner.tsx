import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function AlertBanner() {
  return (
    <section className="w-full bg-[#002D72] text-white py-10 sm:py-12 my-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left: Message */}
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl sm:text-[28px] font-normal text-white mb-4">
            Informasi Penting Penjaminan Asuransi & BPJS Pasien
          </h2>
          <p className="text-[15px] sm:text-[16px] text-white/90 leading-relaxed font-light">
            Shilah Medicine berkomitmen memberikan kemudahan proses administrasi klaim bagi seluruh pasien pemegang BPJS Kesehatan dan asuransi rekanan. Ketahui rincian cakupan dan langkah verifikasi data sebelum menjalani perawatan.
          </p>
        </div>

        {/* Right: Button */}
        <div className="shrink-0">
          <Link
            href="/billing"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-white text-white font-medium text-[15px] rounded hover:bg-white hover:text-[#002D72] transition-colors"
          >
            <span>Pelajari selengkapnya</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
