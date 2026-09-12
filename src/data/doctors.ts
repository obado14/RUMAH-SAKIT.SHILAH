export interface DoctorSchedule {
  day: string;
  hours: string;
  location: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  department: string;
  subspecialty: string;
  hospital: string;
  room: string;
  education: string;
  degrees: string[];
  schedule: string;
  scheduleList: DoctorSchedule[];
  image: string;
  experience: string;
  languages: string[];
  bio: string;
  certifications: string[];
  services: string[];
}

export const allDoctors: Doctor[] = [
  {
    id: "dr-adrian",
    name: "dr. Adrian Shilah, Sp.JP(K), FIHA",
    specialty: "Spesialis Jantung & Pembuluh Darah",
    department: "Kardiologi",
    subspecialty: "Kardiologi Intervensi & Aritmia",
    hospital: "Shilah Central Hospital (Gedung A, Lt. 3)",
    room: "Klinik Jantung Terpadu Suite 302",
    education: "Fakultas Kedokteran Shilah University & FK Universitas Indonesia",
    degrees: [
      "Dokter Umum - Fakultas Kedokteran Shilah University",
      "Spesialis Jantung & Pembuluh Darah (Sp.JP) - Universitas Indonesia",
      "Konsultan Kardiologi Intervensi (Sp.JP(K)) - Kolegium Ilmu Penyakit Jantung",
      "Fellowship in Complex Coronary Intervention - National Heart Centre",
    ],
    schedule: "Senin, Rabu, Jumat: 08:30 - 13:00 WIB",
    scheduleList: [
      { day: "Senin", hours: "08:30 - 13:00 WIB", location: "Klinik Jantung 302" },
      { day: "Rabu", hours: "08:30 - 13:00 WIB", location: "Klinik Jantung 302" },
      { day: "Jumat", hours: "08:30 - 13:00 WIB", location: "Klinik Jantung 302" },
    ],
    image: "/sites/hopkinsmedicine/images/dr_adrian_shilah.jpeg",
    experience: "16+ Tahun Pengalaman Klinis & Riset Kardiovaskular",
    languages: ["Bahasa Indonesia", "English"],
    bio: "dr. Adrian Shilah adalah konsultan kardiologi intervensi terkemuka di Shilah Medicine dengan keahlian lebih dari 16 tahun dalam menangani kasus penyakit jantung koroner kompleks, kateterisasi darurat pada sindrom koroner akut, penutupan defek septum, dan pemasangan alat pacu jantung modern. Beliau aktif mengintegrasikan prosedur minimal invasif mutakhir demi pemulihan pasien yang lebih cepat dan aman.",
    certifications: [
      "Fellow of the Indonesian Heart Association (FIHA)",
      "Member of Asian Pacific Society of Interventional Cardiology (APSIC)",
      "European Society of Cardiology (ESC) Professional Member",
      "Board Certified Percutaneous Coronary Intervention Specialist",
    ],
    services: [
      "Kateterisasi Jantung & Pemasangan Ring/Stent (PCI Primer & Elektif)",
      "Pemasangan Alat Pacu Jantung (Permanent Pacemaker / ICD)",
      "Ekokardiografi Dewasa Lanjut (TTE & Transesophageal TEE)",
      "Pemeriksaan Treadmill Test & Holter Monitoring 24 Jam",
      "Manajemen Sindrom Koroner Akut & Gagal Jantung Kongestif",
    ],
  },
  {
    id: "prof-ratna",
    name: "Prof. Dr. dr. Ratna Shilah, Sp.S(K), FANA",
    specialty: "Spesialis Saraf (Neurolog)",
    department: "Neurologi",
    subspecialty: "Neurovaskular, Stroke Akut & Gangguan Kognitif / Memori",
    hospital: "Shilah Central Hospital (Pusat Otak & Saraf, Lt. 2)",
    room: "Klinik Neurologi & Pusat Otak Suite 205",
    education: "Doktor Ilmu Kedokteran Shilah University & FK Universitas Indonesia",
    degrees: [
      "Dokter Umum - Fakultas Kedokteran Universitas Indonesia",
      "Spesialis Saraf (Sp.S) - Universitas Indonesia",
      "Doktor Ilmu Kedokteran (Dr.) - Shilah University School of Medicine",
      "Konsultan Neurovaskular & Stroke (Sp.S(K))",
      "Postdoctoral Fellowship in Stroke Neurology - Johns Hopkins / Harvard Neuro",
    ],
    schedule: "Selasa & Kamis: 09:00 - 14:00 WIB",
    scheduleList: [
      { day: "Selasa", hours: "09:00 - 14:00 WIB", location: "Pusat Otak & Saraf 205" },
      { day: "Kamis", hours: "09:00 - 14:00 WIB", location: "Pusat Otak & Saraf 205" },
    ],
    image: "/sites/hopkinsmedicine/images/prof_ratna_shilah.jpeg",
    experience: "24+ Tahun Pengalaman Akademik & Pelayanan Stroke Akut",
    languages: ["Bahasa Indonesia", "English", "Deutsch"],
    bio: "Prof. Dr. dr. Ratna Shilah adalah Guru Besar Neurologi dan pelopor penanganan stroke akut 'Golden Period' berbasis trombolisis intravena dan trombektomi mekanik di Shilah Medicine. Beliau memimpin divisi riset neurodegeneratif serta klinik khusus gangguan memori (Alzheimer & Demensia) berstandar internasional.",
    certifications: [
      "Fellow of the American Neurological Association (FANA)",
      "World Stroke Organization (WSO) Active Advisory Member",
      "Ketua Komite Penanggulangan Stroke Terpadu Shilah Medicine",
      "Dewan Guru Besar Neurologi Indonesia",
    ],
    services: [
      "Protokol Trombolisis & Trombektomi Stroke Akut 24 Jam",
      "Pemeriksaan Digital EEG & Pemetaan Gelombang Otak (Brain Mapping)",
      "Skrining & Terapi Demensia Alzheimer serta Gangguan Memori",
      "Evaluasi & Manajemen Nyeri Neuropatik Kronis / Trigeminal Neuralgia",
      "USG Doppler Transkranial (TCD) & Dupleks Karotis",
    ],
  },
  {
    id: "dr-maya",
    name: "dr. Maya Kartika, Sp.A(K), M.Kes",
    specialty: "Spesialis Anak (Pediatri)",
    department: "Pediatrik",
    subspecialty: "Tumbuh Kembang Anak & Alergi Imunologi Pediatrik",
    hospital: "Shilah Children's Center (Paviliun Anak, Lt. 1)",
    room: "Klinik Pediatrik Ramah Anak Suite 101",
    education: "Universitas Indonesia & Universitas Padjadjaran",
    degrees: [
      "Dokter Umum - Fakultas Kedokteran Universitas Padjadjaran",
      "Spesialis Anak (Sp.A) - Universitas Indonesia",
      "Magister Kesehatan Anak (M.Kes) - Pascasarjana Kedokteran",
      "Konsultan Tumbuh Kembang & Pediatri Sosial (Sp.A(K))",
      "Fellowship in Pediatric Allergy-Immunology - Shilah Children Hospital",
    ],
    schedule: "Senin - Sabtu: 08:00 - 12:00 WIB",
    scheduleList: [
      { day: "Senin - Kamis", hours: "08:00 - 12:00 WIB", location: "Paviliun Anak 101" },
      { day: "Jumat - Sabtu", hours: "08:30 - 11:30 WIB", location: "Paviliun Anak 101" },
    ],
    image: "/sites/hopkinsmedicine/images/dr_maya_kartika.jpeg",
    experience: "12+ Tahun Dedikasi Kesehatan & Perkembangan Anak",
    languages: ["Bahasa Indonesia", "English"],
    bio: "dr. Maya Kartika berdedikasi memberikan perawatan holistik yang ramah dan menenangkan bagi buah hati Anda. Memiliki keahlian mendalam dalam pemantauan milestone tumbuh kembang, intervensi dini keterlambatan bicara/motorik, tata laksana alergi susu sapi, dermatitis atopik anak, serta imunisasi anak komprehensif.",
    certifications: [
      "Ikatan Dokter Anak Indonesia (IDAI)",
      "Asia Pacific Association of Pediatric Allergy, Respirology and Immunology (APAPARI)",
      "Certified Pediatric Advanced Life Support (PALS) Instructor",
    ],
    services: [
      "Skrining Perkembangan Bayi & Anak (Metode Denver II / ASQ-3)",
      "Uji Cukit Kulit (Skin Prick Test) Alergi Makanan & Debu pada Anak",
      "Vaksinasi & Imunisasi Anak Lengkap Standar IDAI / WHO",
      "Tata Laksana Asma Anak & Terapi Inhalasi Nebulisasi",
      "Konsultasi Nutrisi Balita, MPASI, Gagal Tumbuh & Stunting",
    ],
  },
  {
    id: "dr-hendra",
    name: "dr. Hendra Pratama, Sp.OT(K), Spine",
    specialty: "Spesialis Bedah Ortopedi & Traumatologi",
    department: "Ortopedi",
    subspecialty: "Bedah Rekonstruksi Tulang Belakang & Sendi Minimal Invasif",
    hospital: "Shilah Central Hospital (Klinik Ortopedi & Spine, Lt. 4)",
    room: "Klinik Bedah Rekonstruksi Tulang Suite 408",
    education: "Fakultas Kedokteran Universitas Indonesia & Spine Institute",
    degrees: [
      "Dokter Umum - Fakultas Kedokteran Universitas Indonesia",
      "Spesialis Orthopaedi & Traumatologi (Sp.OT) - FKUI / RSCM",
      "Konsultan Tulang Belakang (Sp.OT(K) Spine) - Kolegium Orthopaedi",
      "Fellowship in Minimally Invasive Spine Surgery (MISS) - Seoul National University Hospital",
    ],
    schedule: "Senin, Selasa, Kamis: 13:00 - 17:00 WIB",
    scheduleList: [
      { day: "Senin", hours: "13:00 - 17:00 WIB", location: "Klinik Ortopedi 408" },
      { day: "Selasa", hours: "13:00 - 17:00 WIB", location: "Klinik Ortopedi 408" },
      { day: "Kamis", hours: "13:00 - 17:00 WIB", location: "Klinik Ortopedi 408" },
    ],
    image: "/sites/hopkinsmedicine/images/dr_hendra_pratama.jpeg",
    experience: "14+ Tahun Keahlian Bedah Rekonstruksi Ortopedi",
    languages: ["Bahasa Indonesia", "English"],
    bio: "dr. Hendra Pratama adalah spesialis bedah ortopedi konsultan spine terkemuka dengan reputasi keahlian operasi mikro dan endoskopi tulang belakang (PELD/PSLD). Dikenal mampu menangani kasus saraf terjepit (HNP) dan stenosis tanpa sayatan besar, koreksi skoliosis modern, serta penggantian sendi lutut dan panggul menggunakan bantuan navigasi komputer presisi tinggi.",
    certifications: [
      "Perhimpunan Dokter Spesialis Orthopaedi & Traumatologi Indonesia (PABOI)",
      "AOSpine International Active Spine Specialist Member",
      "Indonesian Spine Society (ISS) Committee",
      "Certified Robotic & Computer-Assisted Joint Arthroplasty",
    ],
    services: [
      "Operasi Endoskopi Saraf Terjepit (PELD / PSLD Minimal Invasif)",
      "Fusi Tulang Belakang (TLIF/PLIF) dengan Mikroskop Bedah Canggih",
      "Koreksi Skoliosis dan Deformitas Tulang Belakang Remaja & Dewasa",
      "Operasi Penggantian Sendi Lutut & Panggul (Total Knee / Hip Arthroplasty)",
      "Rekonstruksi Cedera Ligamen Lutut Olahraga (ACL / PCL Rekonstruksi)",
    ],
  },
  {
    id: "dr-dewi",
    name: "dr. Dewi Anggraini, Sp.PD-KHOM, FINASIM",
    specialty: "Spesialis Penyakit Dalam - Konsultan Hematologi Onkologi",
    department: "Onkologi",
    subspecialty: "Terapi Target Kanker, Imunoterapi & Kemoterapi Komprehensif",
    hospital: "Shilah Cancer Comprehensive Center (Lt. 5)",
    room: "Pusat Onkologi Medik Terpadu Suite 504",
    education: "Fakultas Kedokteran Universitas Indonesia & Shilah Cancer Center",
    degrees: [
      "Dokter Umum - Fakultas Kedokteran Universitas Airlangga",
      "Spesialis Penyakit Dalam (Sp.PD) - Universitas Indonesia",
      "Konsultan Hematologi & Onkologi Medik (Sp.PD-KHOM) - FKUI",
      "Clinical Fellowship in Molecular Oncology & Immunotherapy - National Cancer Centre",
    ],
    schedule: "Rabu, Jumat, Sabtu: 10:00 - 15:00 WIB",
    scheduleList: [
      { day: "Rabu", hours: "10:00 - 15:00 WIB", location: "Pusat Onkologi 504" },
      { day: "Jumat", hours: "10:00 - 15:00 WIB", location: "Pusat Onkologi 504" },
      { day: "Sabtu", hours: "10:00 - 14:00 WIB", location: "Pusat Onkologi 504" },
    ],
    image: "/sites/hopkinsmedicine/images/dr_dewi_anggraini.jpeg",
    experience: "15+ Tahun Penanganan Kanker Komprehensif & Kelainan Darah",
    languages: ["Bahasa Indonesia", "English"],
    bio: "dr. Dewi Anggraini mengkhususkan diri pada tatalaksana modern keganasan hematologi (leukemia, limfoma, mieloma) dan tumor padat (kanker payudara, paru, saluran cerna). Menerapkan pendekatan 'precision oncology' berbasis profil genetik sel tumor untuk menentukan terapi target dan imunoterapi yang paling efektif dengan efek samping seminimal mungkin bagi kenyamanan pasien.",
    certifications: [
      "Fellow of the Indonesian Society of Internal Medicine (FINASIM)",
      "Perhimpunan Hematologi Onkologi Medik Penyakit Dalam Indonesia (PERHOMPEDIN)",
      "American Society of Clinical Oncology (ASCO) International Member",
      "European Society for Medical Oncology (ESMO)",
    ],
    services: [
      "Pemberian Kemoterapi Modern & Terapi Target Kanker (Targeted Therapy)",
      "Protokol Imunoterapi Kanker Terbaru",
      "Biopsi & Aspirasi Sumsum Tulang (Bone Marrow Puncture)",
      "Penanganan Anemia Kompleks, Trombositopenia & Gangguan Pembekuan Darah",
      "Konseling Skrining Risiko Kanker Herediter & Biomarker Tumor",
    ],
  },
  {
    id: "dr-farhan",
    name: "dr. Farhan Gunawan, Sp.OG(K)-FER",
    specialty: "Spesialis Kebidanan & Kandungan",
    department: "Kebidanan",
    subspecialty: "Fertilitas, Endokrinologi Reproduksi & USG Fetomaternal 4D",
    hospital: "Shilah Women's & Maternal Health Center (Lt. 2)",
    room: "Klinik Fertilitas & Obstetri Modern Suite 201",
    education: "Fakultas Kedokteran Universitas Gadjah Mada & Shilah Women Center",
    degrees: [
      "Dokter Umum - Fakultas Kedokteran Universitas Gadjah Mada",
      "Spesialis Kebidanan & Penyakit Kandungan (Sp.OG) - FK UGM",
      "Konsultan Fertilitas & Endokrinologi Reproduksi (Sp.OG(K)-FER) - Kolegium Obgyn",
      "Advanced Reproductive Medicine & IVF Fellowship - KK Women's Hospital",
    ],
    schedule: "Selasa, Kamis, Sabtu: 08:30 - 13:30 WIB",
    scheduleList: [
      { day: "Selasa", hours: "08:30 - 13:30 WIB", location: "Klinik Kebidanan 201" },
      { day: "Kamis", hours: "08:30 - 13:30 WIB", location: "Klinik Kebidanan 201" },
      { day: "Sabtu", hours: "08:30 - 13:30 WIB", location: "Klinik Kebidanan 201" },
    ],
    image: "/sites/hopkinsmedicine/images/dr_farhan_gunawan.jpeg",
    experience: "13+ Tahun Pelayanan Fertilitas, Reproduksi & Kehamilan Risiko Tinggi",
    languages: ["Bahasa Indonesia", "English"],
    bio: "dr. Farhan Gunawan adalah dokter spesialis kandungan konsultan fertilitas yang berpengalaman dalam menangani gangguan kesuburan pria dan wanita, sindrom ovarium polikistik (PCOS), endometriosis, serta program kehamilan inseminasi (IUI) hingga bayi tabung (IVF). Beliau juga ahli dalam pemeriksaan USG 4D Fetomaternal untuk memantau kesehatan janin secara detail.",
    certifications: [
      "Perkumpulan Obstetri dan Ginekologi Indonesia (POGI)",
      "Himpunan Fertilitas Endokrinologi Reproduksi Indonesia (HIFERI)",
      "International Society of Ultrasound in Obstetrics and Gynecology (ISUOG)",
      "Certified Assisted Reproductive Technology (ART) Specialist",
    ],
    services: [
      "Program Kehamilan Terencana & Inseminasi Buatan (IUI)",
      "Konsultasi Program Bayi Tabung (IVF) Komprehensif",
      "USG 4D HD-Live Fetomaternal Deteksi Anomali Janin",
      "Laparoskopi Ginekologi Minimal Invasif (Kista Ovarium, Mioma, Endometriosis)",
      "Pemeriksaan Saluran Tuba (HSG) & Penanganan Gangguan Hormon Reproduksi",
    ],
  },
];

export const departments = [
  "Semua Spesialisasi",
  "Kardiologi",
  "Neurologi",
  "Pediatrik",
  "Ortopedi",
  "Onkologi",
  "Kebidanan",
];
