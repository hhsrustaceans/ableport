import { useTranslations } from "next-intl";
import { Organisation } from "../../types";
import { DisplayOrganisation } from "../components/DisplayOrganisation";
import { ButtonCreate } from "../components/ButtonCreate";

export default function RecruitPage() {
  const t = useTranslations();

  const organisation: Organisation[] = [
    {
      id: 1,
      type: "test",
      name: "test",
      description: "test",
      logo: "test",
      website: "test",
      phoneNumber: "test"
    } satisfies Organisation,
  ];

  let recruit: string[] = [
    t("recruit.organisation.id"),
    t("recruit.organisation.type"),
    t("recruit.organisation.name"),
    t("recruit.organisation.description"),
    t("recruit.organisation.logo"),
    t("recruit.organisation.website"),
    t("recruit.organisation.phoneNumber"),
    t("recruit.option")
  ];

  return (
    <section className="flex justify-center">
      <article className="w-full grid grid-cols-1 lg:w-2/3 mx-3 lg:mx-0" style={{width: "1024px"}}>
        <h1 className="mt-2 md:mt-4 mb-3 text-3xl">{t("recruit.title")}</h1>
        <ButtonCreate />
        <DisplayOrganisation organisation={organisation} recruit={recruit} />
      </article>
    </section>
  );
}
