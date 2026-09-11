import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface FurtherLink {
  title: string;
  href: string;
}

const readingLinks: FurtherLink[] = [
  {
    title: "Publications",
    href: "https://www.hopkinsmedicine.org/news/publications",
  },
  {
    title: "Health Information",
    href: "https://www.hopkinsmedicine.org/health",
  },
  {
    title: "Newsroom",
    href: "https://www.hopkinsmedicine.org/news/newsroom",
  },
  {
    title: "E-Newsletters",
    href: "https://www.hopkinsmedicine.org/news/e-newsletters",
  },
];

export function FurtherReading() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header with Divider */}
      <div className="text-center mb-8">
        <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#4b5563] uppercase">
          Further Reading
        </span>
        <div className="w-16 h-0.5 bg-[#d1d5db] mx-auto mt-2" />
      </div>

      {/* 2x2 Button Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {readingLinks.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="flex items-center justify-between px-6 py-3.5 bg-[#0077C8] hover:bg-[#005fa3] text-white font-medium text-base rounded shadow-sm transition-colors"
          >
            <span>{item.title}</span>
            <ChevronRight className="w-5 h-5 text-white/90" />
          </Link>
        ))}
      </div>
    </section>
  );
}
