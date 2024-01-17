"use client";

import { Link } from "@/lib/modules/navigation";
import { useTranslations } from "next-intl";

export function HomeButton({ color } : { color: string }) {
  const t = useTranslations();

  return (
    <Link href={"/panel"}>
      <button className={`cta action ${color == "" ? "" : color}`}>
        {t("panel.back")}
      </button>
    </Link>
  );
}
