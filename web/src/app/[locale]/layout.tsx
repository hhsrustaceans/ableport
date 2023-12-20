import type { Metadata } from "next";
import { localeCodes } from "@/lib/modules/i18n";
import { notFound } from "next/navigation";
import "@/app/globals.css";
import {Providers} from "./providers";

export const metadata: Metadata = {
  title: "Ableport",
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
      <body>
        <Providers>{children}</Providers>  
      </body>
    </html>
  );
}
