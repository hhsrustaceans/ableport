"use client";

import { Link } from "@/lib/modules/navigation";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export function HomeButton() {
  const t = useTranslations();
  const router = useRouter();

  return (
    <Link href={"/./panel"}>
      <button className="cta action action-primary" onClick={(): void => router.push("/./panel")}>
        {t("panel.back")}
      </button>
    </Link>
  );
}
