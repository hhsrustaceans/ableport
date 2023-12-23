import { useTranslations } from "next-intl";
import { OrganisationOverview } from "../components/OrganisationOverview";
import { CreateButton } from "../components/CreateButton";
import { SearchBar } from "../components/SearchBar";

export default function OrganisationsPage() {
  const t = useTranslations();

  let heading: string[] = [
    t("admin.organisation.id"),
    t("admin.organisation.type"),
    t("admin.organisation.name"),
    t("admin.organisation.description"),
    t("admin.organisation.logo"),
    t("admin.organisation.website"),
    t("admin.organisation.phoneNumber"),
    t("admin.overview.update"),
    t("admin.overview.delete"),
  ];

  return (
    <section className="w-full flex justify-center mt-5">
      <article className="mx-3 lg:w-2/3 pb-4 overflow-x-scroll lg:overflow-x-hidden">
        <h1 className="text-3xl mb-5">{t("admin.dropdown.items.organisations")}</h1>
        <SearchBar label={t("admin.search.label.organisation")} placeholder={t("admin.search.placeholder.organisation")} />
        <OrganisationOverview heading={heading} />
        <CreateButton create={t("admin.overview.create.organisation")} />
      </article>
    </section>
  );
}
