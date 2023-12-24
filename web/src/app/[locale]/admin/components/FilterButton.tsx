import { useTranslations } from "next-intl";

export function FilterButton( { label } : { label: string }) {
  const t = useTranslations();

  return (
    <div className="grid grid-cols-1">
      <label htmlFor="filterResult">{label}</label>
      <select 
        id="filterResult"
        className="bg-green-600 rounded-md outline-none p-2"
      >
        <option value={t("admin.filter.option").concat("0")} selected disabled>{t("admin.filter.option")}</option>
        <option value={t("admin.filter.option").concat("1")}>{t("admin.filter.option")} 5</option>
        <option value={t("admin.filter.option").concat("2")}>{t("admin.filter.option")} 10</option>
        <option value={t("admin.filter.option").concat("3")}>{t("admin.filter.option")} 25</option>
      </select>
    </div>
  );
}
