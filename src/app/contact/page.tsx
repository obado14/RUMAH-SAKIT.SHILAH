import React from "react";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import { Phone, Mail, MapPin, Clock, MessageSquare, Ambulance } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami | Shilah Medicine - Layanan 24 Jam",
  description:
    "Hubungi pusat layanan pelanggan, IGD 24 Jam, dan bagian informasi Shilah Medicine.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        <section className="w-full bg-[#002D72] text-white py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-serif text-3xl sm:text-5xl font-normal mb-3">
              Hubungi Shilah Medicine
            </h1>
            <p className="text-base sm:text-lg text-white/90 font-light max-w-xl mx-auto">
              Kami siap melayani kebutuhan informasi dan perawatan kesehatan Anda 24 jam sehari, 7 hari seminggu.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                <Ambulance className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-red-600 mb-1">Gawat Darurat (IGD 24 Jam)</h3>
              <p className="text-xs text-gray-500 mb-3">Siaga darurat trauma & ambulans</p>
              <a href="tel:021500911" className="text-lg font-bold text-red-700 hover:underline">
                (021) 500-911
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-[#0077C8] flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#002D72] mb-1">Call Center Informasi</h3>
              <p className="text-xs text-gray-500 mb-3">Janji temu dokter & informasi umum</p>
              <a href="tel:021500740" className="text-lg font-bold text-[#0077C8] hover:underline">
                (021) 500-740
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 text-[#25D366] flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#111111] mb-1">WhatsApp Customer Care</h3>
              <p className="text-xs text-gray-500 mb-3">Layanan chat respon cepat</p>
              <a
                href="https://wa.me/628111223344"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#25D366] hover:underline"
              >
                +62 811-1223-344
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-[#111111] mb-4">
              Kantor Pusat & Rumah Sakit Utama
            </h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Shilah Medicine Central Hospital</strong>
                  <br />
                  Jl. Shilah Medika No. 101, Cilandak, Jakarta Selatan 12430, DKI Jakarta, Indonesia
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#0077C8] shrink-0" />
                <span>info@shilah.medicine.id | patientcare@shilah.medicine.id</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Poliklinik Buka Setiap Hari: 08:00 - 20:00 WIB</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
