import { useTranslations } from "next-intl";
import { PanelUserOverview } from "../components/PanelUserOverview";
import { ContentOverview } from "../components/ContentOverview";
import type { Content } from "../../types";

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
    <ContentOverview overview={<PanelUserOverview heading={heading} />} content={content} />
  );
}
