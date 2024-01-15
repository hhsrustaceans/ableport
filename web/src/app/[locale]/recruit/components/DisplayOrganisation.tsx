import { useTranslations } from "next-intl";
import { Organisation } from "../../types";
import { IconOption } from "./IconOption";
import { useContext } from "react";
import { Context } from "./Context";

export function DisplayOrganisation() {
  const t = useTranslations();
  const {organisation, search, showContent} = useContext(Context);
  const items: string[] = ["id", "type", "name", "description", "logo", "website", "phoneNumber"];

  let recruit: string[] = [
    t("recruit.organisation.id"), t("recruit.organisation.type"),
    t("recruit.organisation.name"), t("recruit.organisation.description"),
    t("recruit.organisation.logo"), t("recruit.organisation.website"),
    t("recruit.organisation.phoneNumber"), t("recruit.option")
  ];

  return Array.from({ length: 1 })
    .map((): Organisation[] => structuredClone(organisation))
    .map((org: Organisation[]) => (
      <>
        {org.filter((organisations: any) => (
          items.some((item: string) => organisations[item].toString().includes(search))
        ))
        .map((organisations: Organisation, result: number) => (organisations.id != 3 || showContent) && 
          <section className="shadow-md rounded-2xl mb-3 grid grid-cols-1 px-7 py-5 bg-gray-200 dark:bg-gray-800 focus:outline 
          focus:outline-gray-400 focus:outline-4" key={result} tabIndex={0}>
            <article className="recruit-view">
              <div>
                {Object.values(recruit).slice(1).map((recruit: string, result: number) => (
                  <p key={result} className="text-left focus:outline focus:outline-gray-400 focus:outline-4" tabIndex={0}>
                    {recruit.concat(":")}
                  </p>
                ))}
              </div>
              <div>
                {Object.values(organisations).slice(1).map((orgs: string | number, result: number) => (
                  <p key={result} className="text-right focus:outline focus:outline-gray-400 focus:outline-4" tabIndex={0}>
                    {orgs}
                  </p>
                ))}
                {recruit.length - 1 == result ? null : <IconOption />}
              </div>
            </article>
          </section>
        )}
      </>
    ));
}
