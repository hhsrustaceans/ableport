import { useTranslations } from "next-intl";
import { PanelOverview } from "../components/PanelOverview";
import { CreateButton } from "../components/CreateButton";
import { SearchBar } from "../components/SearchBar";

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
    <section className="w-full flex justify-center mt-5">
      <article className="mx-3 lg:w-2/3 pb-4 overflow-x-scroll lg:overflow-x-hidden">
        <h1 className="text-3xl mb-5">{t("admin.dropdown.items.panels")}</h1>
        <SearchBar />
        <PanelOverview heading={heading} />
        <CreateButton />
      </article>
    </section>
  );
}
