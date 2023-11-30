import type { Metadata } from "next";
import { languages } from "@/lib/modules/i18n";
import { notFound } from "next/navigation";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Ableport",
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!languages.includes(locale)) return notFound();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
