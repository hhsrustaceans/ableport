import { useTranslations } from "next-intl";
import { Sidebar } from "../components/Sidebar";

export default function CompaniesPage() {
  const t = useTranslations();

  return (
    <section className="w-full grid grid-cols-12 mt-5">
      <Sidebar />
      <article className="col-span-12 sm:col-span-9 mx-5 lg:w-2/3">
        <h1 className="text-3xl">{t("admin.dropdown.items.companies")}</h1>
      </article>
    </section>
  );
}
