export interface AdmissionTimeline {
  wave: string;
  registrationPeriod: string;
  examDate: string;
  announcement: string;
}

export interface AcademicProgram {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  degree: string;
  duration: string;
  accreditation: string;
  desc: string;
  overview: string;
  requirements: {
    academic: string[];
    exams: string[];
    documents: string[];
  };
  timeline: AdmissionTimeline[];
  tuitionInfo: {
    tuitionRange: string;
    admissionFee: string;
    scholarships: string[];
  };
  facilities: string[];
  curriculumHighlights: string[];
  contactEmail: string;
  contactPhone: string;
  whatsappMessage: string;
}

export const academicPrograms: AcademicProgram[] = [
  {
    id: "md-program",
    slug: "sarjana-profesi-dokter",
    title: "Program Sarjana & Profesi Dokter (MD)",
    shortTitle: "Sarjana & Profesi Dokter",
    badge: "S.Ked & dr.",
    degree: "Sarjana Kedokteran (S.Ked) & Profesi Dokter (dr.)",
    duration: "3.5 Tahun Akademik (Tahap Sarjana) + 1.5 Tahun Rotasi Klinik (Tahap Profesi/Koas)",
    accreditation: "Akreditasi Unggul (LAM-PTKes) & Standar WFME (World Federation for Medical Education)",
    desc: "Kurikulum kedokteran komprehensif berbasis bukti dan pengalaman klinis langsung di rumah sakit jejaring Shilah.",
    overview:
      "Program Sarjana dan Profesi Dokter Shilah School of Medicine dirancang untuk mencetak dokter masa depan yang memiliki kompetensi diagnostik klinis unggul, empati tulus kepada pasien, dan penguasaan riset translasi medis. Mahasiswa mendapatkan pembelajaran klinis nyata di RS Pendidikan Shilah sejak tahap awal studi.",
    requirements: {
      academic: [
        "Lulusan SMA/MA jurusan MIPA (Kurikulum Merdeka / K-13) atau kurikulum internasional (Cambridge A-Level / IB Diploma).",
        "Nilai rapor semester 1–5 untuk mata pelajaran Biologi, Kimia, Matematika, dan Bahasa Inggris rata-rata minimal 85.0.",
        "Usia maksimal 21 tahun pada saat awal tahun akademik baru.",
        "Dapat memilih jalur seleksi: Jalur Prestasi Talenta Medis, Seleksi Mandiri CBT Shilah, atau Jalur Kemitraan Internasional.",
      ],
      exams: [
        "Computer-Based Test (CBT) Potensi Skolastik, Biologi Medis, dan Penalaran Kimia.",
        "Multiple Mini Interview (MMI): Evaluasi etika medis, empati, kemampuan pemecahan masalah, dan resiliensi.",
        "Tes Kepribadian MMPI-2 (Minnesota Multiphasic Personality Inventory) & Wawancara Psikiatri.",
        "Pemeriksaan Kesehatan Fisik Komprehensif (Bebas buta warna total/parsial, tes audiometri, dan skrining bebas narkoba).",
      ],
      documents: [
        "Salinan Rapor SMA/MA terlegalisir (Semester 1–5) atau Ijazah & SKL bagi yang sudah lulus.",
        "Sertifikat Prestasi Akademik / Olimpiade Sains Nasional / Internasional (jika ada).",
        "Surat Keterangan Bebas Narkoba (SKBN) dari Rumah Sakit Pemerintah atau BNN.",
        "Pasfoto resmi terbaru latar belakang merah ukuran 4x6 (format digital dan fisik).",
        "Salinan Kartu Keluarga (KK) dan KTP / Kartu Pelajar calon mahasiswa.",
      ],
    },
    timeline: [
      {
        wave: "Gelombang I (Jalur Prestasi & Mandiri Talenta Medis)",
        registrationPeriod: "2 Januari – 15 Maret 2026",
        examDate: "21 – 22 Maret 2026 (CBT & MMI Online/Hybrid)",
        announcement: "30 Maret 2026",
      },
      {
        wave: "Gelombang II (Jalur CBT Reguler & Ujian Masuk Nasional)",
        registrationPeriod: "1 April – 15 Juni 2026",
        examDate: "20 – 21 Juni 2026 (Ujian di Kampus FK Shilah)",
        announcement: "28 Juni 2026",
      },
      {
        wave: "Gelombang III (Khusus International Undergraduate Program - IUP)",
        registrationPeriod: "1 Mei – 10 Juli 2026",
        examDate: "16 – 17 Juli 2026 (Wawancara Bahasa Inggris & Esai Ilmiah)",
        announcement: "25 Juli 2026",
      },
    ],
    tuitionInfo: {
      tuitionRange: "BOK / UKT mulai dari Rp 22.500.000 hingga Rp 35.000.000 per semester.",
      admissionFee: "Sumbangan Pengembangan Institusi (SPI) bersifat subsidi silang dan tersedia beasiswa potongan s/d 100%.",
      scholarships: [
        "Beasiswa Penuh Shilah Medical Excellence (Bebas 100% biaya pendidikan 5 tahun penuh untuk peraih ranking 1–3 seleksi)",
        "Beasiswa Putra-Putri Daerah 3T Kemitraan Pemerintah Daerah & RS Shilah",
        "Kemitraan Beasiswa Bank Indonesia, LPDP, dan Filantropi Medis",
      ],
    },
    facilities: [
      "Rumah Sakit Pendidikan Utama RS Shilah berstandar JCI dengan 700+ tempat tidur",
      "Shilah Medical Simulation Center: Meja Anatomi Virtual 3D Anatomage & Ruang Simulasi Tindakan Darurat",
      "Laboratorium Biosafety Level 2 (BSL-2) & Bank Jaringan Penyakit",
      "Perpustakaan Kedokteran Digital terhubung ke Cochrane Library, PubMed, ClinicalKey, dan BMJ",
    ],
    curriculumHighlights: [
      "Early Clinical Exposure (ECE): Observasi dan interaksi klinis terpadu sejak semester pertama",
      "Sistem Problem-Based Learning (PBL) & Pembahasan Kasus Klinis Berbasis Bukti",
      "Program Pertukaran Mahasiswa Elektif (Clinical Elective Clerkship) di RS jejaring internasional",
    ],
    contactEmail: "admisi.kedokteran@shilah.ac.id",
    contactPhone: "+62 21-5098-8888 (Ext. 410)",
    whatsappMessage: "Halo Admisi FK Shilah, saya ingin konsultasi pendaftaran Program Sarjana & Profesi Dokter (MD).",
  },
  {
    id: "residency-program",
    slug: "spesialis-subspesialis",
    title: "Pendidikan Dokter Spesialis & Subspesialis",
    shortTitle: "Spesialis (PPDS) & Subspesialis",
    badge: "Spesialis & Konsultan",
    degree: "Dokter Spesialis (Sp.JP, Sp.S, Sp.A, Sp.OT, Sp.B, Sp.PD) & Fellow Subspesialis",
    duration: "7 hingga 10 Semester (3.5 – 5 Tahun tergantung peminatan program spesialisasi)",
    accreditation: "Akreditasi Unggul (LAM-PTKes) & Kolegium Kedokteran Terkait",
    desc: "Program residensi dan fellowship intensif dalam bidang bedah, kardiologi, neurologi, pediatrik, dan onkologi.",
    overview:
      "Program Pendidikan Dokter Spesialis (PPDS) Shilah Hospital Academic Center membina dokter umum menjadi spesialis handal melalui pelatihan rotasi klinis mendalam, tindakan intervensi bedah mandiri tersupervisi, serta keterlibatan aktif dalam penanganan kasus penyakit rujukan kompleks tingkat nasional.",
    requirements: {
      academic: [
        "Ijazah Sarjana Kedokteran (S.Ked) dan Profesi Dokter (dr.) dari FK terakreditasi minimal Baik Sekali (A/B).",
        "Indeks Prestasi Kumulatif (IPK) tahap Sarjana & Profesi minimal 3.00.",
        "Telah lulus dan menyelesaikan program Internsip Dokter Indonesia (disertai Surat Tanda Selesai Internsip - STSI).",
        "Memiliki pengalaman praktik klinis pasca-internsip minimal 1 tahun di fasilitas pelayanan kesehatan (RS/Klinik/Puskesmas).",
      ],
      exams: [
        "Ujian Tulis Keilmuan Medis Dasar & Spesifik Program Studi (CBT Spesialis).",
        "Sidang Wawancara Klinis & Etik oleh Dewan Kolegium serta Guru Besar FK Shilah.",
        "Pemeriksaan Kesehatan Menyeluruh & Skrining Psikiatri (MMPI-2 Klinis).",
        "Uji Keterampilan Bedah / Keterampilan Klinis Prosedural.",
      ],
      documents: [
        "Surat Tanda Registrasi (STR) Dokter Umum yang masih berlaku dari Konsil Kedokteran Indonesia (KKI).",
        "Surat Rekomendasi Resmi dari Pengurus Ikatan Dokter Indonesia (IDI) Cabang asal.",
        "Dua Surat Rekomendasi dari Dokter Spesialis senior di bidang spesialisasi yang dituju.",
        "Sertifikat pelatihan resusitasi yang masih aktif: ACLS, ATLS, atau PALS.",
        "Sertifikat kemahiran Bahasa Inggris resmi (TOEFL ITP min. 500 / iBT min. 61 / IELTS min. 6.0).",
      ],
    },
    timeline: [
      {
        wave: "Periode Masuk Semester Ganjil (Periode Juli)",
        registrationPeriod: "1 Maret – 30 April 2026",
        examDate: "12 – 16 Mei 2026 (Ujian Tulis, Wawancara, & Tes Kesehatan)",
        announcement: "1 Juni 2026",
      },
      {
        wave: "Periode Masuk Semester Genap (Periode Januari)",
        registrationPeriod: "1 September – 31 Oktober 2026",
        examDate: "10 – 14 November 2026",
        announcement: "1 Desember 2026",
      },
    ],
    tuitionInfo: {
      tuitionRange: "BOP / UKT Rp 16.000.000 – Rp 24.000.000 per semester.",
      admissionFee: "Biaya Operasional Pendidikan (BOP) sesuai ketentuan Kolegium Medis Nasional.",
      scholarships: [
        "Beasiswa Program Bantuan Pendidikan Dokter Spesialis (PDS) Kementerian Kesehatan RI",
        "Beasiswa Jalur Dokter Residen Shilah (Fellowship Ikatan Kerja Rumah Sakit)",
        "Beasiswa Pascasarjana Pendidikan Dokter Spesialis LPDP",
      ],
    },
    facilities: [
      "Pusat Jantung & Pembuluh Darah: 3 Ruang Kateterisasi Jantung (Cath-Lab) 24 Jam",
      "Suite Kamar Operasi Berteknologi Hybrid & Sistem Laparoskopi Robotik 4K",
      "Pusat Perawatan Intensif Khusus: Intensive Coronary Care Unit (ICCU), Neuro-ICU, dan NICU Level 3",
      "Akses Langsung ke Sistem Rekam Medis Elektronik (EMR) & Database Klinis Terintegrasi",
    ],
    curriculumHighlights: [
      "Rotasi Klinis Bertahap: Magang Junior, Jaga Mandiri Tersupervisi, hingga Kepala Jaga Senior (Chief Resident)",
      "Bimbingan Hands-On Langsung dari Dokter Subspesialis & Konsultan Berpengalaman",
      "Kewajiban Publikasi Ilmiah Internasional & Presentasi di Kongres Spesialis Nasional/Global",
    ],
    contactEmail: "ppds@shilah.ac.id",
    contactPhone: "+62 21-5098-8888 (Ext. 412)",
    whatsappMessage: "Halo Panitia PPDS FK Shilah, saya dokter umum yang ingin mendaftar Program Pendidikan Dokter Spesialis.",
  },
  {
    id: "biomedical-phd",
    slug: "magister-doktoral-biomedis",
    title: "Magister & Doktoral Riset Biomedis (Ph.D)",
    shortTitle: "Magister & Doktoral Riset",
    badge: "M.Sc & Ph.D",
    degree: "Magister Sains Biomedis (M.Sc) & Doktor Riset Kedokteran (Ph.D)",
    duration: "S2: 2 Tahun (4 Semester) | S3: 3 hingga 4 Tahun (6 – 8 Semester)",
    accreditation: "Akreditasi Unggul (LAM-PTKes) & Jurnal Riset Terindeks Scopus Q1/Q2",
    desc: "Riset tingkat lanjut dalam biologi molekuler, genetika manusia, pengembangan farmasi, dan bioteknologi kesehatan.",
    overview:
      "Program Pascasarjana Riset Biomedis Shilah didedikasikan bagi para ilmuwan, dokter peneliti, dan innovator bioteknologi. Fokus riset kami mencakup terapi gen sel punca (stem cell), imunoterapi onkologi, diagnostik molekuler cepat, dan farmakogenomik presisi.",
    requirements: {
      academic: [
        "Untuk Jenjang Magister (S2): Lulusan S1 Kedokteran, Farmasi, Biologi, Bioteknologi, atau Ilmu Hayati terkait dengan IPK minimal 3.00.",
        "Untuk Jenjang Doktoral (S3): Lulusan S2 Biomedis/Kesehatan atau Dokter Spesialis (Sp-1) dengan IPK minimal 3.25.",
        "Memiliki ketertarikan kuat dalam metodologi riset laboratorium dan sains translasi.",
      ],
      exams: [
        "Tes Potensi Akademik (TPA Bappenas) dengan skor minimal 500.",
        "Ujian Pemahaman Jurnal Ilmiah & Metodologi Penelitian Biostatistika.",
        "Presentasi Proposal Rancangan Tesis / Disertasi di hadapan Dewan Penguji Pascasarjana.",
        "Wawancara Motivasi Akademis dan Kesiapan Komitmen Riset Penuh Waktu.",
      ],
      documents: [
        "Ijazah dan Transkrip Nilai jenjang sebelumnya yang telah dilegalisir.",
        "Draft Ringkasan Proposal Penelitian Riset yang diminati (1.500 – 2.500 kata).",
        "Dua Surat Rekomendasi dari Guru Besar atau Pembimbing Akademik Terdahulu.",
        "Sertifikat Kemampuan Bahasa Inggris (TOEFL ITP min. 525 / iBT min. 70 / IELTS min. 6.5).",
        "Daftar Publikasi Ilmiah atau Portofolio Riset sebelumnya (jika ada).",
      ],
    },
    timeline: [
      {
        wave: "Penerimaan Riset Semester Ganjil",
        registrationPeriod: "1 Februari – 15 Mei 2026",
        examDate: "28 – 30 Mei 2026 (Presentasi Proposal Riset)",
        announcement: "12 Juni 2026",
      },
      {
        wave: "Penerimaan Riset Semester Genap",
        registrationPeriod: "1 Agustus – 15 November 2026",
        examDate: "25 – 27 November 2026",
        announcement: "10 Desember 2026",
      },
    ],
    tuitionInfo: {
      tuitionRange: "Magister (S2): Rp 17.500.000 / semester | Doktoral (S3): Rp 22.000.000 / semester.",
      admissionFee: "Biaya Reagen dan Pengujian Laboratorium didukung oleh Dana Hibah Riset Institusi.",
      scholarships: [
        "Shilah Biomedical Full Research Fellowship (Bebas Biaya SPP 100% & Tunjangan Hidup Riset Bulanan)",
        "Dukungan Hibah Riset Kolaborasi Internasional & Akses Bank Jaringan Sel",
        "Beasiswa Pendidikan Pascasarjana LPDP (Reguler & Targeted Peneliti)",
      ],
    },
    facilities: [
      "Pusat Genomik & Fasilitas Next-Generation Sequencing (NGS) Generasi Mutakhir",
      "Laboratorium Kultur Sel Punca Cleanroom Bersertifikasi CPOB / GMP",
      "Fasilitas Bioinformatika & Komputasi Superkomputer untuk Pemodelan Molekuler",
      "Laboratorium Uji Praklinis Hewan Coba Bersertifikasi Etik Internasional",
    ],
    curriculumHighlights: [
      "Kurikulum Berorientasi Publikasi Jurnal Internasional Bereputasi Tinggi (Scopus / Web of Science)",
      "Kolaborasi Penelitian Bersama Laboratorium Medis Mitra Global Terkemuka",
      "Dukungan Penuh Pengurusan Paten Inovasi Medis & Hak Kekayaan Intelektual (HAKI)",
    ],
    contactEmail: "biomedis@shilah.ac.id",
    contactPhone: "+62 21-5098-8888 (Ext. 415)",
    whatsappMessage: "Halo Tim Pascasarjana FK Shilah, saya berminat mendaftar Program Riset Biomedis (Ph.D / M.Sc).",
  },
  {
    id: "cme-program",
    slug: "pendidikan-berkelanjutan-cme",
    title: "Pendidikan Kedokteran Berkelanjutan (CME)",
    shortTitle: "Pendidikan Kedokteran Berkelanjutan",
    badge: "SKP Kemenkes & IDI",
    degree: "Sertifikat Pelatihan Profesional & Perolehan SKP Resmi",
    duration: "Modul Intensif 2 Hari hingga Kursus Hands-On Terakreditasi 1–3 Bulan",
    accreditation: "Terakreditasi Kementerian Kesehatan RI (Plataran Sehat) & Ikatan Dokter Indonesia (IDI)",
    desc: "Seminar, workshop klinis, dan sertifikasi terkini bagi para praktisi medis profesional di seluruh Indonesia.",
    overview:
      "Layanan Continuing Medical Education (CME) Shilah Medicine menghadirkan pelatihan keterampilan klinis berkelanjutan bagi dokter umum, dokter spesialis, dan perawat terlatih. Dapatkan pembaruan pedoman klinis (guidelines) terkini, praktik alat bedah canggih di wet-lab, dan SKP resmi Kemenkes.",
    requirements: {
      academic: [
        "Dokter Umum, Dokter Spesialis, Residen Medis, atau Tenaga Kesehatan Profesional.",
        "Terdaftar aktif di platform SatuSehat / Plataran Sehat Kementerian Kesehatan RI.",
        "Terbuka untuk lulusan dokter baru yang ingin memperdalam keterampilan kegawatdaruratan dan prosedur dasar.",
      ],
      exams: [
        "Pre-Test Mandiri Berbasis Online sebelum sesi materi dimulai.",
        "Post-Test Evaluasi Pengetahuan Medis di akhir sesi pelatihan.",
        "Objective Structured Clinical Examination (OSCE) untuk program keterampilan intervensi langsung.",
      ],
      documents: [
        "Salinan Ijazah Profesi Dokter / Dokter Spesialis atau STR aktif.",
        "Bukti Nomor Induk Pegawai (NIP) / KTP untuk pencatatan poin SKP Plataran Sehat.",
        "Bukti Konfirmasi Registrasi Peserta Kursus.",
      ],
    },
    timeline: [
      {
        wave: "Program Batch Rutin Setiap Bulan",
        registrationPeriod: "Pendaftaran dibuka sepanjang tahun (Ditutup H-3 sebelum tanggal workshop)",
        examDate: "Jadwal Kursus: Sesi daring (Webinar) dan luring (Hands-on di Shilah Simulation Center)",
        announcement: "Penerbitan E-Sertifikat Ber-SKP Resmi maks. 3 hari kerja setelah kegiatan selesai",
      },
    ],
    tuitionInfo: {
      tuitionRange: "Mulai dari Rp 750.000 (Webinar Series Ilmiah) hingga Rp 6.500.000 (Workshop Hands-On Intervensi).",
      admissionFee: "Biaya mencakup kit pelatihan, modul panduan cetak/digital, konsumsi, dan sertifikat ber-SKP.",
      scholarships: [
        "Potongan 25% Khusus Anggota Alumni Fakultas Kedokteran Shilah",
        "Diskon Pendaftaran Kolektif (Minimal 3 dokter dari fasilitas fasyankes yang sama)",
        "Subsidi Khusus Dokter Puskesmas di Wilayah Terpencil",
      ],
    },
    facilities: [
      "Auditorium Kedokteran Interaktif dengan Siaran Operasi Langsung (Live Surgery Broadcast)",
      "Wet-Laboratory untuk Praktik Diseksi Kadaver & Simulasi Arthroskopi",
      "Phantom Manekin Resusitasi Berteknologi Sensor Presisi Real-Time",
      "Lounge & Ruang Diskusi Studi Kasus Klinis",
    ],
    curriculumHighlights: [
      "Sertifikasi Penanganan Gawat Darurat: ATLS, ACLS, PALS, & FCCS Terstandar",
      "Workshop USG Abdomen, Muskuloskeletal, dan Echocardiografi Point-of-Care (POCUS)",
      "Teknik Penjahitan Luka Lanjut & Penanganan Luka Bakar Komprehensif",
    ],
    contactEmail: "cme@shilah.ac.id",
    contactPhone: "+62 21-5098-8888 (Ext. 418)",
    whatsappMessage: "Halo Tim CME Shilah, saya ingin mendaftar workshop dan seminar Continuing Medical Education.",
  },
];
