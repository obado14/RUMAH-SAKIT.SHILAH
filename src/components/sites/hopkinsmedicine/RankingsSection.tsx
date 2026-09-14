import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award } from "lucide-react";

interface RankingCard {
  tag: string;
  tagIcon: React.ElementType;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const rankingCards: RankingCard[] = [
  {
    tag: "Pusat Rujukan Pediatrik",
    tagIcon: Award,
    title: "Keunggulan Layanan Kesehatan Ibu & Anak Terpadu",
    description:
      "Pusat Kesehatan Anak Shilah didedikasikan untuk memberikan standar mutu perawatan klinis ramah anak, subspesialisasi pediatrik komprehensif, dan pendampingan keluarga yang penuh empati.",
    imageSrc:
      "/sites/hopkinsmedicine/images/5_peds-usnews-25-26-640-336-3_jpg.png",
    imageAlt: "Pusat Layanan Kesehatan Anak Shilah Medicine",
    href: "/about",
  },
  {
    tag: "Akreditasi Mutu Klinis",
    tagIcon: ShieldCheck,
    title: "Standar Pelayanan Medis Paripurna Berstandar Global",
    description:
      "Jaringan rumah sakit Shilah Medicine menerapkan protokol keselamatan pasien tertinggi, teknologi bedah mutakhir, serta integrasi riset klinis demi hasil terapi yang optimal dan terpercaya.",
    imageSrc: "/sites/hopkinsmedicine/images/6_us-news-hospital_jpg.png",
    imageAlt: "Rumah Sakit Shilah Terakreditasi Paripurna",
    href: "/about",
  },
];

export function RankingsSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 border-t border-gray-100">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
          Dedikasi & Mutu Layanan
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#00205B]">
          Featured Achievements &amp; Komitmen Mutu
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
          Menghadirkan standar akreditasi paripurna, integritas klinis, dan dedikasi penuh terhadap keselamatan setiap pasien di seluruh jejaring Shilah Medicine.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {rankingCards.map((card, idx) => {
          const TagIcon = card.tagIcon;
          return (
            <Link
              key={idx}
              href={card.href}
              className="group relative flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#0077C8]/40"
            >
              {/* Card Image */}
              <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden bg-gray-100">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/95 text-[#00205B] px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                    <TagIcon className="w-3.5 h-3.5 text-[#0077C8]" />
                    {card.tag}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] mb-2.5 group-hover:text-[#0077C8] transition-colors leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {card.description}
                  </p>
                </div>

                {/* Card Link Action */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0077C8] group-hover:text-[#00205B] transition-colors">
                  <span>Pelajari Komitmen Mutu Kami</span>
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
