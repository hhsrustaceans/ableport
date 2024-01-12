import { Organisation } from "../../types";
import { IconOption } from "./IconOption";

export function DisplayOrganisation({ 
  organisation, 
  recruit, 
  search
} : {
  organisation: Organisation[], 
  recruit: string[], 
  search: string
}) {
  const items: string[] = ["id", "type", "name", "description", "logo", "website", "phoneNumber"];

  return Array.from({ length: 3 })
    .map((): Organisation[] => structuredClone(organisation))
    .map((org: Organisation[]) => (
      <>
        {org.filter((organisations: any) => (
          items.some((item: string) => organisations[item].toString().toLocaleLowerCase().includes(search))
        ))
        .map((organisations: Organisation, result: number) => (
          <article className="shadow-md rounded-2xl mb-3 grid grid-cols-1 px-3 py-2 bg-gray-200 dark:bg-gray-800" key={result}>
            <div className="recruit-view">
              <div>
                {Object.values(recruit).map((recruit: string, result: number) => (
                  <p key={result} className="text-left">{recruit.concat(":")}</p>
                ))}
              </div>
              <div>
                {Object.values(organisations).map((orgs: string | number, result: number) => (
                  <p key={result} className="text-right">{orgs}</p>
                ))}
                <>{recruit.length - 1 == result ? null : <IconOption />}</>
              </div>
            </div>
          </article>
        ))}
      </>
    ));
}
