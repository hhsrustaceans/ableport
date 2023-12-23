//import Search from "~icons/tabler/search";
import { useTranslations } from "next-intl";

export function SearchBar() {
  const t = useTranslations();

  return (
    <>
      <label htmlFor="searchPanel">{t("admin.search.label")}</label>
      <input 
        id="searchPanel" 
        className="w-full rounded-md bg-none outline-none px-2 text-black border-green-600 border-2" 
        placeholder={t("admin.search.placeholder")}
        type="search" 
      />
      {/*<Search />*/}
    </>
  );
}
