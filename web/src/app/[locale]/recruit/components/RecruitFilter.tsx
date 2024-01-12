import { useTranslations } from "next-intl";
import Search from "~icons/mdi/search";

export function RecruitFilter() {
  const t = useTranslations();

  return (
    <>
      <i className="absolute pl-3 hidden sm:inline-block">
        <Search width={33} height={66} />
      </i>
      <input type="search" placeholder={t("recruit.search")} className="cta action rounded-2xl text-lg w-full mt-5 sm:mt-0 
        text-center sm:text-left px-10" 
      />
    </>
  );
}
