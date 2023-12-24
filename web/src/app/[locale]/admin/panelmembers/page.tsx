import { useTranslations } from "next-intl";
import { PanelUserOverview } from "../components/PanelUserOverview";
import { CreateButton } from "../components/CreateButton";
import { SearchBar } from "../components/SearchBar";
import { FilterButton } from "../components/FilterButton";

export default function PanelMembersPage() {
  const t = useTranslations();

  let heading: string[] = [
    t("admin.panelmember.id"),
    t("admin.panelmember.firstName"),
    t("admin.panelmember.lastName"),
    t("admin.panelmember.email"),
    t("admin.panelmember.phoneNumber"),
    t("admin.panelmember.dateOfBirth"),
    t("admin.panelmember.avatarUrl"),
    t("admin.overview.update"),
    t("admin.overview.delete"),
  ];

  return (
    <section className="display-section">
      <article className="article-content">
        <h1 className="display-heading">{t("admin.dropdown.items.panelmembers")}</h1>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
          <SearchBar label={t("admin.search.label.panelmember")} placeholder={t("admin.search.placeholder.panelmember")} />
          <FilterButton label={t("admin.filter.label.panelmember")} />
        </article>
        <PanelUserOverview heading={heading} />
        <CreateButton create={t("admin.overview.create.panelmember")} />
      </article>
    </section>
  );
}
