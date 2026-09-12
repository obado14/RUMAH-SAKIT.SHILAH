import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fakultas Kedokteran Shilah | Shilah School of Medicine",
  description:
    "Institusi pendidikan kedokteran terkemuka yang mencetak dokter, peneliti, dan spesialis medis masa depan.",
};

export default function SomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
