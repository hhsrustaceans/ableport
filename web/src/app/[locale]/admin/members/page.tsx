import { useTranslations } from "next-intl";
import { PanelUserOverview } from "../components/PanelUserOverview";
import { ContentOverview } from "../components/ContentOverview";
import type { Content } from "../../types";

export default function PanelMembersPage() {
  const t = useTranslations();

  let heading: string[] = [
    t("admin.id"),
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
      contentHeading: t("admin.dropdown.items.panelmembers"),
      searchLabel: t("admin.search.label.panelmember"),
      searchPlaceholder: t("admin.search.placeholder.panelmember"),
      filterLabel: t("admin.filter.label.panelmember"),
      createButton: t("admin.overview.create.panelmember"),
    }
  ];

  return (
    <ContentOverview overview={<PanelUserOverview heading={heading} />} content={content} />
  );
}
