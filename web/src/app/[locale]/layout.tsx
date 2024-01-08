import type { Metadata } from "next";
import { localeCodes } from "@/lib/modules/i18n";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Ableport",
  description: "Ableport",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!localeCodes.includes(locale)) return notFound();

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
