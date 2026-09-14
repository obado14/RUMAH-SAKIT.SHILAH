import React from "react";
import Link from "next/link";
import {
  Heart,
  Brain,
  Baby,
  Bone,
  ShieldAlert,
  Stethoscope,
  Eye,
  Activity,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

interface SpecialtyItem {
  id: string;
  name: string;
  subName: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  keyServices: string[];
  href: string;
}

const specialties: SpecialtyItem[] = [
  {
    id: "cardiology",
    name: "Cardiology & Vascular",
    subName: "Pusat Jantung & Kardiovaskular",
    desc: "Kateterisasi PCI 24 jam, tatalaksana aritmia, dan kelainan katup jantung.",
    icon: Heart,
    keyServices: ["Kateterisasi PCI", "Ekokardiografi 4D", "Pacemaker"],
    href: "/health/kardiologi-jantung",
  },
  {
    id: "neurology",
    name: "Neurology & Brain Center",
    subName: "Pusat Saraf, Otak & Stroke",
    desc: "Penanganan stroke akut 24 jam, bedah saraf mikro, & rehabilitasi neurologis.",
    icon: Brain,
    keyServices: ["Stroke Unit 24 Jam", "MRI Otak 3T", "Rehabilitasi Saraf"],
    href: "/health/neurologi-saraf",
  },
  {
    id: "pediatrics",
    name: "Pediatrics & Child Health",
    subName: "Kesehatan Anak & Tumbuh Kembang",
    desc: "Perawatan intensif NICU/PICU level 3, tumbuh kembang, & imunisasi anak.",
    icon: Baby,
    keyServices: ["NICU/PICU Level 3", "Klinik Tumbuh Kembang", "Vaksin Lengkap"],
    href: "/health/kesehatan-anak",
  },
  {
    id: "orthopedics",
    name: "Orthopedics & Joint Care",
    subName: "Ortopedi, Sendi & Olahraga",
    desc: "Rekonstruksi sendi panggul/lutut minimally invasive & penanganan cedera.",
    icon: Bone,
    keyServices: ["Joint Replacement", "Artroskopi Sendi", "Spine Center"],
    href: "/health/ortopedi-sendi",
  },
  {
    id: "oncology",
    name: "Comprehensive Oncology",
    subName: "Pusat Kanker Terpadu",
    desc: "Kemoterapi modern, imunoterapi terarah, & precision oncology personal.",
    icon: ShieldAlert,
    keyServices: ["Targeted Therapy", "Biopsi Genomik", "Radioterapi"],
    href: "/health",
  },
  {
    id: "internal-medicine",
    name: "Internal Medicine",
    subName: "Penyakit Dalam & Metabolik",
    desc: "Tatalaksana komprehensif diabetes, ginjal, autoimun, & saluran cerna.",
    icon: Stethoscope,
    keyServices: ["Klinik Diabetes", "Endoskopi Cerna", "Hemodialisis"],
    href: "/health",
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology & Eye Center",
    subName: "Kesehatan Mata & Refraktif",
    desc: "Operasi katarak modern fakoemulsifikasi tanpa jahitan & laser retina.",
    icon: Eye,
    keyServices: ["Operasi Katarak", "Laser Retina", "Skrining Mata"],
    href: "/health",
  },
  {
    id: "obgyn",
    name: "Obstetrics & Gynecology",
    subName: "Kebidanan, Kandungan & Fertilitas",
    desc: "Skrining fetomaternal 4D, persalinan aman ERACS, & program fertilitas.",
    icon: Activity,
    keyServices: ["USG 4D Fetomaternal", "Metode ERACS", "Konsultasi Fertilitas"],
    href: "/health",
  },
];

export function MedicalServicesSection() {
  return (
    <section className="w-full py-12 sm:py-16 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#0077C8] text-xs font-semibold uppercase tracking-wider mb-2.5 border border-blue-100">
              Pusat Unggulan Medis
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#111111] leading-tight">
              Our Medical Services
            </h2>
            <div className="w-14 h-1 bg-[#0077C8] mt-2.5 mb-3" />
            <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed">
              Pelayanan medis terpadu berbasis bukti ilmiah dengan dokter spesialis lintas disiplin dan fasilitas teknologi diagnostik mutakhir.
            </p>
          </div>

          <Link
            href="/health"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#002D72] hover:bg-[#001D4A] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-xs shrink-0"
          >
            <span>View All Specialties</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {specialties.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                className="group bg-slate-50/70 hover:bg-white p-5 rounded-2xl border border-gray-200/80 hover:border-[#0077C8] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0077C8]/0 to-transparent group-hover:from-[#002D72] group-hover:via-[#0077C8] group-hover:to-[#00A3E0] transition-all duration-200" />

                <div>
                  {/* Icon Container */}
                  <div className="w-11 h-11 rounded-xl bg-blue-50 group-hover:bg-[#0077C8] text-[#0077C8] group-hover:text-white flex items-center justify-center mb-3.5 transition-colors shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[11px] font-semibold text-gray-500 block uppercase tracking-wider mb-1">
                    {item.subName}
                  </span>
                  <h3 className="font-serif text-base font-bold text-[#111111] group-hover:text-[#002D72] transition-colors mb-1.5 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#4b5563] leading-relaxed mb-3.5 line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                {/* Key Services Pills & Action */}
                <div className="pt-3 border-t border-gray-200/60 mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.keyServices.map((srv, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-2 py-0.5 rounded bg-white text-[11px] font-medium text-gray-600 border border-gray-200/80"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center text-xs font-semibold text-[#0077C8] group-hover:text-[#002D72] group-hover:underline">
                    <span>Pelajari Layanan</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
