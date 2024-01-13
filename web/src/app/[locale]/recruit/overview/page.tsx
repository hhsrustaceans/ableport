"use client";

import { useTranslations } from "next-intl";
import { Organisation } from "../../types";
import { DisplayOrganisation } from "../components/DisplayOrganisation";
import { ButtonCreate } from "../components/ButtonCreate";
import { RecruitFilter } from "../components/RecruitFilter";
import { useState } from "react";

export default function RecruitPage() {
  const t = useTranslations();
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(0);
  const count = (): void => setCounter(counter + 1);

  const [change, setChange] = useState<Organisation>({
    id: counter,
    type: "",
    name: "",
    description: "",
    logo: "",
    website: "",
    phoneNumber: "",
  });

  const [showContent, setShowContent] = useState(false);

  const organisation: Organisation[] = [
    {
      id: change.id,
      type: change.type,
      name: change.name,
      description: change.description,
      logo: change.logo,
      website: change.website,
      phoneNumber: change.phoneNumber
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
        <article className="flex justify-start">
          <h1 className="mt-2 md:mt-4 mb-3 text-3xl focus:outline focus:outline-gray-400 focus:outline-4" tabIndex={0}>
            {t("recruit.title")}
          </h1>
        </article>
        <article className="inline-block gap-0 sm:flex sm:gap-5 mb-0">
          <RecruitFilter setSearch={setSearch} />
          <ButtonCreate setChange={setChange} change={change} setShowContent={setShowContent} />
        </article>
        <DisplayOrganisation organisation={organisation} recruit={recruit} search={search} count={count} showContent={showContent} />
      </article>
    </section>
  );
}
