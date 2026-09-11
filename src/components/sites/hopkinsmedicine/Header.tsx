"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X, User } from "lucide-react";

export function Header() {
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
      <div className="w-full flex items-center justify-between px-4 sm:px-8 py-0 h-[64px] lg:h-[72px] bg-[#002D72] text-white">
        {/* Left: Brand Logo */}
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-white rounded py-1"
            aria-label="Shilah Medicine Home"
          >
            <div className="relative w-[210px] sm:w-[260px] h-[52px] flex items-center">
              <Image
                src="/sites/hopkinsmedicine/images/shilah_logo_transparent.png"
                alt="Shilah Medicine - Kesehatan Anda, Prioritas Kami"
                width={260}
                height={52}
                priority
                className="object-contain object-left max-h-full"
              />
            </div>
          </Link>

          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className={`hidden md:flex items-center space-x-2 px-4 py-2 font-medium text-[15px] rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
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
        <div className="flex items-center space-x-3 sm:space-x-6">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center space-x-1.5 px-3 py-1.5 text-sm font-medium text-white hover:bg-[#00388d] rounded focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5" />
            <span>Menu</span>
          </button>

          {/* Search Button */}
          <button
            onClick={toggleSearch}
            className={`flex items-center space-x-1.5 px-3 py-1.5 text-[15px] font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
              isSearchOpen
                ? "bg-white text-[#002D72]"
                : "text-white hover:bg-[#00388d]"
            }`}
            aria-expanded={isSearchOpen}
            aria-label="Open search form"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Search</span>
          </button>

          {/* MyChart Login */}
          <Link
            href="https://www.hopkinsmedicine.org/patient-care/mychart"
            className="flex items-center space-x-1.5 px-3 py-1.5 text-[14px] sm:text-[15px] font-medium text-white hover:bg-[#00388d] rounded border border-white/30 hover:border-white transition-colors"
          >
            <User className="w-4 h-4" />
            <span>MyChart Login</span>
          </Link>
        </div>
      </div>

      {/* Menu Overlay Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[64px] lg:top-[72px] bottom-0 z-40 bg-black/60 backdrop-blur-[2px] transition-opacity">
          <div className="relative w-full max-w-6xl mx-auto bg-white shadow-2xl p-6 sm:p-12 animate-in fade-in slide-in-from-top-4 duration-200">
            {/* Close button */}
            <button
              onClick={closeAll}
              className="absolute top-6 right-6 p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
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
                      href="https://www.hopkinsmedicine.org/health"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.hopkinsmedicine.org/som"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      School of Medicine
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.hopkinsmedicine.org/"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Johns Hopkins Medicine Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.hopkinsmedicine.org/about"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.hopkinsmedicine.org/patient-care"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Patient Care
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.hopkinsmedicine.org/research"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Research
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                <ul className="space-y-3.5 text-[18px] sm:text-[21px] text-[#0077C8] font-normal">
                  <li>
                    <Link
                      href="https://www.hopkinsmedicine.org/patient-care/mychart"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      MyChart
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.hopkinsmedicine.org/patient-care/johns-hopkins-medicine-request-appointment"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Schedule an Appointment
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.hopkinsmedicine.org/profiles"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Find a Doctor
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.hopkinsmedicine.org/clinical-trials"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Find a Clinical Trial
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.hopkinsmedicine.org/patient-care/patients-visitors/billing-insurance/pay-bill"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Pay Your Bill
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.hopkinsmedicine.org/employment"
                      onClick={closeAll}
                      className="hover:underline hover:text-[#002D72] transition-colors"
                    >
                      Employment
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
        <div className="fixed inset-x-0 top-[64px] lg:top-[72px] bottom-0 z-40 bg-black/60 backdrop-blur-[2px] transition-opacity">
          <div className="relative w-full max-w-6xl mx-auto bg-white shadow-2xl p-8 sm:p-12 animate-in fade-in slide-in-from-top-4 duration-200">
            <button
              onClick={closeAll}
              className="absolute top-6 right-6 p-2 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close search"
            >
              <X className="w-6 h-6" />
            </button>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  window.location.href = `https://www.hopkinsmedicine.org/search?q=${encodeURIComponent(
                    searchQuery
                  )}`;
                }
              }}
              className="space-y-4 max-w-2xl"
            >
              <label
                htmlFor="site-search"
                className="block text-sm font-bold tracking-wider text-gray-800 uppercase"
              >
                Search
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="site-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by keyword or a provider's name"
                  className="flex-1 px-4 py-3 text-base border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:border-[#0077C8]"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#0077C8] hover:bg-[#005fa3] text-white font-medium text-base rounded transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
