'use client';
import { useTranslations } from "next-intl";
import Link from "next/link";

function Redirect() {
  window.location.replace("../login");
}

export default function Button() {
  const t = useTranslations();

  return (
    <Link href="../register" className="w-full my-4 flex gap-1 action action-primary">
      <span>{t("common.account.register")}</span>
    </Link>
  );
}
