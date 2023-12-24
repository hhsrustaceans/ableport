import { useTranslations } from "next-intl";
import { OrganisationOverview } from "../components/OrganisationOverview";
import { ContentOverview } from "../components/ContentOverview";
import type { Content } from "../../types";

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

  let content: Content[] = [
    {
      contentHeading: t("admin.dropdown.items.panelmembers"),
      searchLabel: t("admin.search.label.panelmember"),
      searchPlaceholder: t("admin.search.placeholder.panelmember"),
      filterLabel: t("admin.filter.label.panelmember"),
      createButton: t("admin.overview.create.panelmember"),
    }
  ];

  return (
    <ContentOverview overview={<OrganisationOverview heading={heading} />} content={content} />
  );
}
