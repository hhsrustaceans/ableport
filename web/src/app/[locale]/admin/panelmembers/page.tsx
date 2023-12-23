import { useTranslations } from "next-intl";
import { PanelUserOverview } from "../components/PanelUserOverview";
import { CreateButton } from "../components/CreateButton";
import { SearchBar } from "../components/SearchBar";

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
    <section className="w-full flex justify-center mt-5">
      <article className="mx-3 lg:w-2/3 pb-4 overflow-x-scroll lg:overflow-x-hidden">
        <h1 className="text-3xl mb-5">{t("admin.dropdown.items.panelmembers")}</h1>
        <SearchBar label={t("admin.search.label.panelmember")} placeholder={t("admin.search.placeholder.panelmember")} />
        <PanelUserOverview heading={heading} />
        <CreateButton create={t("admin.overview.create.panelmember")} />
      </article>
    </section>
  );
}
