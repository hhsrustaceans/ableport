import { useTranslations } from "next-intl";
import { ChangeEvent } from "react";
import Search from "~icons/mdi/search";
import { Dispatch, SetStateAction } from "react";

export function RecruitFilter({ setSearch } : { setSearch: Dispatch<SetStateAction<string>> }) {
  const t = useTranslations();

  return (
    <>
      <i className="absolute pl-3 hidden sm:inline-block">
        <Search width={33} height={66} />
      </i>
      <input 
        type="search" 
        placeholder={t("recruit.search")} 
        className="cta action rounded-2xl text-lg w-full mt-0 text-center sm:text-left px-10 duration-500 ease-in-out" 
        onChange={(event: ChangeEvent<Element>) => setSearch((event.target as HTMLInputElement).value)}
      />
    </>
  );
}
