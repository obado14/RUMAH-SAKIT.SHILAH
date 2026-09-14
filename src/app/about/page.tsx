import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import {
  ShieldCheck,
  HeartPulse,
  Award,
  Users,
  Calendar,
  Search,
  Eye,
  Target,
  CheckCircle2,
  Stethoscope,
  Layers,
  HeartHandshake,
  Cpu,
  Clock,
  Building,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | Shilah Medicine - Kesehatan Anda, Prioritas Kami",
  description:
    "Mengenal profil Shilah Medicine, visi, misi, nilai utama, dewan kepemimpinan medis, dan dedikasi layanan kesehatan berpusat pada pasien.",
};

// 4 Poin: Mengapa Memilih Shilah Medicine
const whyChooseReasons = [
  {
    icon: Layers,
    title: "Pelayanan Terintegrasi",
    desc: "Sinergi menyeluruh dari pencegahan dini, skrining diagnostik canggih, tindakan bedah mutakhir, hingga program rehabilitasi medik dalam satu sistem layanan terpadu.",
  },
  {
    icon: Stethoscope,
    title: "Tim Profesional Berpengalaman",
    desc: "Didukung oleh jajaran dokter spesialis, konsultan subspesialis, dan perawat terlatih dengan sertifikasi nasional dan internasional yang berdedikasi tinggi.",
  },
  {
    icon: Cpu,
    title: "Teknologi Medis Mutakhir",
    desc: "Peralatan diagnostik presisi tinggi (MRI 3 Tesla, CT 128 Slices, cath lab kardiovaskular, dan ruang bedah berstandar laminar air flow) demi hasil terapi optimal.",
  },
  {
    icon: HeartHandshake,
    title: "Berpusat pada Pasien",
    desc: "Setiap rencana perawatan disusun secara personal dengan memprioritaskan keselamatan, kenyamanan fisik, empati, dan pendampingan keluarga di setiap tahapan.",
  },
];

// Profil Kepemimpinan Medis
const leaders = [
  {
    name: "dr. Adrian Shilah, Sp.JP(K), FIHA",
    role: "Direktur Medis & Pelayanan Klinis",
    image: "/sites/hopkinsmedicine/images/dr_adrian_shilah.jpeg",
    desc: "Dokter konsultan kardiologi intervensi dengan pengalaman lebih dari 18 tahun dalam tata kelola pelayanan klinis dan keselamatan pasien rumah sakit.",
  },
  {
    name: "Prof. Dr. dr. Ratna Shilah, Sp.S(K), FANA",
    role: "Ketua Dewan Medis & Komite Riset",
    image: "/sites/hopkinsmedicine/images/prof_ratna_shilah.jpeg",
    desc: "Guru besar neurologi dan peneliti klinis yang memimpin integrasi inovasi akademik kedokteran dengan protokol perawatan neurovaskular modern.",
  },
  {
    name: "dr. Dewi Anggraini, Sp.PD-KHOM, FINASIM",
    role: "Direktur Mutu & Transformasi Pelayanan",
    image: "/sites/hopkinsmedicine/images/dr_dewi_anggraini.jpeg",
    desc: "Spesialis penyakit dalam konsultan hematologi-onkologi yang berfokus pada standarisasi mutu layanan berstandar internasional dan kepuasan pasien.",
  },
];

// Timeline Milestone Perjalanan
const journeyMilestones = [
  {
    year: "2010",
    title: "Fondasi & Pendirian Layanan Spesialis",
    desc: "Mengawali langkah sebagai klinik spesialis terpadu dengan tekad memberikan pelayanan medis berkualitas tinggi yang menjunjung etika kedokteran.",
    icon: Building,
  },
  {
    year: "2016",
    title: "Pembangunan Rumah Sakit & IGD 24 Jam",
    desc: "Ekspansi fasilitas menjadi rumah sakit umum lengkap dengan kamar rawat inap modern, Instalasi Gawat Darurat (IGD) 24 jam, dan ruang operasi steril.",
    icon: Clock,
  },
  {
    year: "2021",
    title: "Integrasi Riset & Fakultas Kedokteran",
    desc: "Kemitraan strategis dalam pengembangan pendidikan dokter spesialis dan pusat uji coba klinis biomedis untuk percepatan inovasi terapi baru.",
    icon: GraduationCap,
  },
  {
    year: "2026",
    title: "Transformasi Digital & Akreditasi Paripurna",
    desc: "Digitalisasi portal MyChart, adopsi teknologi bedah minimal invasif, serta pengukuhan komitmen keselamatan pasien berstandar global.",
    icon: Award,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* HERO SECTION */}
        <section className="relative w-full bg-[#00205B] text-white py-20 sm:py-28 lg:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/sites/hopkinsmedicine/images/about_hero_bg.png"
              alt="Klinik dan Layanan Medis Shilah Medicine"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Translucent Blue Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001D4A]/85 via-[#002D72]/65 to-[#001D4A]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001433]/85 via-transparent to-black/35" />

          {/* Foreground Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 border border-white/25 shadow-xs">
              Profil Institusi
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Tentang Shilah Medicine
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Kesehatan Anda, Prioritas Kami. Berdedikasi menghadirkan layanan kesehatan unggul, terpercaya, dan berstandar internasional.
            </p>
          </div>
        </section>

        {/* 1. WHO WE ARE (TENTANG SHILAH MEDICINE COMPREHENSIVE) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#0077C8]" />
                  Siapa Kami
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B] leading-tight">
                  Mendedikasikan Layanan Medis Terbaik untuk Setiap Pasien
                </h2>
                <div className="w-16 h-1 bg-[#0077C8] mt-3 mb-5" />
              </div>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <strong>Shilah Medicine</strong> adalah institusi pelayanan kesehatan terpadu yang memadukan keunggulan klinis rumah sakit, pendidikan kedokteran berkelanjutan, serta riset biomedis inovatif. Kami hadir dengan satu komitmen luhur: menempatkan keselamatan, kenyamanan, dan pemulihan pasien di atas segalanya.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
                  <h4 className="font-serif font-bold text-sm text-[#00205B] mb-1 flex items-center gap-1.5">
                    <HeartPulse className="w-4 h-4 text-[#0077C8]" />
                    Pelayanan Berpusat pada Pasien
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Setiap rencana medis dikomunikasikan secara transparan, menjunjung empati, dan menghargai martabat pasien serta keluarga.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-gray-200">
                  <h4 className="font-serif font-bold text-sm text-[#00205B] mb-1 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#0077C8]" />
                    Pendidikan &amp; Riset Klinis
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Bekerja sama erat dengan Fakultas Kedokteran Shilah dalam melatih calon dokter spesialis dan mengembangkan uji klinis terobosan.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-slate-100">
                <Image
                  src="/sites/hopkinsmedicine/images/hero_bg.jpg"
                  alt="Pelayanan penuh kasih di Shilah Medicine"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#00205B] text-white p-5 rounded-2xl shadow-xl border border-white/20 hidden sm:block max-w-[260px]">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-red-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-200">Layanan Siaga</span>
                </div>
                <p className="font-serif text-2xl font-bold text-white">24/7 IGD &amp; ICU</p>
                <p className="text-xs text-gray-300 mt-1 leading-snug">
                  Unit Gawat Darurat &amp; Perawatan Kritis beroperasi penuh setiap saat untuk Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. VISI & MISI */}
        <section className="w-full bg-[#f8fafc] py-14 sm:py-20 border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs mb-2">
                Arah &amp; Komitmen
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B]">
                Visi &amp; Misi Shilah Medicine
              </h2>
              <div className="w-14 h-1 bg-[#0077C8] mx-auto mt-3 mb-3" />
              <p className="text-xs sm:text-sm text-gray-600">
                Komitmen berkelanjutan kami dalam memajukan standar mutu pelayanan kesehatan dan edukasi kedokteran di Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Visi Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#00205B] to-[#002D72] text-white rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-md">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-white mb-5 border border-white/20">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-300">Visi Institusi</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1 mb-4 leading-snug">
                    Pusat Rujukan Kesehatan Unggul Berstandar Global
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light">
                    Menjadi pusat rujukan pelayanan kesehatan terkemuka yang unggul dalam integrasi layanan klinis paripurna, riset biomedis inovatif, dan pendidikan kedokteran berstandar internasional.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/20 text-xs text-blue-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Berlandaskan integritas, sains, dan kemanusiaan</span>
                </div>
              </div>

              {/* Misi Card */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077C8] flex items-center justify-center mb-5">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0077C8]">Misi Kami</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#00205B] mt-1 mb-5 leading-snug">
                    Empat Pilar Pengabdian untuk Pasien &amp; Masyarakat
                  </h3>

                  <div className="space-y-3.5">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-[#002D72] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        1
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        <strong>Pelayanan Paripurna:</strong> Menyelenggarakan pelayanan medis berpusat pada pasien yang memprioritaskan keselamatan, empati, dan mutu hidup (*Patient-Centered Care*).
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-[#002D72] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        2
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        <strong>Pendidikan Berkualitas:</strong> Mengembangkan pendidikan kedokteran spesialis dan tenaga kesehatan berkelanjutan yang berintegritas dan berkompetensi tinggi.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-[#002D72] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        3
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        <strong>Riset &amp; Inovasi:</strong> Mendorong penemuan ilmiah dan uji klinis translasi yang menghasilkan terapi medis inovatif bagi kesembuhan pasien.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-[#002D72] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        4
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                        <strong>Akses Inklusif:</strong> Membangun sistem pelayanan yang transparan dan memperluas kemudahan akses kesehatan bermutu bagi seluruh lapisan masyarakat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHY SHILAH MEDICINE (MENGAPA MEMILIH SHILAH MEDICINE?) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
              Dedikasi Pelayanan
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B]">
              Mengapa Memilih Shilah Medicine?
            </h2>
            <div className="w-14 h-1 bg-[#0077C8] mx-auto mt-3 mb-3" />
            <p className="text-xs sm:text-sm text-gray-600">
              Fokus kami adalah menghadirkan kenyamanan, kepastian penanganan, dan hasil pemulihan medis terbaik bagi setiap individu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseReasons.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-[#0077C8] transition-all flex flex-col justify-start text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077C8] flex items-center justify-center mb-4">
                    <ItemIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#00205B] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* NILAI-NILAI UTAMA (PRESERVED PER RULE) */}
        <section className="bg-[#f8fafc] py-14 sm:py-20 border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs mb-2">
                Prinsip Dasar
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B]">
                Nilai-Nilai Utama Kami
              </h2>
              <div className="w-14 h-1 bg-[#0077C8] mx-auto mt-3 mb-3" />
              <p className="text-xs sm:text-sm text-gray-600">
                Prinsip dasar yang memandu setiap langkah tenaga medis dan staf Shilah Medicine dalam melayani Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077C8] flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Keunggulan Klinis</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Menjaga standar kualitas medis tertinggi dengan landasan bukti ilmiah teruji dan teknologi perawatan mutakhir.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077C8] flex items-center justify-center mb-4">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Kepedulian Tulus</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Memperlakukan setiap pasien dengan rasa empati mendalam, kesabaran, keramahan, dan penghormatan martabat manusia.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077C8] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Integritas &amp; Keamanan</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Memprioritaskan keselamatan pasien, transparansi tindakan medis, serta perlindungan ketat kerahasiaan rekam medis.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-2xs hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077C8] flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Kolaborasi Tim</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Sinergi multidisiplin antar dokter spesialis, perawat, dan tenaga penunjang untuk solusi perawatan paling komprehensif.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. LEADERSHIP (KEPEMIMPINAN SHILAH MEDICINE) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
              Struktur Manajemen &amp; Dewan Medis
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B]">
              Kepemimpinan Shilah Medicine
            </h2>
            <div className="w-14 h-1 bg-[#0077C8] mx-auto mt-3 mb-3" />
            <p className="text-xs sm:text-sm text-gray-600">
              Dipimpin oleh praktisi kedokteran senior dan akademisi yang berdedikasi mengawal integritas pelayanan dan inovasi medis berkelanjutan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#0077C8]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-[260px] sm:h-[280px] bg-slate-100 overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[11px] font-semibold bg-[#0077C8] px-2.5 py-0.5 rounded-full">
                        Dewan Eksekutif
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900 leading-snug mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#0077C8] mb-3">
                      {leader.role}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {leader.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 pt-0">
                  <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-400">
                    Kemitraan Klinis &amp; Tata Kelola Medis
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. OUR JOURNEY (PERJALANAN SHILAH MEDICINE) */}
        <section className="w-full bg-[#f8fafc] py-14 sm:py-20 border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs mb-2">
                Tonggak Perkembangan
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B]">
                Perjalanan Shilah Medicine
              </h2>
              <div className="w-14 h-1 bg-[#0077C8] mx-auto mt-3 mb-3" />
              <p className="text-xs sm:text-sm text-gray-600">
                Milestone dedikasi kami dari tahun ke tahun dalam memperluas jangkauan dan memajukan mutu perawatan kesehatan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {journeyMilestones.map((m, idx) => {
                const MIcon = m.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-[#0077C8]/60 transition-all flex flex-col justify-between relative"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold font-serif text-[#0077C8]">
                          {m.year}
                        </span>
                        <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0077C8] flex items-center justify-center">
                          <MIcon className="w-4 h-4" />
                        </div>
                      </div>
                      <h3 className="font-serif text-base font-bold text-gray-900 mb-2 leading-snug">
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-400 font-medium">
                      Fase {idx + 1} Perkembangan Institusi
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. IMPACT & KOMITMEN LAYANAN (REFINED FROM RAW STATS TO IMPACT STATEMENTS) */}
        <section className="w-full bg-[#00205B] text-white py-14 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                Standar Mutu &amp; Kesiapsiagaan
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Komitmen Nyata Pelayanan Shilah Medicine
              </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFC20E]">24/7</p>
                <p className="text-xs sm:text-sm text-white/90 font-medium mt-1">Siaga Gawat Darurat</p>
                <p className="text-[11px] text-gray-300 mt-0.5">Armada ambulans &amp; dokter IGD siap setiap saat</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFC20E]">30+</p>
                <p className="text-xs sm:text-sm text-white/90 font-medium mt-1">Poliklinik Spesialis</p>
                <p className="text-[11px] text-gray-300 mt-0.5">Layanan subspesialisasi klinis terpadu</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFC20E]">Paripurna</p>
                <p className="text-xs sm:text-sm text-white/90 font-medium mt-1">Standar Akreditasi</p>
                <p className="text-[11px] text-gray-300 mt-0.5">Kepatuhan ketat terhadap keselamatan pasien</p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFC20E]">Terpadu</p>
                <p className="text-xs sm:text-sm text-white/90 font-medium mt-1">Ekosistem Medis &amp; Riset</p>
                <p className="text-[11px] text-gray-300 mt-0.5">Integrasi rumah sakit, pendidikan, dan laboratorium</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PATIENT-FOCUSED CTA SECTION */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-8 sm:p-12 shadow-xs">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-3">
              Konsultasi &amp; Penjadwalan
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B] mb-3">
              Siap Berkonsultasi dengan Tim Dokter Shilah?
            </h2>
            <p className="text-xs sm:text-base text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
              Jadwalkan konsultasi dokter spesialis atau dapatkan panduan layanan kesehatan terbaik sesuai kebutuhan medis Anda dan keluarga.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
              <Link
                href="/doctors"
                className="px-6 py-3 bg-white border border-gray-300 hover:border-[#0077C8] hover:bg-gray-50 text-[#00205B] font-semibold text-xs sm:text-sm rounded-xl shadow-2xs transition-all flex items-center gap-2"
              >
                <Search className="w-4 h-4 text-[#0077C8]" />
                <span>Cari Dokter</span>
              </Link>
              <Link
                href="/appointments"
                className="px-6 py-3 bg-[#0077C8] hover:bg-[#005a99] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Jadwalkan Janji Temu</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
