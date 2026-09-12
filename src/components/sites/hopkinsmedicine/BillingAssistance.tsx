import React from "react";
import Link from "next/link";

interface BillingLink {
  title: string;
  description: string;
  href: string;
}

const column1Links: BillingLink[] = [
  {
    title: "Estimasi Biaya Perawatan",
    description: "Buat perkiraan rincian biaya tindakan medis, kamar rawat inap, atau poliklinik secara online.",
    href: "/billing",
  },
  {
    title: "Bayar Tagihan Online",
    description: "Bayar tagihan rumah sakit secara praktis melalui transfer Virtual Account, QRIS, atau kartu kredit.",
    href: "/billing",
  },
  {
    title: "Transparansi Tarif Pelayanan",
    description: "Lihat daftar standar tarif resmi tindakan medis, kamar perawatan, dan diagnostik penunjang.",
    href: "/billing",
  },
];

const column2Links: BillingLink[] = [
  {
    title: "Informasi Asuransi Rekanan",
    description: "Daftar puluhan mitra asuransi kesehatan swasta dan BPJS Kesehatan yang bekerjasama dengan Shilah.",
    href: "/billing",
  },
  {
    title: "Bantuan Finansial & Cicilan",
    description:
      "Pelajari fasilitas cicilan biaya fleksibel dan program bantuan keringanan sosial Yayasan Shilah Peduli.",
    href: "/billing",
  },
  {
    title: "Kepastian Biaya Pasien",
    description: "Pelajari hak Anda sebagai pasien untuk mendapatkan rincian estimasi biaya sebelum tindakan dilakukan.",
    href: "/billing",
  },
];

export function BillingAssistance() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-center text-[#222222] mb-10">
        Bantuan Pembayaran & Administrasi Tagihan
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {/* Left Column */}
        <ul className="space-y-4">
          {column1Links.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-[#0077C8] mt-2 mr-3 shrink-0" />
              <div className="text-[15px] sm:text-[16px] leading-relaxed text-[#333333]">
                <Link
                  href={item.href}
                  className="font-medium text-[#0077C8] hover:underline"
                >
                  {item.title}:
                </Link>{" "}
                <span>{item.description}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Right Column */}
        <ul className="space-y-4">
          {column2Links.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-[#0077C8] mt-2 mr-3 shrink-0" />
              <div className="text-[15px] sm:text-[16px] leading-relaxed text-[#333333]">
                <Link
                  href={item.href}
                  className="font-medium text-[#0077C8] hover:underline"
                >
                  {item.title}:
                </Link>{" "}
                <span>{item.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
