import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import { Calendar, Tag, ChevronRight, Mail, Newspaper } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pusat Berita & Publikasi Medis | Shilah Medicine",
  description:
    "Berita terkini, liputan riset ilmiah, terobosan teknologi medis, dan siaran pers resmi dari Shilah Medicine.",
};

interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

const articles: Article[] = [
  {
    id: "news-01",
    title: "A Digital 'Twin' for Individualized Cardiology: Era Baru Presisi Jantung",
    date: "10 September 2026",
    category: "Terobosan Riset",
    excerpt:
      "Peneliti Shilah Medicine mengembangkan model komputasi 3D real-time yang memetakan aktivitas kelistrikan organ jantung pasien secara individual untuk akurasi operasi aritmia.",
    image: "/sites/hopkinsmedicine/images/12_digital-twin-heart_jpg.png",
  },
  {
    id: "news-02",
    title: "Fantastic Voyagers: Teknologi Mikrorobot Navigasi Pembuluh Darah",
    date: "28 Agustus 2026",
    category: "Inovasi Biomedis",
    excerpt:
      "Uji coba laboratorium Shilah menghasilkan mikrogripper berkekuatan magnetik yang dapat menghantarkan obat kanker langsung ke inti tumor tanpa merusak jaringan sehat.",
    image: "/sites/hopkinsmedicine/images/11_microgrippers-illustration_jpg.png",
  },
  {
    id: "news-03",
    title: "Mengenali Gejala Gangguan Obsesif-Kompulsif (OCD) pada Anak Sejak Dini",
    date: "15 Agustus 2026",
    category: "Kesehatan Anak",
    excerpt:
      "Psikiater anak Shilah Children's Hospital membagikan panduan bagi orang tua mengenai tanda-tanda kecemasan berulang dan metode penanganan kognitif perilaku.",
    image: "/sites/hopkinsmedicine/images/10_ocd-children_jpg.png",
  },
  {
    id: "news-04",
    title: "Shilah Medicine Meraih Peringkat Tertinggi Akreditasi Mutu Rumah Sakit",
    date: "2 Agustus 2026",
    category: "Prestasi Institusi",
    excerpt:
      "Pencapaian ini mengukuhkan komitmen Shilah dalam mempertahankan standar keselamatan pasien, kebersihan klinis, dan efisiensi penanganan darurat terbaik.",
    image: "/sites/hopkinsmedicine/images/6_us-news-hospital_jpg.png",
  },
  {
    id: "news-05",
    title: "Pengembangan Kurikulum Genomik Baru di Shilah School of Medicine",
    date: "18 Juli 2026",
    category: "Pendidikan Kedokteran",
    excerpt:
      "Mempersiapkan calon dokter masa depan dengan pemahaman mendalam tentang sekuens genom individu dan terapi selular terdepan.",
    image: "/sites/hopkinsmedicine/images/13_som-logo_png.png",
  },
  {
    id: "news-06",
    title: "Program Skrining Jantung Gratis Komunitas Shilah Peduli Sehat",
    date: "05 Juli 2026",
    category: "Pengabdian Masyarakat",
    excerpt:
      "Lebih dari 1.200 warga mendapatkan pemeriksaan rekam jantung (EKG), gula darah, dan konsultasi gaya hidup bersama dokter spesialis Shilah.",
    image: "/sites/hopkinsmedicine/images/hero_bg.jpg",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* Hero Banner */}
        <section className="w-full bg-[#002D72] text-white py-14 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wider uppercase mb-3 border border-white/20">
              Pusat Informasi & Media
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-normal mb-4">
              Pusat Berita & Media Shilah
            </h1>
            <p className="text-base sm:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              Jelajahi berita medis terkini, penemuan riset fundamental, dan artikel edukasi kesehatan yang ditulis langsung oleh para pakar Shilah Medicine.
            </p>
          </div>
        </section>

        {/* Featured Story */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow grid grid-cols-1 lg:grid-cols-12 mb-12">
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[420px] bg-gray-100">
              <Image
                src="/sites/hopkinsmedicine/images/12_digital-twin-heart_jpg.png"
                alt="Digital Twin Jantung"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-xs text-[#0077C8] font-bold uppercase tracking-wider">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Sorotan Utama Riset</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] leading-tight">
                  A Digital &apos;Twin&apos; for Individualized Cardiology
                </h2>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>10 September 2026</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed pt-2">
                  Peneliti Shilah Medicine merevolusi penanganan penyakit kardiovaskular dengan memanfaatkan kembaran digital (digital twin) organ jantung. Simulasi presisi tinggi ini memungkinkan dokter menguji berbagai skenario prosedur intervensi sebelum tindakan bedah dilakukan pada tubuh pasien.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/research"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#0077C8] hover:bg-[#005fa3] text-white text-xs font-semibold rounded-md transition-colors"
                >
                  <span>Baca Selengkapnya</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Grid of Articles */}
          <div className="mb-6">
            <h3 className="font-serif text-2xl font-bold text-[#111111]">
              Kumpulan Artikel & Siaran Pers
            </h3>
            <div className="w-12 h-1 bg-[#FFC20E] mt-2 mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-gray-500">
                      <span className="font-semibold text-[#0077C8]">{art.category}</span>
                      <span>{art.date}</span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-[#111111] leading-snug line-clamp-2">
                      {art.title}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href="/health"
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-[#0077C8] hover:underline"
                  >
                    <span>Baca artikel</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Media Contact Section */}
          <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[#002D72]">
                <Newspaper className="w-5 h-5" />
                <h4 className="font-serif text-lg font-bold">Kontak Humas & Media Massa</h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 max-w-xl leading-relaxed">
                Untuk pertanyaan wawancara narasumber dokter spesialis, izin liputan, atau rilis pers resmi, silakan hubungi tim Media Relations Shilah Medicine.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="mailto:media@shilah.medicine.id"
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#002D72] hover:bg-blue-900 text-white text-xs font-semibold rounded-md transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>media@shilah.medicine.id</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
