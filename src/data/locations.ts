export interface HospitalLocation {
  id: string;
  name: string;
  type: string;
  city: string;
  address: string;
  phone: string;
  emergency: string;
  hours: string;
  facilities: string[];
  mapsUrl: string;
  image: string;
}

export const hospitalLocations: HospitalLocation[] = [
  {
    id: "loc-01",
    name: "Shilah Central Hospital (Pusat Medis Utama)",
    type: "Rumah Sakit Tipe A & Pusat Rujukan Nasional",
    city: "Jakarta Selatan",
    address: "Jl. Shilah Medika No. 101, Cilandak, Jakarta Selatan 12430",
    phone: "(021) 500-740",
    emergency: "(021) 500-911 (24 Jam)",
    hours: "Pelayanan Rawat Inap & IGD 24 Jam | Poliklinik: 08:00 - 20:00 WIB",
    facilities: [
      "Instalasi Gawat Darurat (IGD) & Trauma Center 24 Jam",
      "Pusat Jantung & Kardiovaskular Intervensi Terpadu",
      "Pusat Penanganan Stroke & Bedah Saraf Komprehensif",
      "MRI 3 Tesla, Dual-Source CT Scan 512 Slice, Cath Lab Modern",
      "Ruang Perawatan VVIP, VIP, Kelas 1, 2, 3, serta ICU/ICCU/NICU",
    ],
    mapsUrl: "https://maps.google.com/?q=Jakarta+Selatan+Hospital",
    image: "/sites/hopkinsmedicine/images/locations_hero_bg.jpeg",
  },
  {
    id: "loc-02",
    name: "Shilah Children's & Maternal Hospital",
    type: "Pusat Kesehatan Ibu & Anak Terpadu",
    city: "Jakarta Selatan",
    address: "Jl. Shilah Medika No. 105, Cilandak, Jakarta Selatan 12430",
    phone: "(021) 500-741",
    emergency: "(021) 500-911",
    hours: "Pelayanan 24 Jam | Poliklinik Spesialis Anak & Kandungan: 08:00 - 19:00 WIB",
    facilities: [
      "Klinik Tumbuh Kembang & Terapi Sensori Integrasi Anak",
      "Unit Perinatologi, NICU Level 3 & PICU Komprehensif",
      "Persalinan Nyaman (Water Birth & Minimally Invasive Delivery)",
      "Vaksinasi & Imunisasi Anak Lengkap",
    ],
    mapsUrl: "https://maps.google.com/?q=Jakarta+Children+Hospital",
    image: "/sites/hopkinsmedicine/images/5_peds-usnews-25-26-640-336-3_jpg.png",
  },
  {
    id: "loc-03",
    name: "Shilah Specialist Clinic & Ambulatory Center",
    type: "Klinik Rawat Jalan Eksekutif & Medical Check-Up",
    city: "Jakarta Pusat",
    address: "Sentra Bisnis Medika Kav. 8, Thamrin, Jakarta Pusat 10350",
    phone: "(021) 500-742",
    emergency: "(021) 500-911 (Hubungi IGD Shilah Central)",
    hours: "Senin - Sabtu: 07:30 - 20:00 WIB (Minggu Libur)",
    facilities: [
      "Executive Medical Check-Up Lounge",
      "Klinik Spesialis Konsultasi Satu Atap (One-Stop Service)",
      "Bedah Rawat Jalan Sehari (Day Surgery)",
      "Instalasi Farmasi & Laboratorium Cepat Selesai",
    ],
    mapsUrl: "https://maps.google.com/?q=Thamrin+Jakarta+Clinic",
    image: "/sites/hopkinsmedicine/images/about_hero_bg.png",
  },
  {
    id: "loc-04",
    name: "Shilah Healthcare Clinic & Diagnostic Hub",
    type: "Klinik Pratama & Pusat Diagnostik Komunitas",
    city: "Tangerang BSD",
    address: "Boulevard Barat No. 24, BSD City, Tangerang 15321",
    phone: "(021) 500-743",
    emergency: "(021) 500-743 Ext. 1",
    hours: "Senin - Minggu: 08:00 - 22:00 WIB",
    facilities: [
      "Layanan Dokter Umum & Dokter Gigi Terpadu",
      "Klinik Spesialis Penyakit Dalam & Anak",
      "Laboratorium Darah Rutin & Radiologi X-Ray Digital",
      "Apotek & Layanan Pengantaran Obat",
    ],
    mapsUrl: "https://maps.google.com/?q=BSD+City+Tangerang+Hospital",
    image: "/sites/hopkinsmedicine/images/6_us-news-hospital_jpg.png",
  },
];
