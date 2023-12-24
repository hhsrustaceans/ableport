import { useTranslations } from "next-intl";

export function FilterButton( { label } : { label: string }) {
  const t = useTranslations();
  const options: number[] = [5, 10, 25];

  return (
    <div className="grid grid-cols-1">
      <label htmlFor="filterResult">{label}</label>
      <select 
        id="filterResult"
        className="bg-green-600 rounded-md outline-none p-2"
        defaultValue={5}
      >
        {Object.values(options).map((result: number) => (
          <option value={t("admin.filter.option").concat((result + 1).toString())} key={result}>
            {t("admin.filter.option")} {result}
          </option>
        ))}
      </select>
    </div>
  );
}
