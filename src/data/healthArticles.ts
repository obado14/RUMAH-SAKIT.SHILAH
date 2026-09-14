export interface HealthArticle {
  id: string;
  title: string;
  category: string;
  topic: string;
  imageSrc: string;
  imageAlt: string;
  date: string;
  readTime: string;
  summary: string;
  keyTakeaways: string[];
  contentParagraphs: string[];
  reviewer: {
    name: string;
    specialty: string;
    lastUpdated: string;
    hospitalDepartment: string;
  };
  relatedDoctorSlug?: string;
  tags: string[];
}

export const popularHealthTopics = [
  {
    id: "jantung",
    name: "Jantung & Vaskular",
    query: "jantung",
    icon: "Heart",
    description: "Kardiologi, hipertensi, aritmia & pencegahan serangan jantung",
    count: "12 Artikel & Panduan",
  },
  {
    id: "diabetes",
    name: "Diabetes & Metabolik",
    query: "diabetes",
    icon: "Activity",
    description: "Kontrol gula darah, resistensi insulin, diet & skrining HbA1c",
    count: "9 Artikel & Panduan",
  },
  {
    id: "anak",
    name: "Kesehatan Anak",
    query: "anak",
    icon: "Baby",
    description: "Tumbuh kembang pediatrik, nutrisi MPASI, dan imunisasi wajib",
    count: "15 Artikel & Panduan",
  },
  {
    id: "nutrisi",
    name: "Nutrisi & Diet Sehat",
    query: "nutrisi",
    icon: "Apple",
    description: "Pola makan bergizi seimbang, vitamin esensial, & pencegahan obesitas",
    count: "8 Artikel & Panduan",
  },
  {
    id: "mental",
    name: "Kesehatan Mental",
    query: "mental",
    icon: "Brain",
    description: "Manajemen stres kerja, penanganan kecemasan, & kualitas tidur",
    count: "7 Artikel & Panduan",
  },
  {
    id: "sendi",
    name: "Tulang & Sendi",
    query: "sendi",
    icon: "Bone",
    description: "Osteoarthritis, saraf terjepit, postur tulang belakang & ergonomi",
    count: "10 Artikel & Panduan",
  },
  {
    id: "kanker",
    name: "Onkologi & Kanker",
    query: "kanker",
    icon: "ShieldAlert",
    description: "Deteksi dini tumor, skrining berkala, biomarker & kemoterapi",
    count: "11 Artikel & Panduan",
  },
  {
    id: "preventif",
    name: "Kesehatan Preventif",
    query: "preventif",
    icon: "ShieldCheck",
    description: "Medical Check-Up tahunan, vaksinasi dewasa, & gaya hidup aktif",
    count: "14 Artikel & Panduan",
  },
];

export const healthArticles: HealthArticle[] = [
  {
    id: "art-01",
    title: "Mengenal Aritmia: Kapan Detak Jantung Tidak Teratur Menjadi Berbahaya?",
    category: "Kardiologi & Jantung",
    topic: "jantung",
    imageSrc: "/sites/hopkinsmedicine/images/12_digital-twin-heart_jpg.png",
    imageAlt: "Ilustrasi medis ritme detak jantung dan kardiologi",
    date: "12 September 2026",
    readTime: "4 menit baca",
    summary:
      "Detak jantung yang tiba-tiba berdegup cepat, melompat, atau terasa berhenti sejenak sering dialami banyak orang. Kenali perbedaan palpitasi fisiologis dan tanda awal aritmia patologis yang memerlukan penanganan medis.",
    keyTakeaways: [
      "Palpitasi sesekali akibat kafein atau stres ringan biasanya tidak berbahaya.",
      "Segera periksakan diri jika detak tidak teratur disertai pusing berputar, lemas mendadak, atau sesak napas.",
      "Pemeriksaan EKG dan Holter Monitor 24 jam adalah standar emas mendeteksi gangguan irama jantung.",
    ],
    contentParagraphs: [
      "Jantung manusia normal berdetak antara 60 hingga 100 kali per menit saat istirahat dengan irama yang teratur. Irama ini diatur oleh impuls listrik alami dari nodus sinoatrial (SA). Ketika jalur listrik ini mengalami gangguan, detak jantung bisa menjadi terlalu cepat (takikardia), terlalu lambat (bradikardia), atau sama sekali tidak beraturan (aritmia).",
      "Penyebab aritmia sangat bervariasi, mulai dari ketidakseimbangan elektrolit, konsumsi kafein berlebihan, hingga penyakit jantung koroner dan kelainan katup jantung. Salah satu jenis aritmia yang paling sering ditemukan adalah Fibrilasi Atrium (AFib), yang dapat meningkatkan risiko terbentuknya bekuan darah penyebab stroke jika tidak ditangani tepat waktu.",
      "Jika Anda merasakan detak jantung berdebar kencang saat istirahat disertai rasa seperti melayang, nyeri dada, atau sesak napas, jangan tunda untuk berkonsultasi dengan dokter spesialis jantung untuk evaluasi rekam jantung komprehensif.",
    ],
    reviewer: {
      name: "dr. Adrian Shilah, Sp.JP(K), FIHA",
      specialty: "Spesialis Jantung & Pembuluh Darah (Konsultan Kardiologi Intervensi)",
      lastUpdated: "10 September 2026",
      hospitalDepartment: "Pusat Jantung & Kardiovaskular Shilah",
    },
    relatedDoctorSlug: "dr-adrian",
    tags: ["Jantung", "Aritmia", "Gejala Nyeri Dada", "Kardiologi"],
  },
  {
    id: "art-02",
    title: "Panduan Gizi Tepat untuk Mencegah Stunting pada 1.000 Hari Pertama",
    category: "Kesehatan Anak (Pediatrik)",
    topic: "anak",
    imageSrc: "/sites/hopkinsmedicine/images/10_ocd-children_jpg.png",
    imageAlt: "Dokter anak memeriksa kesehatan dan nutrisi balita",
    date: "08 September 2026",
    readTime: "5 menit baca",
    summary:
      "Periode 1.000 Hari Pertama Kehidupan menentukan pertumbuhan fisik dan kecerdasan anak sepanjang hayatnya. Temukan strategi pemenuhan protein hewani dan mikronutrien esensial pencegah stunting sejak masa MPASI.",
    keyTakeaways: [
      "Protein hewani seperti telur, ayam, daging, dan ikan memiliki asam amino esensial lengkap yang sangat vital bagi pertumbuhan tulang.",
      "Zat besi dan zink dari sumber hewani diserap tubuh anak jauh lebih baik dibanding sumber nabati.",
      "Pantau kurva tinggi badan terhadap usia setiap bulan di posyandu atau klinik spesialis anak.",
    ],
    contentParagraphs: [
      "Stunting adalah kondisi gagal tumbuh kembang pada anak balita akibat kekurangan gizi kronis, terutama dalam 1.000 Hari Pertama Kehidupan (sejak janin dalam kandungan hingga anak berusia 2 tahun). Dampak stunting tidak hanya terbatas pada postur tubuh yang lebih pendek, tetapi juga memengaruhi perkembangan sel saraf otak dan kapasitas kognitif jangka panjang.",
      "Setelah periode ASI eksklusif 6 bulan, pemberian MPASI yang padat nutrisi menjadi faktor penentu. Sangat dianjurkan untuk selalu menyertakan minimal 1-2 porsi protein hewani setiap kali makan, seperti hati ayam, telur, daging sapi cincang, atau ikan kembung lokal yang kaya omega-3.",
      "Selain asupan gizi, pencegahan infeksi berulang seperti diare dan batuk pilek kronis juga sangat krusial. Pastikan imunisasi lengkap telah diberikan sesuai jadwal Ikatan Dokter Anak Indonesia (IDAI).",
    ],
    reviewer: {
      name: "dr. Maya Kartika, Sp.A(K), M.Kes",
      specialty: "Spesialis Anak (Konsultan Tumbuh Kembang & Pediatrik Sosial)",
      lastUpdated: "05 September 2026",
      hospitalDepartment: "Shilah Children's Center",
    },
    relatedDoctorSlug: "dr-maya",
    tags: ["Kesehatan Anak", "Stunting", "Nutrisi MPASI", "Imunisasi"],
  },
  {
    id: "art-03",
    title: "Mengenali Gejala Awal Diabetes Melitus Tipe 2 Sebelum Muncul Komplikasi",
    category: "Kesehatan Preventif & Metabolik",
    topic: "diabetes",
    imageSrc: "/sites/hopkinsmedicine/images/8_audrey_smith-copy_jpg.png",
    imageAlt: "Pasien berkonsultasi mengenai pemeriksaan gula darah dan diabetes",
    date: "02 September 2026",
    readTime: "4 menit baca",
    summary:
      "Diabetes melitus kerap berkembang tanpa gejala khas selama bertahun-tahun. Kenali tanda trias klasik, faktor risiko resistensi insulin, serta pemeriksaan skrining berkala yang wajib dilakukan.",
    keyTakeaways: [
      "Tanda klasik 3P: Polidipsia (sering haus), Polifagia (sering lapar), dan Poliuria (sering buang air kecil malam hari).",
      "Pemeriksaan HbA1c memberikan gambaran rata-rata kadar gula darah selama 3 bulan terakhir.",
      "Perubahan gaya hidup sehat dan penurunan berat badan 5-10% dapat mencegah prediabetes berkembang menjadi diabetes.",
    ],
    contentParagraphs: [
      "Diabetes melitus tipe 2 terjadi ketika sel-sel tubuh menjadi kebal terhadap kerja hormon insulin (resistensi insulin), sehingga glukosa menumpuk dalam aliran darah. Penyakit ini sering dijuluki sebagai 'silent killer' karena pada fase awal, penderitanya sering kali merasa sehat dan tidak memiliki keluhan berarti.",
      "Selain sering haus dan buang air kecil di malam hari, tanda-tanda lain yang patut diwaspadai adalah kelelahan yang tidak wajar, luka pada kulit yang sulit kering atau sembuh, pandangan mendadak kabur, serta penebalan kulit berwarna gelap di area lipatan leher (akantosis nigrikans).",
      "Bagi individu berusia di atas 35 tahun, atau yang memiliki indeks massa tubuh (BMI) berlebih dan riwayat keluarga diabetes, skrining gula darah puasa dan HbA1c secara berkala setiap tahun sangat direkomendasikan.",
    ],
    reviewer: {
      name: "dr. Dewi Anggraini, Sp.PD-KHOM, FINASIM",
      specialty: "Spesialis Penyakit Dalam (Konsultan Hematologi & Penyakit Dalam)",
      lastUpdated: "28 Agustus 2026",
      hospitalDepartment: "Departemen Penyakit Dalam Shilah Medicine",
    },
    relatedDoctorSlug: "dr-dewi",
    tags: ["Diabetes", "Gula Darah", "Penyakit Dalam", "Metabolik"],
  },
  {
    id: "art-04",
    title: "Ergonomi Kerja & Cara Mengatasi Sakit Pinggang Akibat Duduk Lama",
    category: "Ortopedi & Tulang Belakang",
    topic: "sendi",
    imageSrc: "/sites/hopkinsmedicine/images/11_microgrippers-illustration_jpg.png",
    imageAlt: "Ilustrasi anatomi tulang belakang dan perawatan sendi ortopedi",
    date: "28 Agustus 2026",
    readTime: "3 menit baca",
    summary:
      "Duduk statis di depan layar komputer lebih dari 6 jam sehari membebani bantalan tulang lumbar hingga 40% lebih besar dibandingkan berdiri. Simak teknik ergonomi dan latihan peregangan pelepas ketegangan saraf.",
    keyTakeaways: [
      "Atur tinggi kursi agar telapak kaki menapak rata di lantai dengan sudut lutut 90 derajat.",
      "Lakukan 'micro-break' selama 2 menit setiap 30-45 menit duduk untuk meregangkan otot fleksor panggul.",
      "Waspadai nyeri pinggang yang menjalar ke betis disertai rasa baal karena dapat mengindikasikan saraf terjepit (HNP).",
    ],
    contentParagraphs: [
      "Nyeri punggung bawah (Low Back Pain) merupakan keluhan muskuloskeletal yang paling sering dialami oleh pekerja kantoran modern. Postur tubuh yang membungkuk saat mengetik di laptop memberikan tekanan mekanis yang tidak merata pada bantalan intervertebralis dan memicu spasme otot paraspinal.",
      "Penerapan prinsip ergonomi di tempat kerja dapat mencegah kerusakan kronis. Pastikan monitor komputer sejajar dengan pandangan mata, gunakan bantalan penyangga kurva lumbar, dan hindari kebiasaan menyilangkan kaki saat duduk.",
      "Bila nyeri pinggang tidak kunjung membaik setelah 2 minggu, menjalar hingga ke telapak kaki, atau disertai gangguan berkemih, segera lakukan pemeriksaan ke dokter spesialis bedah ortopedi tulang belakang untuk penanganan presisi.",
    ],
    reviewer: {
      name: "dr. Hendra Pratama, Sp.OT(K), Spine",
      specialty: "Spesialis Bedah Ortopedi & Traumatologi (Konsultan Tulang Belakang)",
      lastUpdated: "24 Agustus 2026",
      hospitalDepartment: "Pusat Ortopedi & Tulang Belakang Shilah",
    },
    relatedDoctorSlug: "dr-hendra",
    tags: ["Ortopedi", "Saraf Terjepit", "Sakit Pinggang", "Ergonomi"],
  },
  {
    id: "art-05",
    title: "Kiat Menjaga Kesehatan Mental dan Mengatasi Kelelahan Kronis (Burnout)",
    category: "Kesehatan Mental & Psikosomatis",
    topic: "mental",
    imageSrc: "/sites/hopkinsmedicine/images/7_dannals_pomper_jpg.png",
    imageAlt: "Konsultasi medis dan pendampingan kesehatan mental profesional",
    date: "20 Agustus 2026",
    readTime: "5 menit baca",
    summary:
      "Stres pekerjaan yang berkepanjangan tanpa jeda pemulihan dapat menguras energi fisik dan psikologis. Pahami fase burnout dan langkah awal membangun resiliensi emosional demi kesehatan holistik.",
    keyTakeaways: [
      "Burnout ditandai oleh 3 dimensi: kelelahan fisik-emosional ekstrem, sinisme terhadap pekerjaan, dan penurunan efikasi diri.",
      "Stres kronis yang tidak tertangani dapat memicu gangguan psikosomatis seperti asam lambung (GERD) dan migrain.",
      "Menetapkan batasan digital (screen-free time) dan tidur teratur 7-8 jam membantu pemulihan neurotransmiter otak.",
    ],
    contentParagraphs: [
      "Organisasi Kesehatan Dunia (WHO) mengklasifikasikan burnout sebagai sindrom okupasional yang dihasilkan dari stres kronis di tempat kerja yang belum berhasil dikelola. Kondisi ini bukan kelemahan pribadi, melainkan respon fisiologis tubuh terhadap tuntutan yang melebihi kapasitas adaptasi.",
      "Gejala burnout sering kali muncul secara bertahap: mulai dari kesulitan berkonsentrasi, gangguan pola tidur, hingga timbulnya rasa cemas berlebihan dan isolasi sosial. Tubuh yang terus-menerus terpapar hormon kortisol dan adrenalin tinggi juga rentan mengalami penurunan daya tahan tubuh terhadap infeksi.",
      "Langkah awal pemulihan adalah mengenali sinyal tubuh dan berani menetapkan batasan yang sehat antara tanggung jawab kerja dan waktu pribadi. Jika perasaan tertekan atau cemas sudah mengganggu fungsi harian, konsultasi dengan tenaga profesional psikolog klinis atau psikiater adalah langkah terbaik.",
    ],
    reviewer: {
      name: "Prof. Dr. dr. Ratna Shilah, Sp.S(K), FANA",
      specialty: "Spesialis Saraf (Konsultan Neurovaskular & Neurofisiologi)",
      lastUpdated: "18 Agustus 2026",
      hospitalDepartment: "Pusat Kesehatan Otak & Saraf Shilah",
    },
    relatedDoctorSlug: "prof-ratna",
    tags: ["Kesehatan Mental", "Manajemen Stres", "Psikosomatis", "Tidur Sehat"],
  },
  {
    id: "art-06",
    title: "Skrining Dini Kanker: Panduan Pemeriksaan Penting Berdasarkan Kategori Usia",
    category: "Onkologi & Deteksi Dini",
    topic: "kanker",
    imageSrc: "/sites/hopkinsmedicine/images/14_researcher-in-lab_jpg.png",
    imageAlt: "Peneliti medis laboratorium melakukan pemeriksaan skrining diagnostik",
    date: "15 Agustus 2026",
    readTime: "6 menit baca",
    summary:
      "Sebagian besar jenis kanker memiliki tingkat kesembuhan di atas 90% jika dideteksi pada stadium sangat dini. Kenali jenis pemeriksaan skrining pencegahan yang dianjurkan untuk pria dan wanita sesuai usia.",
    keyTakeaways: [
      "Wanita usia 40 tahun ke atas dianjurkan melakukan mamografi berkala setiap 1-2 tahun untuk deteksi dini kanker payudara.",
      "Skrining kanker serviks dengan Pap smear atau tes DNA HPV sangat efektif mencegah perkembangan displasia serviks.",
      "Skrining kanker kolorektal melalui kolonoskopi atau tes darah samar feses direkomendasikan mulai usia 45 tahun.",
    ],
    contentParagraphs: [
      "Deteksi dini merupakan senjata paling efektif dalam penatalaksanaan onkologi modern. Pada stadium awal, sel kanker belum menyebar ke jaringan limfatik maupun organ jauh (metastasis), sehingga intervensi medis invasif minimal dapat memberikan hasil terapi yang optimal.",
      "Untuk wanita, selain melakukan Pemeriksaan Payudara Sendiri (SADARI) setiap bulan, pemeriksaan USG payudara dan mamografi dapat mendeteksi mikrokalsifikasi bertahun-tahun sebelum benjolan dapat teraba dengan tangan. Bagi pria, pemeriksaan penanda tumor PSA (Prostate Specific Antigen) dianjurkan mulai usia 50 tahun untuk skrining prostat.",
      "Mengetahui riwayat penyakit kanker dalam silsilah keluarga juga sangat berharga untuk menentukan apakah Anda memerlukan skrining genetik khusus (seperti mutasi gen BRCA1/BRCA2). Konsultasikan paket medical check-up komprehensif Anda bersama dokter spesialis penyakit dalam Shilah Medicine.",
    ],
    reviewer: {
      name: "dr. Dewi Anggraini, Sp.PD-KHOM, FINASIM",
      specialty: "Spesialis Penyakit Dalam (Konsultan Hematologi Onkologi Medik)",
      lastUpdated: "12 Agustus 2026",
      hospitalDepartment: "Pusat Kanker Terpadu Shilah Medicine",
    },
    relatedDoctorSlug: "dr-dewi",
    tags: ["Kanker", "Skrining Kanker", "Onkologi", "Deteksi Dini"],
  },
];
