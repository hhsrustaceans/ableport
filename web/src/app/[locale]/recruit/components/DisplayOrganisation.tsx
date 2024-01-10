import { useTranslations } from "next-intl";
import { Organisation } from "../../types";

export function DisplayOrganisation({ organisation } : {organisation: Organisation[]}) {
  const t = useTranslations();

  return Array.from({ length: 5 })
    .map((): Organisation[] => ({...organisation}))
    .map((_: Organisation[]) => (
      <>
        {Object.values(_).map((organisations: Organisation, result: number) => (
          <div className="shadow-md rounded-2xl mb-3 grid grid-cols-1 p-3 bg-gray-200 dark:bg-gray-800" key={result}>
            <div className="recruit-view">
              <p>id: </p>
              <p>{organisations.id}</p>
            </div>
            <div className="recruit-view">
              <p>{t("recruit.organisation.type").concat(":")}</p>
              <p>{organisations.type}</p>
            </div>
            <div className="recruit-view">
              <p>{t("recruit.organisation.name").concat(":")}</p>
              <p>{organisations.name}</p>
            </div>
            <div className="recruit-view">
              <p>{t("recruit.organisation.description").concat(":")}</p>
              <p>{organisations.description}</p>
            </div>
            <div className="recruit-view">
              <p>{t("recruit.organisation.logo").concat(":")}</p>
              <p>{organisations.logo}</p>
            </div>
            <div className="recruit-view">
              <p>{t("recruit.organisation.website").concat(":")}</p>
              <p>{organisations.website}</p>
            </div>
            <div className="recruit-view">
              <p>{t("recruit.organisation.phoneNumber").concat(":")}</p>
              <p>{organisations.phoneNumber}</p>
            </div>
          </div>
        ))}
      </>
    ));
}
