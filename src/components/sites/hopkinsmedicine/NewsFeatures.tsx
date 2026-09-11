import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface NewsItem {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const newsItems: NewsItem[] = [
  {
    title: "Obsessive-Compulsive Disorder (OCD) in Children",
    imageSrc: "/sites/hopkinsmedicine/images/10_ocd-children_jpg.png",
    imageAlt: "Young girl reads her phone anxiously, her hand to her forehead",
    href: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/obsessive-compulsive-disorder-ocd-in-children",
  },
  {
    title: "Fantastic Voyagers",
    imageSrc:
      "/sites/hopkinsmedicine/images/11_microgrippers-illustration_jpg.png",
    imageAlt:
      "Illustrated therapeutic grippers with six prongs, racing through a blood vessel",
    href: "https://www.hopkinsmedicine.org/news/articles/2025/05/fantastic-voyagers",
  },
  {
    title: "A Digital 'Twin' for Individualized Cardiology",
    imageSrc: "/sites/hopkinsmedicine/images/12_digital-twin-heart_jpg.png",
    imageAlt: "Model heart with a digital sketch double",
    href: "https://www.hopkinsmedicine.org/news/articles/2025/05/a-digital-twin-for-individualized-cardiology",
  },
];

export function NewsFeatures() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-center text-[#222222] mb-8">
        News and Features
      </h2>

      {/* 3 News Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {newsItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="group relative flex flex-col bg-white border border-[#d1d5db] rounded overflow-hidden shadow-sm hover:shadow-md transition-all duration-200"
          >
            {/* Image */}
            <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title & Arrow */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <h3 className="font-serif text-lg font-bold text-[#111111] group-hover:text-[#0077C8] transition-colors leading-snug">
                {item.title}
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

      {/* See More Stories Button */}
      <div className="text-center">
        <Link
          href="https://www.hopkinsmedicine.org/news"
          className="inline-flex items-center space-x-2 px-6 py-2.5 bg-[#e9ecef] hover:bg-[#dee2e6] text-[#222222] font-medium text-[15px] rounded border border-[#ced4da] transition-colors"
        >
          <span>See more stories</span>
          <ChevronRight className="w-4 h-4 text-[#4b5563]" />
        </Link>
      </div>
    </section>
  );
}
