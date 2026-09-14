import React from "react";
import Link from "next/link";
import { Ambulance, Phone, MapPin, ShieldAlert, ArrowRight } from "lucide-react";

export function EmergencySection() {
  return (
    <section
      aria-label="Layanan Gawat Darurat 24 Jam"
      className="relative w-full bg-gradient-to-r from-[#001D4A] via-[#00205B] to-[#0A2E6E] text-white border-b-2 border-red-600 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Left: Emergency Status & Info */}
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 text-left w-full lg:w-auto">
            <div className="relative shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-lg">
              <Ambulance className="w-6 h-6 animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border border-white"></span>
              </span>
            </div>

            <div className="space-y-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Emergency Care 24/7
                </span>
                <span className="inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold bg-red-500/20 text-red-200 border border-red-400/30">
                  Siaga Non-Stop
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Unit Gawat Darurat & Trauma Center Selalu Siap 24 Jam
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 line-clamp-1 sm:line-clamp-none">
                Penanganan cepat darurat medis, serangan jantung, stroke, trauma, dan resusitasi kritis dengan tim dokter spesialis darurat.
              </p>
            </div>
          </div>

          {/* Right: Emergency Actions */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 w-full lg:w-auto shrink-0 justify-start lg:justify-end">
            <a
              href="tel:021500911"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:shadow-red-600/30 cursor-pointer text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Emergency Contact: (021) 500-911</span>
            </a>

            <Link
              href="/locations"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 active:scale-95 text-white border border-white/20 font-semibold text-xs sm:text-sm rounded-xl transition-all text-center"
            >
              <MapPin className="w-4 h-4 text-red-400" />
              <span>Find Emergency Department</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
