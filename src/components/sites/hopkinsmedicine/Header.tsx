"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Menu, X, User } from "lucide-react";

export function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#e2e8f0] shadow-sm">
      {/* Top Main Nav Bar */}
      <div className="w-full flex items-center justify-between px-3 sm:px-8 py-1 h-[68px] sm:h-[82px] lg:h-[86px] bg-[#002D72] text-white">
        {/* Left: Brand Logo */}
        <div className="flex items-center space-x-2 sm:space-x-6 min-w-0">
          <Link
            href="/"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-white rounded py-1 shrink-0"
            aria-label="Shilah Medicine Home"
          >
            <div className="relative w-[130px] sm:w-[194px] h-[46px] sm:h-[70.61px] flex items-center shrink-0">
              <Image
                src="/sites/hopkinsmedicine/images/shilah_logo_transparent.png"
                alt="Shilah Medicine - Kesehatan Anda, Prioritas Kami"
                width={194}
                height={71}
                priority
                className="object-contain object-left w-full h-full"
              />
            </div>
          </Link>

          {/* Menu Button (Desktop) */}
          <button
            onClick={toggleMenu}
            className={`hidden md:flex items-center space-x-2 px-4 py-2 font-medium text-[15px] rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white cursor-pointer ${
              isMenuOpen
                ? "bg-white text-[#002D72]"
                : "text-white hover:bg-[#00388d]"
            }`}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5" />
            <span>Menu</span>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-1.5 sm:space-x-4 md:space-x-6 shrink-0">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center space-x-1 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-[#00388d] rounded focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-4 h-4" />
            <span>Menu</span>
          </button>

          {/* Search Button */}
          <button
            onClick={toggleSearch}
            className={`flex items-center space-x-1 px-2.5 py-1.5 text-xs sm:text-[15px] font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white cursor-pointer ${
              isSearchOpen
                ? "bg-white text-[#002D72]"
                : "text-white hover:bg-[#00388d]"
            }`}
            aria-expanded={isSearchOpen}
            aria-label="Open search form"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Pencarian</span>
          </button>

          {/* MyChart Login */}
          <Link
            href="/mychart"
            className="flex items-center space-x-1 px-2.5 py-1.5 text-xs sm:text-[15px] font-medium text-white hover:bg-[#00388d] rounded border border-white/30 hover:border-white transition-colors shrink-0"
          >
            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Masuk </span>
            <span>MyChart</span>
          </Link>
        </div>
      </div>

      {/* Menu Overlay Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[68px] sm:top-[82px] lg:top-[86px] bottom-0 z-40 bg-black/60 backdrop-blur-[2px] transition-opacity overflow-y-auto">
          <div className="relative w-full max-w-6xl mx-auto bg-white shadow-2xl p-5 sm:p-12 animate-in fade-in slide-in-from-top-4 duration-200">
            {/* Close button */}
            <button
              onClick={closeAll}
              className="absolute top-6 right-6 p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Tutup menu"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Two Column Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-2">
              {/* Column 1 */}
              <div className="space-y-4 md:border-r border-[#FFC20E] md:pr-12">
                <ul className="space-y-3.5 text-[18px] sm:text-[21px] text-[#0077C8] font-normal">
                  <li>
                    <Link
                      href="/health"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Informasi Kesehatan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/som"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Fakultas Kedokteran
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Beranda Shilah Medicine
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/patient-care"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Layanan Pasien
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/research"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Riset & Penelitian
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <ul className="space-y-3.5 text-[18px] sm:text-[21px] text-[#0077C8] font-normal">
                  <li>
                    <Link
                      href="/mychart"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Portal Pasien MyChart
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/appointments"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Jadwalkan Janji Temu
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/doctors"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Cari Dokter Spesialis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/clinical-trials"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Uji Coba Klinis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/billing"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Bayar Tagihan Medis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/employment"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Karir & Lowongan
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay Drawer */}
      {isSearchOpen && (
        <div className="fixed inset-x-0 top-[68px] sm:top-[82px] lg:top-[86px] bottom-0 z-40 bg-black/60 backdrop-blur-[2px] transition-opacity overflow-y-auto">
          <div className="relative w-full max-w-6xl mx-auto bg-white shadow-2xl p-6 sm:p-12 animate-in fade-in slide-in-from-top-4 duration-200">
            <button
              onClick={closeAll}
              className="absolute top-6 right-6 p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Tutup pencarian"
            >
              <X className="w-6 h-6" />
            </button>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  closeAll();
                  router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                }
              }}
              className="space-y-4 max-w-2xl"
            >
              <label
                htmlFor="site-search"
                className="block text-sm font-bold tracking-wider text-gray-800 uppercase"
              >
                Pencarian Layanan & Dokter
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="site-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari berdasarkan kata kunci, nama dokter, atau spesialisasi..."
                  className="flex-1 px-4 py-3 text-base border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:border-[#0077C8]"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#0077C8] hover:bg-[#005fa3] text-white font-medium text-base rounded transition-colors"
                >
                  Cari
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
