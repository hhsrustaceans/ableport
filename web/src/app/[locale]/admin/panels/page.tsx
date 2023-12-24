import { useTranslations } from "next-intl";
import { PanelOverview } from "../components/PanelOverview";
import { CreateButton } from "../components/CreateButton";
import { SearchBar } from "../components/SearchBar";
import { FilterButton } from "../components/FilterButton";

export default function PanelsPage() {
  const t = useTranslations();

  let heading: string[] = [
    t("admin.panel.id"),
    t("admin.panel.organisation"),
    t("admin.panel.title"),
    t("admin.panel.description"),
    t("admin.panel.content"),
    t("admin.panel.activePeriod"),
    t("admin.panel.location"),
    t("admin.panel.reward"),
    t("admin.panel.studyType"),
    t("admin.overview.update"),
    t("admin.overview.delete"),
  ];

  return (
    <section className="display-section">
      <article className="article-content">
        <h1 className="display-heading">{t("admin.dropdown.items.panels")}</h1>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
          <SearchBar label={t("admin.search.label.panel")} placeholder={t("admin.search.placeholder.panel")} />
          <FilterButton label={t("admin.filter.label.panel")} />
        </article>
        <PanelOverview heading={heading} />
        <CreateButton create={t("admin.overview.create.panel")} />
      </article>
    </section>
  );
}
