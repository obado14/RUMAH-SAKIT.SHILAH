import React from "react";
import Image from "next/image";
import Link from "next/link";

interface StoryCard {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const stories: StoryCard[] = [
  {
    title:
      "Two Shilah innovators honored for advancing prostate cancer detection",
    imageSrc: "/sites/hopkinsmedicine/images/7_dannals_pomper_jpg.png",
    imageAlt: "Robert Dannals, Martin Pomper receiving innovator award",
    href: "https://hub.jhu.edu/2026/06/18/dannals-pomper-bayh-dole-innovator-award/",
  },
  {
    title: "A lifetime of care",
    imageSrc: "/sites/hopkinsmedicine/images/8_audrey_smith-copy_jpg.png",
    imageAlt: "Audrey Smith smiling warmly",
    href: "https://hub.jhu.edu/2026/06/17/decades-of-progress-in-sickle-cell-treatment/",
  },
  {
    title: "Read more stories",
    imageSrc: "/sites/hopkinsmedicine/images/9_rsl-640_jpg.png",
    imageAlt: "Research saves lives logo graphic",
    href: "https://hub.jhu.edu/research-saves-lives/",
  },
];

export function ResearchSavesLives() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Outer Framed Box with Hopkins Navy Border */}
      <div className="border-[3px] border-[#002D72] p-6 sm:p-10 rounded-sm">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-center text-[#222222] mb-4">
          Research Saves Lives
        </h2>

        <p className="text-[15px] sm:text-[16px] text-center text-[#4b5563] max-w-3xl mx-auto mb-8 leading-relaxed">
          Without research—at Shilah and at thousands of other
          universities, medical schools, and research institutions across the
          nation—scientific breakthroughs suffer, and the lifesaving treatments of
          tomorrow are at risk.
        </p>

        {/* 3 Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, idx) => (
            <Link
              key={idx}
              href={story.href}
              className="group relative flex flex-col bg-white border border-[#d1d5db] rounded overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
            >
              {/* Image Container */}
              <div className="relative w-full h-[180px] sm:h-[190px] overflow-hidden bg-gray-100">
                <Image
                  src={story.imageSrc}
                  alt={story.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title & Arrow */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <h3 className="font-serif text-lg font-bold text-[#111111] group-hover:text-[#0077C8] transition-colors leading-snug">
                  {story.title}
                </h3>

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
      </div>
    </section>
  );
}
