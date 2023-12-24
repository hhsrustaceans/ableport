import { useTranslations } from "next-intl";
import { PanelOverview } from "../components/PanelOverview";
import { ContentOverview } from "../components/ContentOverview";
import type { Content } from "../../types";

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

  let content: Content[] = [
    {
      contentHeading: t("admin.dropdown.items.panels"),
      searchLabel: t("admin.search.label.panel"),
      searchPlaceholder: t("admin.search.placeholder.panel"),
      filterLabel: t("admin.filter.label.panel"),
      createButton: t("admin.overview.create.panel"),
    }
  ];

  return (
    <ContentOverview overview={<PanelOverview heading={heading} />} content={content} />
  );
}
