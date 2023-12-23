//import Search from "~icons/tabler/search";
import { useTranslations } from "next-intl";

export function SearchBar( { label, placeholder } : { label: string, placeholder: string }) {
  const t = useTranslations();

  return (
    <>
      <label htmlFor="searchPanel">{label}</label>
      <input 
        id="searchPanel" 
        className="w-full rounded-md bg-none outline-none px-2 text-black border-green-600 border-2" 
        placeholder={placeholder}
        type="search" 
      />
      {/*<Search />*/}
    </>
  );
}
