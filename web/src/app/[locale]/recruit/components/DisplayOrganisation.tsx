import { Organisation } from "../../types";
import { IconOption } from "./IconOption";

export function DisplayOrganisation({ 
  organisation, 
  recruit, 
  search, 
  count, 
  showContent
} : {
  organisation: Organisation[], 
  recruit: string[], 
  search: string, 
  count: () => void, 
  showContent: boolean
}) {
  const items: string[] = ["id", "type", "name", "description", "logo", "website", "phoneNumber"];

  return Array.from({ length: 1 })
    .map((): Organisation[] => structuredClone(organisation))
    .map((org: Organisation[]) => (
      <>
        {org.filter((organisations: any) => (
          items.some((item: string) => organisations[item].toString().includes(search))
        ))
        .map((organisations: Organisation, result: number) => (
          showContent && <section 
            className="shadow-md rounded-2xl mb-3 grid grid-cols-1 px-4 py-2 bg-gray-200 dark:bg-gray-800 focus:outline 
          focus:outline-gray-400 focus:outline-4"  
            key={result}
            tabIndex={0}
          >
            <article className="recruit-view">
              <div>
                {Object.values(recruit).map((recruit: string, result: number) => (
                  <p key={result} className="text-left focus:outline focus:outline-gray-400 focus:outline-4" tabIndex={0}>
                    {recruit.concat(":")}
                  </p>
                ))}
              </div>
              <div>
                {Object.values(organisations).map((orgs: string | number, result: number) => (
                  <p key={result} className="text-right focus:outline focus:outline-gray-400 focus:outline-4" tabIndex={0}>
                    {orgs}
                  </p>
                ))}
                <>{recruit.length - 1 == result ? null : <IconOption />}</>
              </div>
            </article>
          </section>
        ))}
      </>
    ));
}
