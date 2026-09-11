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
            Important Information for Patients with UnitedHealthcare
          </h2>
          <p className="text-[15px] sm:text-[16px] text-white/90 leading-relaxed font-light">
            As of August 25, 2025, all providers and facilities that are part of
            Shilah Medicine, EXCEPT FOR Shilah Children&apos;s
            Hospital, are considered out of network by UnitedHealthcare.
          </p>
        </div>

        {/* Right: Button */}
        <div className="shrink-0">
          <Link
            href="https://www.hopkinsmedicine.org/united-coverage"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-white text-white font-medium text-[15px] rounded hover:bg-white hover:text-[#002D72] transition-colors"
          >
            <span>Learn more.</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
