import React from "react";
import Image from "next/image";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import { Microscope, FlaskConical, Dna, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riset Medis & Inovasi Klinis | Shilah Medicine",
  description:
    "Riset medis dan inovasi klinis terdepan di Shilah Medicine untuk menemukan metode terapi dan pengobatan masa depan.",
};

const researchAreas = [
  {
    icon: Microscope,
    title: "Penelitian Kanker & Onkologi Presisi",
    desc: "Mengembangkan terapi target dan imunoterapi mutakhir untuk mendeteksi serta menghancurkan sel kanker secara selektif.",
  },
  {
    icon: Dna,
    title: "Genomika & Pengobatan Personal",
    desc: "Menganalisis profil genetik pasien untuk menentukan rencana terapi yang tepat dan meminimalkan efek samping obat.",
  },
  {
    icon: FlaskConical,
    title: "Uji Klinis Terapi Kardiovaskular",
    desc: "Studi klinis terkontrol untuk penanganan gagal jantung, intervensi vaskular, dan regenerasi jaringan miokardium.",
  },
  {
    icon: FileText,
    title: "Publikasi Jurnal Ilmiah Internasional",
    desc: "Ratusan artikel ilmiah terindeks global yang diterbitkan oleh para peneliti dan dokter Shilah Medicine setiap tahunnya.",
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero */}
        <section className="relative w-full bg-[#00205B] text-white py-20 sm:py-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/sites/hopkinsmedicine/images/research_hero_bg.jpeg"
              alt="Penelitian dan Riset Laboratorium Shilah Medicine"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Elegant Translucent Blue Overlay */}
          <div className="absolute inset-0 bg-[#002D72]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001D4A]/80 via-[#002D72]/30 to-black/35" />

          {/* Foreground Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 border border-white/30 shadow-md">
              Inovasi Medis Masa Depan
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Riset & Inovasi Medis Shilah
            </h1>
            <p className="text-base sm:text-xl text-white max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Riset adalah pondasi Shilah Medicine untuk menghasilkan wawasan baru, terapi inovatif, dan keselamatan hidup pasien.
            </p>
          </div>
        </section>

        {/* Research Spotlight Section */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111111]">
                Menghubungkan Laboratorium dengan Tempat Tidur Pasien
              </h2>
              <div className="w-14 h-1 bg-[#005566]" />
              <p className="text-[16px] text-[#4b5563] leading-relaxed">
                Di Shilah Medicine, para saintis dan klinisi bekerja berdampingan dalam model riset translasi. Hasil penemuan di laboratorium dapat langsung diaplikasikan ke dalam praktik medis nyata untuk menyelamatkan nyawa pasien dengan penyakit paling kompleks.
              </p>
              <p className="text-[16px] text-[#4b5563] leading-relaxed">
                Melalui kolaborasi dengan universitas kedokteran ternama dunia, kami terus memperluas batas pengetahuan demi menciptakan masa depan kesehatan yang lebih cerah.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/sites/hopkinsmedicine/images/14_researcher-in-lab_jpg.png"
                  alt="Laboratorium penelitian Shilah Medicine"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Research Areas */}
          <div className="pt-10 border-t border-gray-200">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#111111] mb-8 text-center">
              Fokus Riset Unggulan
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchAreas.map((area, idx) => {
                const Icon = area.icon;
                return (
                  <div key={idx} className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-teal-50 text-[#005566] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-[#111111] mb-2">{area.title}</h4>
                    <p className="text-sm text-[#4b5563] leading-relaxed">{area.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
