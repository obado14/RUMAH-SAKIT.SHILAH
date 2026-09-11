"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("jhm_cookie_consent");
    if (!accepted) {
      // Show after brief delay
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("jhm_cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie Preferences"
      className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-300 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] p-4 sm:p-6 animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left: Icon and Text */}
        <div className="flex items-start space-x-4">
          <div className="shrink-0 mt-0.5">
            <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#002D72]">
              <ShieldAlert className="w-6 h-6 text-[#002D72]" />
            </div>
          </div>

          <div className="space-y-1 text-sm text-[#333333]">
            <h4 className="font-bold text-base text-[#111111]">
              Cookie Preferences
            </h4>
            <p className="leading-relaxed">
              By clicking &ldquo;Accept All Cookies&rdquo;, you agree to storing
              cookies on your device to enhance your browsing experience, provide
              website traffic analytics, and assist in our marketing efforts. You
              may also customize your cookie settings at any time or learn more
              about how we use cookies by visiting our{" "}
              <Link
                href="https://www.hopkinsmedicine.org/privacy-statement"
                className="text-[#0077C8] underline font-medium"
              >
                privacy statement
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-4 shrink-0 self-end md:self-center">
          <button
            onClick={() => setIsVisible(false)}
            className="text-sm font-semibold text-[#002D72] hover:underline px-3 py-2"
          >
            Cookies Settings
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2.5 bg-[#002D72] hover:bg-[#001f52] text-white font-semibold text-sm rounded shadow-sm transition-colors"
          >
            Accept All Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
