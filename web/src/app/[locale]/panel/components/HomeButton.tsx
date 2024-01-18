import { Link } from "@/lib/modules/navigation";
import { useTranslations } from "next-intl";

export function HomeButton() {
  const t = useTranslations();

  return (
    <Link className="action inline-block" href="/panel">
      {t("panel.back")}
    </Link>
  );
}
