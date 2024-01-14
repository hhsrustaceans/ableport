"use client";

import { useTranslations } from "next-intl";
import { DisplayOrganisation } from "../components/DisplayOrganisation";
import { ButtonCreate } from "../components/ButtonCreate";
import { RecruitFilter } from "../components/RecruitFilter";
import { NewOrganisation } from "../components/NewOrganisation";

export default function RecruitPage() {
  const t = useTranslations();

  return (
    <section className="flex justify-center">
      <article className="w-full grid grid-cols-1 lg:w-2/3 mx-3 lg:mx-0" style={{width: "1024px"}}>
        <NewOrganisation>
          <article className="flex justify-start">
            <h1 className="mt-2 md:mt-4 mb-3 text-3xl focus:outline focus:outline-gray-400 focus:outline-4" tabIndex={0}>
              {t("recruit.title")}
            </h1>
          </article>
          <article className="inline-block gap-0 sm:flex sm:gap-5 mb-2">
            <RecruitFilter />
            <ButtonCreate />
          </article>
          <DisplayOrganisation />
        </NewOrganisation>
      </article>
    </section>
  );
}
