import { useTranslations } from "next-intl";
import { Organisation } from "../../types";

export function DisplayOrganisation({ organisation, recruit } : {organisation: Organisation[], recruit: string[]}) {
  const t = useTranslations();

  return Array.from({ length: 5 })
    .map((): Organisation[] => ({...organisation}))
    .map((_: Organisation[]) => (
      <>
        {Object.values(_).map((organisations: Organisation, result: number) => (
          <div 
            className="shadow-md rounded-2xl mb-3 grid grid-cols-1 p-3 bg-gray-200 dark:bg-gray-800 hover:scale-105 duration-500 ease-in-out" 
            key={result}
          >
            {Object.values(recruit).map((recruit: string, result: number) => (
              <div className="recruit-view" key={result}>
                <p>{recruit.concat(":")}</p>
                <p>{organisations.name}</p>
              </div>
            ))}
          </div>
        ))}
      </>
    ));
}
