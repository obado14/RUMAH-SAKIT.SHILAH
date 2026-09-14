"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface PatientStory {
  id: string;
  name: string;
  age?: string;
  department: string;
  procedure: string;
  doctorRef: string;
  rating: number;
  story: string;
  quote: string;
}

const patientStories: PatientStory[] = [
  {
    id: "story-01",
    name: "Bpk. Rahmat Santoso",
    age: "58 Tahun",
    department: "Pusat Jantung & Kardiovaskular",
    procedure: "Tindakan Kateterisasi Jantung & Pasang Ring (PCI)",
    doctorRef: "dr. Adrian Shilah, Sp.JP(K)",
    rating: 5,
    quote: "Penanganan sangat cepat di IGD dan tim dokter menjelaskan setiap langkah tindakan dengan sangat tenang.",
    story:
      "Saat mengalami nyeri dada hebat di malam hari, ambulans RS Shilah tiba dalam waktu 15 menit. Tim dokter langsung melakukan tindakan kateterisasi darurat tanpa rasa panik. Pemulihan saya berlangsung sangat cepat dan sekarang saya bisa beraktivitas bersama keluarga kembali.",
  },
  {
    id: "story-02",
    name: "Ibu Meilani Hapsari",
    age: "34 Tahun",
    department: "Kesehatan Ibu & Kebidanan",
    procedure: "Persalinan Nyaman & Operasi Caesar Metode ERACS",
    doctorRef: "dr. Farhan Gunawan, Sp.OG(K)",
    rating: 5,
    quote: "Hanya beberapa jam setelah operasi caesar, saya sudah bisa duduk dan menyusui si kecil tanpa rasa sakit yang berarti.",
    story:
      "Pengalaman melahirkan anak kedua di Shilah Women''s Hospital sangat berkesan. Protokol pemulihan cepat (ERACS) benar-benar bekerja nyata. Fasilitas kamar rawat inap tenang seperti di hotel dan perawatnya begitu perhatian.",
  },
  {
    id: "story-03",
    name: "Keluarga Ananda Kenzo",
    age: "7 Tahun",
    department: "Pediatrik & Kesehatan Anak",
    procedure: "Perawatan Rawat Inap Demam Berdarah & Nutrisi Pediatrik",
    doctorRef: "dr. Maya Kartika, Sp.A(K)",
    rating: 5,
    quote: "Dokter anak dan perawatnya sangat ramah, membuat anak saya yang takut jarum suntik menjadi merasa aman dan ceria.",
    story:
      "Ketika anak kami demam tinggi dan trombositnya turun, dr. Maya memantau kondisinya secara intensif siang dan malam. Penjelasan medis disampaikan dengan bahasa yang mudah dipahami orang tua, sehingga kami merasa tenang selama masa perawatan.",
  },
  {
    id: "story-04",
    name: "Bpk. Hendra Wijaya",
    age: "49 Tahun",
    department: "Ortopedi & Kedokteran Olahraga",
    procedure: "Rekonstruksi Cedera Ligamen Lutut (ACL Arthroscopy)",
    doctorRef: "dr. Hendra Pratama, Sp.OT(K)",
    rating: 5,
    quote: "Program fisioterapi terpadu di RS Shilah membantu saya kembali berjalan normal dalam waktu lebih singkat dari perkiraan.",
    story:
      "Cedera lutut saat bermain basket sempat membuat saya khawatir tidak bisa berolahraga lagi. Berkat tindakan artroskopi minimal invasif dan bimbingan tim rehabilitasi medik Shilah, kini lutut saya kembali stabil dan kuat tanpa keluhan.",
  },
];

export function PatientStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Show 2 items per view on desktop/tablet, 1 on mobile
  const totalPages = Math.ceil(patientStories.length / 2);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleStories = patientStories.slice(currentIndex * 2, currentIndex * 2 + 2);

  return (
    <section className="w-full py-12 sm:py-16 bg-[#f8fafc] border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#0077C8] text-xs font-semibold uppercase tracking-wider mb-2.5 border border-blue-100">
              Kisah Kesembuhan & Pengalaman Pasien
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#111111] leading-tight">
              Patient Stories & Experiences
            </h2>
            <div className="w-14 h-1 bg-[#0077C8] mt-2.5 mb-3" />
            <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed max-w-xl">
              Mendengarkan langsung pengalaman nyata pasien dan keluarga yang telah mempercayakan pemulihan kesehatannya kepada tim medis Shilah Medicine.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl bg-white border border-gray-300 hover:bg-slate-50 hover:border-[#0077C8] text-gray-700 flex items-center justify-center transition-all shadow-xs cursor-pointer"
              aria-label="Cerita sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-10 h-10 rounded-xl bg-[#002D72] hover:bg-[#001D4A] text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
              aria-label="Cerita berikutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[320px]">
          {visibleStories.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative text-left animate-in fade-in duration-200"
            >
              <div className="space-y-4">
                {/* Rating & Department Badge */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#0077C8] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {item.department}
                  </span>
                </div>

                {/* Pull Quote */}
                <div className="relative pl-5 border-l-2 border-[#0077C8] py-0.5">
                  <p className="text-sm sm:text-base font-serif font-bold text-gray-900 leading-snug">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Detailed Story */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-4">
                  {item.story}
                </p>
              </div>

              {/* Patient Attribution Footer */}
              <div className="pt-4 border-t border-gray-100 mt-5 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-gray-900">
                    {item.name} {item.age && <span className="font-normal text-gray-500 font-sans text-xs">({item.age})</span>}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {item.procedure}
                  </p>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">Dokter Konsultan</span>
                  <span className="text-xs font-semibold text-gray-700">{item.doctorRef}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === i
                  ? "w-8 bg-[#0077C8]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ke slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
