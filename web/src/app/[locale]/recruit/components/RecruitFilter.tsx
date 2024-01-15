import { useTranslations } from "next-intl";
import { ChangeEvent, useContext } from "react";
import Search from "~icons/mdi/search";
import { Context } from "./Context";

export function RecruitFilter() {
  const t = useTranslations();
  const {setSearch} = useContext(Context);

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
