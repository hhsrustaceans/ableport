import { useTranslations } from "next-intl";
import Link from "next/link";

export function ButtonCreate() {
  const t = useTranslations();

  return (
    <Link href={""} className="cta action action-primary rounded-2xl duration-500 ease-in-out text-lg">
      {t("recruit.create")}
    </Link>
  );
}
