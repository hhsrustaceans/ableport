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

  const [change, setChange] = useState<Organisation>({
    id: 3,
    type: "",
    name: "",
    description: "",
    logo: "",
    website: "",
    phonenumber: "",
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
      phonenumber: change.phonenumber
    } satisfies Organisation,
    {
      id: 2,
      type: "Test",
      name: "test",
      description: "test",
      logo: "test",
      website: "test",
      phonenumber: "31612345678"
    } satisfies Organisation,
    {
      id: 1,
      type: "More Test",
      name: "more test",
      description: "more test",
      logo: "more test",
      website: "more test",
      phonenumber: "31687654321"
    } satisfies Organisation,
  ];

  return (
    <section className="flex justify-center">
      <article className="w-full grid grid-cols-1 lg:w-2/3 mx-3 lg:mx-0" style={{width: "1024px"}}>
        <article className="flex justify-start">
          <h1 className="mt-2 md:mt-4 mb-3 text-3xl focus:outline focus:outline-gray-400 focus:outline-4" tabIndex={0}>
            {t("recruit.title")}
          </h1>
        </article>
        <article className="inline-block gap-0 sm:flex sm:gap-5 mb-2">
          <RecruitFilter setSearch={setSearch} />
          <ButtonCreate setChange={setChange} change={change} setShowContent={setShowContent} />
        </article>
        <DisplayOrganisation organisation={organisation} search={search} showContent={showContent} />
      </article>
    </section>
  );
}
