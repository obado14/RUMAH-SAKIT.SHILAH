import React from "react";
import Image from "next/image";

export function HeroBanner() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image Container */}
      <div className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[480px]">
        <Image
          src="/sites/hopkinsmedicine/images/hero_bg.jpg"
          alt="Hands holding with care and compassion"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Subtle dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        {/* Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal text-white tracking-wide text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            Shilah Medicine
          </h1>
        </div>
      </div>

      {/* Decorative striped pattern ribbon */}
      <div
        className="w-full h-3 sm:h-4 bg-[#e5e7eb]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #c5c9d0 0, #c5c9d0 2px, transparent 2px, transparent 8px)",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
