import { Star } from "lucide-react";

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
      "Pengalaman melahirkan anak kedua di Shilah Women's Hospital sangat berkesan. Protokol pemulihan cepat (ERACS) benar-benar bekerja nyata. Fasilitas kamar rawat inap tenang seperti di hotel dan perawatnya begitu perhatian.",
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
  return (
    <section className="w-full py-14 sm:py-20 bg-[#f8fafc] border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#0077C8] text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-100">
            Kisah Kesembuhan & Testimoni
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#111111] mb-3 leading-tight">
            Patient Stories & Experiences
          </h2>
          <div className="w-16 h-1 bg-[#0077C8] mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
            Mendengarkan langsung pengalaman nyata pasien dan keluarga yang telah mempercayakan pemulihan kesehatannya kepada tim medis Shilah Medicine.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patientStories.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
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
                  <span className="text-[11px] font-semibold text-[#0077C8] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {item.department}
                  </span>
                </div>

                {/* Pull Quote */}
                <div className="relative pl-6 border-l-2 border-[#0077C8] py-1">
                  <p className="text-sm sm:text-base font-serif font-bold text-gray-900 leading-snug">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Detailed Story */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.story}
                </p>
              </div>

              {/* Patient Attribution Footer */}
              <div className="pt-5 border-t border-gray-100 mt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-gray-900">
                    {item.name} {item.age && <span className="font-normal text-gray-500 font-sans text-xs">({item.age})</span>}
                  </h4>
                  <p className="text-[11px] text-gray-500">
                    {item.procedure}
                  </p>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">Dokter Perawat</span>
                  <span className="text-xs font-semibold text-gray-700">{item.doctorRef}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
