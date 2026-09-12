import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function SchoolOfMedicine() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
      <div className="bg-[#f3f4f6] border border-[#e5e7eb] rounded-2xl sm:rounded-xl p-5 sm:p-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12">
          {/* Left Column */}
          <div className="flex-1">
            <h2 className="font-serif text-xl sm:text-3xl font-normal text-[#111111] mb-2 sm:mb-3">
              Fakultas Kedokteran Shilah
            </h2>
            <div className="w-12 h-0.5 bg-[#d1d5db] mb-4 sm:mb-5" />
            <p className="text-sm sm:text-[16px] text-[#4b5563] leading-relaxed mb-6 sm:mb-8">
              Fakultas Kedokteran Shilah University secara konsisten menjadi rujukan pendidikan dan inovasi medis terbaik. Dapatkan informasi mengenai program sarjana kedokteran, pendidikan dokter spesialis, serta riset klinis unggulan kami.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 sm:px-6 sm:py-3 border border-[#111111] text-[#111111] font-medium text-xs sm:text-[15px] rounded-xl sm:rounded hover:bg-white transition-colors text-center"
              >
                <span>Tentang Fakultas Kedokteran Shilah</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <Link
                href="/som"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 text-[#0077C8] hover:underline font-medium text-xs sm:text-[15px] px-2 py-2 text-center"
              >
                <span>Jelajahi program studi</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: SOM Logo */}
          <div className="shrink-0 flex items-center justify-center p-2 sm:p-4">
            <div className="relative w-[180px] sm:w-[300px] h-[65px] sm:h-[105px]">
              <Image
                src="/sites/hopkinsmedicine/images/shilah_som_logo.png"
                alt="Shilah School of Medicine logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
