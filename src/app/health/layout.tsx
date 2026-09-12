import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informasi & Panduan Kesehatan | Shilah Medicine",
  description:
    "Pusat edukasi dan artikel kesehatan terpercaya dari para dokter dan spesialis Shilah Medicine.",
};

export default function HealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
