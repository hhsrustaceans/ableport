import { useTranslations } from "next-intl";

export function RecruitFilter() {
  const t = useTranslations();

  return (
    <input type="search" placeholder={t("recruit.search")} className="cta action rounded-2xl text-lg w-full mt-5 sm:mt-0" />
  );
}
