import { useTranslations } from "next-intl";
import { OrganisationOverview } from "../components/OrganisationOverview";
import { ContentOverview } from "../components/ContentOverview";
import type { Content } from "../../types";

export default function OrganisationsPage() {
  const t = useTranslations();

  let heading: string[] = [
    t("admin.id"),
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
      contentHeading: t("admin.dropdown.items.organisations"),
      searchLabel: t("admin.search.label.organisation"),
      searchPlaceholder: t("admin.search.placeholder.organisation"),
      filterLabel: t("admin.filter.label.organisation"),
      createButton: t("admin.overview.create.organisation"),
    }
  ];

  return (
    <ContentOverview overview={<OrganisationOverview heading={heading} />} content={content} />
  );
}
