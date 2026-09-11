import React from "react";
import Image from "next/image";
import Link from "next/link";

interface QuickActionItem {
  title: string;
  href: string;
  iconSrc: string;
  iconAlt: string;
}

const actionItems: QuickActionItem[] = [
  {
    title: "Doctors",
    href: "https://www.hopkinsmedicine.org/profiles",
    iconSrc: "/sites/hopkinsmedicine/images/1_stethoscope-blue_png.png",
    iconAlt: "Illustration of a stethoscope.",
  },
  {
    title: "Locations",
    href: "https://www.hopkinsmedicine.org/patient-care/locations",
    iconSrc: "/sites/hopkinsmedicine/images/2_location-blue_png.png",
    iconAlt: "Location map pin icon",
  },
  {
    title: "Appointments",
    href: "https://www.hopkinsmedicine.org/patient-care/johns-hopkins-medicine-request-appointment",
    iconSrc: "/sites/hopkinsmedicine/images/3_appointment-blue_png.png",
    iconAlt: "Appointment calendar icon",
  },
  {
    title: "MyChart",
    href: "https://www.hopkinsmedicine.org/mychart/",
    iconSrc: "/sites/hopkinsmedicine/images/4_mychart-blue_png.png",
    iconAlt: "blue mychart icon",
  },
];

export function QuickAccessCards() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 -mt-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {actionItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="group relative flex flex-col items-center justify-between p-6 sm:p-8 bg-white border border-[#d1d5db] rounded shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            {/* Top / Center: Blue Icon */}
            <div className="relative w-20 h-16 sm:w-28 sm:h-20 mb-4 flex items-center justify-center">
              <Image
                src={item.iconSrc}
                alt={item.iconAlt}
                width={120}
                height={80}
                className="object-contain max-h-full transition-transform duration-200 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="font-serif text-lg sm:text-xl text-center font-bold text-[#111111] group-hover:text-[#0077C8] transition-colors">
              {item.title}
            </h3>

            {/* Bottom Right Corner Arrow */}
            <div className="absolute bottom-3 right-3 text-gray-400 group-hover:text-[#0077C8] transition-colors">
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
          </Link>
        ))}
      </div>
    </section>
  );
}
