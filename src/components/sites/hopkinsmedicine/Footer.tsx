"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail, Globe, ExternalLink } from "lucide-react";

export function Footer() {
  const [selectedLang, setSelectedLang] = useState("id");

  return (
    <footer className="w-full bg-[#001733] text-white pt-14 pb-12 mt-16 border-t-4 border-[#002D72]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand + Emergency Fast Hotline Card */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-10 border-b border-white/15">
          <Link href="/" className="inline-block" aria-label="Shilah Medicine">
            <div className="relative w-[150px] sm:w-[200px] h-[52px] sm:h-[72px]">
              <Image
                src="/sites/hopkinsmedicine/images/shilah_logo_transparent.png"
                alt="Shilah Medicine - Kesehatan Anda, Prioritas Kami"
                width={200}
                height={72}
                className="object-contain object-left w-full h-full"
              />
            </div>
          </Link>

          {/* Emergency & Appointment Quick Action Strip */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full lg:w-auto">
            <a
              href="tel:021500911"
              className="flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 animate-pulse" />
              <span>IGD 24/7: (021) 500-911</span>
            </a>
            <a
              href="tel:021500900"
              className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors border border-white/15"
            >
              <Phone className="w-4 h-4 text-blue-300" />
              <span>Call Center: (021) 500-900</span>
            </a>
            <Link
              href="/#appointment-wizard"
              className="flex items-center gap-2 bg-[#0077C8] hover:bg-[#005a99] text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors ml-auto lg:ml-0"
            >
              <span>Buat Janji Online</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 5 Organized Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-10 border-b border-white/15 text-sm">
          {/* Col 1: Layanan Pasien */}
          <div>
            <h4 className="text-white font-serif font-bold text-sm sm:text-base mb-4 tracking-wide text-[#80bdff]">
              Layanan Pasien
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="/#find-doctor" className="hover:text-white hover:underline transition-colors">
                  Cari Dokter Spesialis
                </Link>
              </li>
              <li>
                <Link href="/#appointment-wizard" className="hover:text-white hover:underline transition-colors">
                  Buat Janji Konsultasi
                </Link>
              </li>
              <li>
                <Link href="/mychart" className="hover:text-white hover:underline transition-colors">
                  Portal Pasien MyChart
                </Link>
              </li>
              <li>
                <Link href="/#emergency-care" className="hover:text-white hover:underline transition-colors">
                  Gawat Darurat &amp; IGD 24 Jam
                </Link>
              </li>
              <li>
                <Link href="/health" className="hover:text-white hover:underline transition-colors">
                  Panduan Informasi Kesehatan
                </Link>
              </li>
              <li>
                <Link href="/billing" className="hover:text-white hover:underline transition-colors">
                  Transparansi Biaya &amp; Asuransi
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Lokasi & Fasilitas */}
          <div>
            <h4 className="text-white font-serif font-bold text-sm sm:text-base mb-4 tracking-wide text-[#80bdff]">
              Lokasi &amp; Fasilitas
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="/locations" className="hover:text-white hover:underline transition-colors">
                  RS Shilah Central Jakarta
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white hover:underline transition-colors">
                  Shilah Children&apos;s Center
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white hover:underline transition-colors">
                  Klinik Spesialis Thamrin
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white hover:underline transition-colors">
                  Pusat Diagnostik BSD
                </Link>
              </li>
              <li>
                <Link href="/#hospital-facilities" className="hover:text-white hover:underline transition-colors">
                  Fasilitas &amp; Kamar Rawat
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white hover:underline transition-colors">
                  Semua Jaringan Fasilitas &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Akademik & Riset */}
          <div>
            <h4 className="text-white font-serif font-bold text-sm sm:text-base mb-4 tracking-wide text-[#80bdff]">
              Akademik &amp; Riset
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="/som" className="hover:text-white hover:underline transition-colors">
                  Fakultas Kedokteran Shilah
                </Link>
              </li>
              <li>
                <Link href="/som#programs" className="hover:text-white hover:underline transition-colors">
                  Pendidikan Dokter Spesialis (PPDS)
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-white hover:underline transition-colors">
                  Riset Biomedis &amp; Terapi
                </Link>
              </li>
              <li>
                <Link href="/clinical-trials" className="hover:text-white hover:underline transition-colors">
                  Partisipasi Uji Klinis
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-white hover:underline transition-colors">
                  Publikasi &amp; Jurnal Ilmiah
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Tentang Shilah */}
          <div>
            <h4 className="text-white font-serif font-bold text-sm sm:text-base mb-4 tracking-wide text-[#80bdff]">
              Tentang Shilah
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors">
                  Profil &amp; Visi Institusi
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors">
                  Akreditasi &amp; Komitmen Mutu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors">
                  Dewan Medis &amp; Pimpinan
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white hover:underline transition-colors">
                  Berita &amp; Siaran Pers
                </Link>
              </li>
              <li>
                <Link href="/employment" className="hover:text-white hover:underline transition-colors">
                  Karir Tenaga Medis &amp; Staf
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-colors">
                  Hubungi Kantor Manajemen
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Kontak & Darurat */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-serif font-bold text-sm sm:text-base mb-4 tracking-wide text-[#80bdff]">
              Kontak &amp; Layanan
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Jl. Kesehatan Raya No. 12-14, Jakarta Pusat 10160
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@shilahmedicine.id" className="hover:text-white hover:underline">
                  info@shilahmedicine.id
                </a>
              </div>
              <div className="pt-2">
                <span className="text-xs text-gray-400 block mb-2">Ikuti Saluran Resmi:</span>
                <div className="flex items-center space-x-2">
                  <Link
                    href="https://www.facebook.com/"
                    className="w-7 h-7 rounded bg-[#1877F2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    aria-label="Facebook Shilah Medicine"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://twitter.com/"
                    className="w-7 h-7 rounded bg-black flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    aria-label="X Shilah Medicine"
                  >
                    <span className="font-bold text-xs">𝕏</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/"
                    className="w-7 h-7 rounded bg-[#0A66C2] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    aria-label="LinkedIn Shilah Medicine"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/"
                    className="w-7 h-7 rounded bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    aria-label="Instagram Shilah Medicine"
                  >
                    <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.youtube.com/"
                    className="w-7 h-7 rounded bg-[#FF0000] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                    aria-label="YouTube Shilah Medicine"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Language Selector Strip */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#80bdff]" />
            <span className="font-semibold text-white">Layanan Bahasa Internasional:</span>
            <span>Tersedia penerjemah medis resmi untuk pasien mancanegara.</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md border border-white/15">
              <label htmlFor="lang-select" className="text-gray-300 text-[11px]">Bahasa:</label>
              <select
                id="lang-select"
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
                className="bg-transparent text-white text-xs font-medium focus:outline-none cursor-pointer"
              >
                <option value="id" className="text-gray-900">Bahasa Indonesia</option>
                <option value="en" className="text-gray-900">English</option>
                <option value="zh" className="text-gray-900">繁體中文 (Chinese)</option>
                <option value="ar" className="text-gray-900">العربية (Arabic)</option>
                <option value="ja" className="text-gray-900">日本語 (Japanese)</option>
              </select>
            </div>
            <Link
              href="/about#language-assistance"
              className="text-[#80bdff] hover:underline font-medium"
            >
              Info Bantuan Penerjemah &rarr;
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Policies & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center md:text-left">
            Hak Cipta &copy; 2026 Shilah Health System, Rumah Sakit Shilah, dan Fakultas Kedokteran Shilah. Seluruh hak cipta dilindungi undang-undang.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href="/billing" className="hover:text-white hover:underline transition-colors">
              Transparansi Biaya
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/privacy" className="hover:text-white hover:underline transition-colors">
              Kebijakan Privasi Pasien
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="hover:text-white hover:underline transition-colors">
              Syarat &amp; Ketentuan
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/patient-care" className="hover:text-white hover:underline transition-colors">
              Hak &amp; Tanggung Jawab Pasien
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
