import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sites/hopkinsmedicine/Header";
import { Footer } from "@/components/sites/hopkinsmedicine/Footer";
import { CookieBanner } from "@/components/sites/hopkinsmedicine/CookieBanner";
import {
  Clock,
  Phone,
  CalendarCheck,
  ChevronRight,
  Calendar,
  Search,
  BedDouble,
  Stethoscope,
  Activity,
  Microscope,
  Accessibility,
  CreditCard,
  ShieldCheck,
  FileText,
  BookOpen,
  Smartphone,
  MapPin,
  Car,
  FileCheck,
  HeartPulse,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan & Perawatan Pasien | Shilah Medicine",
  description:
    "Layanan perawatan medis komprehensif, rawat inap, IGD 24 jam, panduan sebelum kedatangan, dan informasi praktis pasien di Shilah Medicine.",
};

interface CareService {
  icon: React.ElementType;
  title: string;
  desc: string;
  cta: string;
  href: string;
}

const careServices: CareService[] = [
  {
    icon: HeartPulse,
    title: "Unit Gawat Darurat (IGD) 24 Jam",
    desc: "Penanganan medis darurat cepat tanggap oleh tim dokter spesialis emergensi dan perawat terlatih dengan fasilitas triage canggih.",
    cta: "Layanan IGD 24 Jam",
    href: "#emergency-care",
  },
  {
    icon: BedDouble,
    title: "Rawat Inap & Kamar Perawatan",
    desc: "Ruang rawat inap nyaman dari kelas standar hingga suite VIP dengan pengawasan medis intensif dan sistem panggilan perawat digital.",
    cta: "Fasilitas Rawat Inap",
    href: "/#hospital-facilities",
  },
  {
    icon: Stethoscope,
    title: "Poliklinik Rawat Jalan Spesialis",
    desc: "Konsultasi rawat jalan dengan lebih dari 30 poliklinik spesialis dan subspesialis untuk penanganan penyakit secara terarah.",
    cta: "Jadwal Poliklinik",
    href: "/doctors",
  },
  {
    icon: Activity,
    title: "Bedah Sentral & Minimal Invasif",
    desc: "Ruang operasi modern berstandar laminar air flow untuk operasi laparoskopi, bedah jantung, ortopedi, dan bedah saraf.",
    cta: "Layanan Bedah",
    href: "/appointments",
  },
  {
    icon: Microscope,
    title: "Pusat Diagnostik & Laboratorium",
    desc: "MRI 3T, CT Scan 128 Slices, USG 4D, dan laboratorium patologi klinik dengan hasil presisi dan cepat.",
    cta: "Layanan Diagnostik",
    href: "/locations",
  },
  {
    icon: Accessibility,
    title: "Rehabilitasi Medik & Fisioterapi",
    desc: "Pemulihan pasca operasi, stroke, dan cedera olahraga dengan bimbingan fisioterapis profesional dan peralatan modern.",
    cta: "Fisioterapi & Rehab",
    href: "/appointments",
  },
];

interface PatientResource {
  icon: React.ElementType;
  title: string;
  desc: string;
  cta: string;
  href: string;
}

const patientResources: PatientResource[] = [
  {
    icon: Smartphone,
    title: "Portal Pasien / MyChart",
    desc: "Akses informasi hasil laboratorium, riwayat resep, dan jadwal konsultasi medis Anda secara online kapan saja.",
    cta: "Masuk MyChart →",
    href: "/mychart",
  },
  {
    icon: CreditCard,
    title: "Pembayaran & Tagihan",
    desc: "Transparansi rincian estimasi biaya perawatan medis, opsi cicilan, serta panduan administrasi pembayaran tanpa kendala.",
    cta: "Info Tagihan & Biaya →",
    href: "/billing",
  },
  {
    icon: ShieldCheck,
    title: "BPJS & Asuransi",
    desc: "Kemudahan proses verifikasi klaim langsung (cashless) untuk BPJS Kesehatan dan lebih dari 50 asuransi rekanan terpercaya.",
    cta: "Cek Asuransi Rekanan →",
    href: "/billing",
  },
  {
    icon: Calendar,
    title: "Jadwal Dokter",
    desc: "Temukan jadwal praktik lengkap dokter spesialis dan subspesialis di seluruh jaringan rumah sakit Shilah Medicine.",
    cta: "Cari Jadwal Dokter →",
    href: "/doctors",
  },
  {
    icon: FileText,
    title: "Rekam Medis",
    desc: "Panduan pengajuan salinan resume medis resmi pasien, surat keterangan dokter, dan formulir klaim asuransi mandiri.",
    cta: "Layanan Rekam Medis →",
    href: "/contact",
  },
  {
    icon: BookOpen,
    title: "Panduan Pasien",
    desc: "Informasi hak & kewajiban pasien, tata tertib kunjungan ruang rawat, serta fasilitas pendukung kenyamanan keluarga.",
    cta: "Baca Panduan Pasien →",
    href: "#sebelum-anda-datang",
  },
];

const preparationSteps = [
  {
    icon: FileCheck,
    title: "Dokumen yang Perlu Dibawa",
    desc: "KTP/Paspor/Kartu Identitas Anak, kartu BPJS Kesehatan atau kartu asuransi rekanan aktif, surat rujukan faskes (bila ada), dan dokumen riwayat medis sebelumnya.",
  },
  {
    icon: CheckCircle2,
    title: "Persiapan Pemeriksaan",
    desc: "Berpuasa 8–10 jam bila dijadwalkan pemeriksaan profil lipid atau gula darah puasa. Catat riwayat alergi dan obat-obatan yang sedang dikonsumsi rutin.",
  },
  {
    icon: CreditCard,
    title: "Informasi Pembayaran / Asuransi",
    desc: "Loket verifikasi asuransi dan pendaftaran mandiri (KiosK) tersedia di lobi utama. Kami menerima kartu asuransi cashless, kartu debit/kredit, tunai, dan QRIS.",
  },
  {
    icon: Clock,
    title: "Waktu Kedatangan",
    desc: "Disarankan hadir 15–30 menit sebelum jam konsultasi dokter untuk konfirmasi berkas administrasi dan pemeriksaan tanda-tanda vital awal perawat.",
  },
  {
    icon: Car,
    title: "Informasi Parkir & Aksesibilitas",
    desc: "Gedung parkir aman bertingkat 24 jam dengan sistem tiket digital. Layanan Valet Parking gratis di lobi utama dan kursi roda tersedia di drop-off.",
  },
  {
    icon: MapPin,
    title: "Panduan Lokasi & Denah Gedung",
    desc: "Papan petunjuk interaktif dan petugas Duta Pasien siap memandu rute menuju poliklinik spesialis, laboratorium, apotek, maupun ruang rawat inap Anda.",
  },
];

export default function PatientCarePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#333333]">
      <Header />

      <main className="flex-1 w-full">
        {/* 1. HERO SECTION */}
        <section className="relative w-full bg-[#00205B] text-white py-16 sm:py-24 lg:py-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/sites/hopkinsmedicine/images/patient_care_hero_bg.jpeg"
              alt="Perawatan Pasien Shilah Medicine"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          {/* Elegant Translucent Blue Overlay */}
          <div className="absolute inset-0 bg-[#002D72]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001733]/90 via-[#002D72]/40 to-black/40" />

          {/* Foreground Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
            {/* Elegant Emergency 24/7 Access Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/90 text-white text-xs font-semibold tracking-wider uppercase mb-5 border border-red-400/40 shadow-sm backdrop-blur-xs">
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>Emergency Care 24/7: (021) 500-911</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold mb-5 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Layanan Pasien di Shilah Medicine
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-2xl mx-auto font-normal leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              Pelayanan berfokus pada keselamatan, kenyamanan, dan pemulihan optimal bagi Anda dan keluarga tercinta.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/appointments"
                className="px-6 py-3 bg-[#0077C8] hover:bg-[#005a99] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Buat Janji</span>
              </Link>
              <Link
                href="/doctors"
                className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors backdrop-blur-xs border border-white/30 flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Cari Dokter</span>
              </Link>
              <a
                href="#emergency-care"
                className="px-5 py-3 bg-red-600/30 hover:bg-red-600/50 text-white text-xs sm:text-sm font-medium rounded-xl transition-colors border border-red-400/30 flex items-center gap-1.5"
              >
                <span>Info Darurat / IGD</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* 3. EMERGENCY CARE 24/7 HIGHLIGHT SECTION */}
        <section id="emergency-care" className="w-full bg-[#001733] text-white py-8 border-b-4 border-red-600">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
                <HeartPulse className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-1">
                <div className="inline-block text-[11px] font-bold tracking-wider uppercase text-red-400">
                  Respon Cepat Tanggap Medis
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Emergency Care 24/7
                </h2>
                <p className="text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed">
                  Unit Gawat Darurat RS Shilah siaga 24 jam setiap hari dengan dokter spesialis emergensi, armada ambulans gawat darurat, dan fasilitas resusitasi mutakhir.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full md:w-auto">
              <a
                href="tel:021500911"
                className="flex-1 md:flex-none px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Hubungi IGD: (021) 500-911</span>
              </a>
              <Link
                href="/locations"
                className="flex-1 md:flex-none px-4 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium rounded-xl transition-colors border border-white/20 text-center"
              >
                Lokasi IGD Terdekat
              </Link>
            </div>
          </div>
        </section>

        {/* 2. LAYANAN MEDIS UTAMA (6 cards maintained & enhanced) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
              Keunggulan Fasilitas Medis
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B]">
              Layanan Medis Utama
            </h2>
            <div className="w-14 h-1 bg-[#0077C8] mx-auto mt-3 mb-3" />
            <p className="text-xs sm:text-sm text-gray-600">
              Menghadirkan pelayanan kesehatan komprehensif didukung teknologi kedokteran terkini dan tenaga medis berpengalaman.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careServices.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 hover:shadow-lg hover:border-[#0077C8] transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden"
                >
                  <div>
                    {/* Consistent SVG Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0077C8] group-hover:bg-[#0077C8] group-hover:text-white flex items-center justify-center transition-colors shadow-2xs mb-5">
                      <ServiceIcon className="w-6 h-6" />
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#0077C8] transition-colors mb-2.5 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  {/* Clear CTA Button */}
                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#0077C8] group-hover:text-[#00205B] group-hover:translate-x-0.5 transition-all"
                    >
                      <span>{service.cta}</span>
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. PATIENT RESOURCES (Semua yang Anda Butuhkan sebagai Pasien) */}
        <section className="w-full bg-[#f8fafc] border-y border-gray-200/80 py-14 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-white px-3 py-1 rounded-full border border-gray-200 shadow-2xs mb-2">
                Akses Layanan Cepat
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B]">
                Semua yang Anda Butuhkan sebagai Pasien
              </h2>
              <div className="w-14 h-1 bg-[#0077C8] mx-auto mt-3 mb-3" />
              <p className="text-xs sm:text-sm text-gray-600">
                Pusat informasi terintegrasi untuk mendukung kenyamanan administrasi, jadwal dokter, dan pemulihan kesehatan Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {patientResources.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-6 hover:shadow-md hover:border-[#0077C8]/70 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#0077C8] flex items-center justify-center mb-4">
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <Link
                        href={item.href}
                        className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#0077C8] hover:text-[#00205B] transition-colors"
                      >
                        <span>{item.cta}</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. SEBELUM ANDA DATANG */}
        <section id="sebelum-anda-datang" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0077C8] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
              Panduan Kunjungan Rumah Sakit
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B]">
              Sebelum Anda Datang
            </h2>
            <div className="w-14 h-1 bg-[#0077C8] mx-auto mt-3 mb-3" />
            <p className="text-xs sm:text-sm text-gray-600">
              Persiapan praktis untuk memastikan kenyamanan, keamanan, dan kelancaran proses kunjungan Anda di seluruh jejaring Shilah Medicine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
            {preparationSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 hover:shadow-sm hover:border-[#0077C8]/40 transition-all flex flex-col justify-start"
                >
                  <div className="flex items-center gap-3 mb-3.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0077C8] flex items-center justify-center shrink-0">
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                      Langkah {idx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="text-center">
            <Link
              href="/appointments"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077C8] hover:bg-[#005a99] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-sm"
            >
              <span>Lihat Panduan Pasien &rarr;</span>
            </Link>
          </div>
        </section>

        {/* 6. INFORMASI PRAKTIS (Enhanced with clear hours, days, consistent numbers, and CTAs) */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
          <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Jam Berkunjung Pasien */}
              <div className="flex flex-col justify-between bg-white p-5 rounded-xl border border-gray-200 shadow-2xs">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0077C8] flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#00205B] mb-2">
                    Jam Berkunjung Pasien
                  </h4>
                  <div className="text-xs text-gray-600 space-y-1.5 mb-3">
                    <div className="font-semibold text-gray-800">Senin – Minggu:</div>
                    <div className="flex items-center justify-between bg-slate-50 px-2.5 py-1 rounded">
                      <span>Sesi Siang:</span>
                      <span className="font-bold text-gray-700">11.00 – 13.00 WIB</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-50 px-2.5 py-1 rounded">
                      <span>Sesi Sore:</span>
                      <span className="font-bold text-gray-700">17.00 – 20.00 WIB</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-snug">
                    *Maksimal 2 orang pengunjung secara bergantian demi ketenangan proses pemulihan pasien.
                  </p>
                </div>
              </div>

              {/* Card 2: Hotline Gawat Darurat (Consistent numbers) */}
              <div className="flex flex-col justify-between bg-white p-5 rounded-xl border border-gray-200 shadow-2xs">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5 animate-pulse" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-red-900 mb-2">
                    Hotline Gawat Darurat
                  </h4>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    Pelayanan tim medis IGD dan armada ambulans siaga 24 jam setiap hari:
                  </p>
                  <div className="space-y-1.5 mb-3">
                    <div className="bg-red-50 border border-red-100 p-2 rounded-lg text-center">
                      <span className="text-[11px] text-red-700 block uppercase font-medium">IGD &amp; Ambulans 24 Jam:</span>
                      <a href="tel:021500911" className="text-lg font-bold text-red-700 hover:underline">
                        (021) 500-911
                      </a>
                    </div>
                    <div className="text-[11px] text-gray-500 text-center">
                      Call Center Pasien: <strong className="text-gray-700">(021) 500-900</strong>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:021500911"
                  className="w-full py-2 px-3 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg transition-colors text-center shadow-2xs block"
                >
                  Hubungi IGD Sekarang
                </a>
              </div>

              {/* Card 3: Pendaftaran Online */}
              <div className="flex flex-col justify-between bg-white p-5 rounded-xl border border-gray-200 shadow-2xs">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0077C8] flex items-center justify-center mb-3">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#00205B] mb-2">
                    Pendaftaran Online
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    Buat janji temu dokter spesialis secara praktis tanpa harus mengantre lama. Pilih tanggal, waktu, dan dokter sesuai kebutuhan Anda.
                  </p>
                </div>

                <Link
                  href="/appointments"
                  className="w-full py-2.5 px-4 bg-[#0077C8] hover:bg-[#005a99] text-white text-xs font-semibold rounded-lg transition-colors text-center shadow-2xs block"
                >
                  Buat Janji Sekarang &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA: "Butuh Bantuan?" */}
        <section className="w-full bg-gradient-to-br from-[#00205B] to-[#002D72] text-white py-12 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium mb-3 border border-white/15">
              <HelpCircle className="w-3.5 h-3.5 text-blue-300" />
              <span>Dukungan Pasien Shilah</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
              Butuh Bantuan?
            </h2>
            <p className="text-xs sm:text-base text-gray-200 max-w-lg mx-auto mb-7 leading-relaxed font-light">
              Kami siap membantu Anda menemukan layanan yang tepat.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/doctors"
                className="px-5 py-2.5 bg-white text-[#00205B] hover:bg-gray-100 text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-sm flex items-center gap-2"
              >
                <Search className="w-4 h-4 text-[#0077C8]" />
                <span>Cari Dokter</span>
              </Link>
              <Link
                href="/appointments"
                className="px-5 py-2.5 bg-[#0077C8] hover:bg-[#005a99] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-sm flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Buat Janji</span>
              </Link>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors border border-white/25 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-200" />
                <span>Hubungi Kami</span>
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
