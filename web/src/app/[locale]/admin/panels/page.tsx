import { useTranslations } from "next-intl";
import { Sidebar } from "../components/Sidebar";
import { PanelOverview } from "../components/PanelOverview";
import { CreateButton } from "../components/CreateButton";

export default function PanelsPage() {
  const t = useTranslations();

  let heading: string[] = [
    t("admin.panel.id"),
    t("admin.panel.organisation"),
    t("admin.panel.title"),
    t("admin.panel.description"),
    //t("admin.panel.content"),
    t("admin.panel.activePeriod"),
    /*t("admin.panel.location"),
    t("admin.panel.reward"),
    t("admin.panel.studyType"),*/
    t("admin.overview.update"),
    t("admin.overview.delete"),
  ];

  return (
    <section className="w-full grid grid-cols-12 mt-5">
      <Sidebar />
      <article className="col-span-12 sm:col-span-9 mx-5 lg:w-2/3">
        <h1 className="text-3xl">{t("admin.dropdown.items.panels")}</h1>
        <PanelOverview heading={heading} />
        <CreateButton />
      </article>
    </section>
  );
}
