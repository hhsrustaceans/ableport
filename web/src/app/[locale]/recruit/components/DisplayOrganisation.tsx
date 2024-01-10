import { Organisation } from "../../types";
import { IconOption } from "./IconOption";

export function DisplayOrganisation({ organisation, recruit } : {organisation: Organisation[], recruit: string[]}) {
  return Array.from({ length: 3 })
    .map((): Organisation[] => ({...organisation}))
    .map((org: Organisation[]) => (
      <>
        {Object.values(org).map((organisations: Organisation, result: number) => (
          <article 
            className="shadow-md rounded-2xl mb-3 grid grid-cols-1 p-3 bg-gray-200 dark:bg-gray-800 hover:scale-105 duration-500 ease-in-out" 
            key={result}
          >
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
