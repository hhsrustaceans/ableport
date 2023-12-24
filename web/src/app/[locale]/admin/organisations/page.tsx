import { useTranslations } from "next-intl";
import { OrganisationOverview } from "../components/OrganisationOverview";
import { CreateButton } from "../components/CreateButton";
import { SearchBar } from "../components/SearchBar";
import { FilterButton } from "../components/FilterButton";

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
    <section className="display-section">
      <article className="article-content">
        <h1 className="display-heading">{t("admin.dropdown.items.organisations")}</h1>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
          <SearchBar label={t("admin.search.label.organisation")} placeholder={t("admin.search.placeholder.organisation")} />
          <FilterButton label={t("admin.filter.label.organisation")} />
        </article>
        <OrganisationOverview heading={heading} />
        <CreateButton create={t("admin.overview.create.organisation")} />
      </article>
    </section>
  );
}
