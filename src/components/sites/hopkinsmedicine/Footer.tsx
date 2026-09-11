import React from "react";
import Image from "next/image";
import Link from "next/link";

const languages = [
  { name: "Español", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#spanish" },
  { name: "አማርኛ", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#amharic" },
  { name: "繁體中文", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#chinese" },
  { name: "Français", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#french" },
  { name: "Tagalog", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#tagalog" },
  { name: "Русский", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#russian" },
  { name: "Português", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#portugese" },
  { name: "Italiano", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#italian" },
  { name: "Tiếng Việt", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#vietnamese" },
  { name: "Ɓàsɔ́ɔ̀-wùɖù-po-nyɔ̀", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#bassa" },
  { name: "Igbo asusu", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#igbo" },
  { name: "èdè Yorùbá", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#yoruba" },
  { name: "বাংলা", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#bengali" },
  { name: "日本語", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#japanese" },
  { name: "한국어", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#korean" },
  { name: "Kreyòl Ayisyen", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#creole" },
  { name: "العربية", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#arabic" },
  { name: "Deutsch", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#german" },
  { name: "Polski", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#polish" },
  { name: "Ελληνικά", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#greek" },
  { name: "ગુજરાતી", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#gujarati" },
  { name: "ภาษาไทย", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#thai" },
  { name: "اردو", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#urdu" },
  { name: "فارسی", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#persian" },
  { name: "हिंदी", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#hindi" },
  { name: "Deitsch", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#pennsylvania-dutch" },
  { name: "ខ្មែរ", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#cambodian" },
  { name: "မြန်မာ", href: "https://www.hopkinsmedicine.org/patient-care/patients-visitors/language-assistance-services#burmese" },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#001733] text-white pt-12 pb-16 mt-16 border-t-4 border-[#002D72]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Brand Logo */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-block"
            aria-label="Shilah Medicine"
          >
            <div className="relative w-[194px] h-[70.61px]">
              <Image
                src="/sites/hopkinsmedicine/images/shilah_logo_transparent.png"
                alt="Shilah Medicine - Kesehatan Anda, Prioritas Kami"
                width={194}
                height={71}
                style={{ width: "194px", height: "70.61px" }}
                className="object-contain object-left"
              />
            </div>
          </Link>
        </div>

        {/* Middle Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/15">
          {/* Left Column: Language Assistance */}
          <div className="lg:col-span-7">
            <h4 className="text-[15px] font-bold text-white mb-3">
              Language Assistance Available:
            </h4>
            <div className="flex flex-wrap text-[13px] text-white/80 leading-relaxed">
              {languages.map((lang, idx) => (
                <React.Fragment key={idx}>
                  <Link
                    href={lang.href}
                    className="hover:underline hover:text-white transition-colors"
                  >
                    {lang.name}
                  </Link>
                  {idx < languages.length - 1 && (
                    <span className="mx-2 text-white/40">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column: Contact & Privacy Information */}
          <div className="lg:col-span-5 lg:text-right space-y-2 text-[13px] text-white/80">
            <h4 className="text-[15px] font-bold text-white mb-3">
              Contact & Privacy Information
            </h4>
            <p>
              <Link
                href="https://www.hopkinsmedicine.org/contact"
                className="hover:underline hover:text-white"
              >
                Contact Shilah Medicine
              </Link>
            </p>
            <p className="space-x-2">
              <Link
                href="https://www.hopkinsmedicine.org/patient-care/patients-visitors/billing-insurance/pay-bill/charges-fees"
                className="hover:underline hover:text-white"
              >
                Price Transparency
              </Link>
              <span className="text-white/40">|</span>
              <Link
                href="https://www.hopkinsmedicine.org/patient-care/locations"
                className="hover:underline hover:text-white"
              >
                Patient Care Locations
              </Link>
            </p>
            <p className="space-x-2">
              <Link
                href="https://www.hopkinsmedicine.org/privacy-practices"
                className="hover:underline hover:text-white"
              >
                Notice of Privacy Practices
              </Link>
              <span className="text-white/40">|</span>
              <Link
                href="https://www.hopkinsmedicine.org/privacy-statement"
                className="hover:underline hover:text-white"
              >
                Privacy Statement
              </Link>
            </p>
            <p className="space-x-2">
              <Link
                href="https://www.hopkinsmedicine.org/terms"
                className="hover:underline hover:text-white"
              >
                Terms & Conditions of Use
              </Link>
              <span className="text-white/40">|</span>
              <Link
                href="https://www.hopkinsmedicine.org/non-discrimination"
                className="hover:underline hover:text-white"
              >
                Non-Discrimination Notice
              </Link>
            </p>
            <p>
              <button
                type="button"
                className="hover:underline hover:text-white focus:outline-none"
              >
                Manage Cookie Preferences
              </button>
            </p>

            {/* Social Media Row */}
            <div className="flex items-center lg:justify-end space-x-2 pt-4">
              <Link
                href="https://www.facebook.com/Johns.Hopkins.Medicine"
                className="w-8 h-8 rounded bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com/HopkinsMedicine"
                className="w-8 h-8 rounded bg-black flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="X (formerly Twitter)"
              >
                <span className="font-bold text-sm">𝕏</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/johns-hopkins-medicine"
                className="w-8 h-8 rounded bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/hopkinsmedicine"
                className="w-8 h-8 rounded bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/user/JohnsHopkinsMedicine"
                className="w-8 h-8 rounded bg-[#FF0000] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-8 text-center sm:text-left text-[13px] text-white/60">
          <p>
            Copyright © 2026 Shilah Health System, Shilah Hospital, and Shilah University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
