import React from "react";
import Image from "next/image";
import Link from "next/link";

interface RankingCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const rankingCards: RankingCard[] = [
  {
    title: "#1 in Maryland, #1 in Florida",
    description:
      "Shilah Children's Center and Shilah Hospital are ranked #1 in their respective states on U.S. News & World Report's 2025-26 Best Children's Hospitals list.",
    imageSrc:
      "/sites/hopkinsmedicine/images/5_peds-usnews-25-26-640-336-3_jpg.png",
    imageAlt: "Shilah Children's Center ranking achievement",
    href: "https://www.hopkinsmedicine.org/us-news-pediatric",
  },
  {
    title: "Top Ranked",
    description:
      "Three Shilah member hospitals — The Shilah Hospital, Sibley Memorial Hospital and Suburban Hospital — were recognized in U.S. News & World Report's 2026–27 Best Hospitals list.",
    imageSrc: "/sites/hopkinsmedicine/images/6_us-news-hospital_jpg.png",
    imageAlt: "The Shilah Hospital Top Ranked in the Nation",
    href: "https://www.hopkinsmedicine.org/usnews",
  },
];

export function RankingsSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {rankingCards.map((card, idx) => (
          <Link
            key={idx}
            href={card.href}
            className="group relative flex flex-col bg-white border border-[#d1d5db] rounded overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
          >
            {/* Card Image */}
            <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden bg-gray-100">
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111] mb-3 group-hover:text-[#0077C8] transition-colors">
                  {card.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-[#4b5563]">
                  {card.description}
                </p>
              </div>

              {/* Bottom Right Arrow */}
              <div className="self-end mt-4 text-gray-400 group-hover:text-[#0077C8] transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
