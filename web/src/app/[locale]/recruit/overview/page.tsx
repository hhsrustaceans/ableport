import { useTranslations } from "next-intl";
import { Organisation } from "../../types";

function DisplayOrganisation(organisation: Organisation[]) {
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
    },
  ];

  return (
    <section className="flex justify-center">
      <article className="w-full grid grid-cols-1 lg:w-2/3 mx-3 lg:mx-0" style={{width: "1024px"}}>
        <h1 className="mt-2 mb-4 md:my-4 text-2xl">{t("recruit.title")}</h1>
        <article>
          {DisplayOrganisation(organisation)}
        </article>
      </article>
    </section>
  );
}
