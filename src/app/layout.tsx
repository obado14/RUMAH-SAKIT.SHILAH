import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shilah Medicine - Kesehatan Anda, Prioritas Kami",
  description:
    "Shilah Medicine - Layanan kesehatan terdepan dan komprehensif. Temukan informasi dokter, lokasi klinik, jadwal temu, dan layanan medis terbaik.",
  icons: {
    icon: "/sites/hopkinsmedicine/images/shilah_logo_transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${notoSans.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#333333]">
        {children}
      </body>
    </html>
  );
}
