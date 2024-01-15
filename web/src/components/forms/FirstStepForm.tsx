import { useTranslations } from "next-intl";
import { ChangeEvent } from "react";

export function FirstStepForm({ 
  recruitType, 
  recruitChange, 
} : { 
  recruitType: string[], 
  recruitChange: (event: ChangeEvent<HTMLInputElement>) => void 
}) {
  const t = useTranslations();
  const listType: string[] = [t("recruit.organisation.type")];
  const attrs: string[] = [t("recruit.organisation.name"), t("recruit.organisation.description")];
  
  return (
    <>
      {Object.values(listType).map((type: string, result: number) => (
        <>
          <label htmlFor={type} className="recruit-label" key={result}>{type}</label>
          <input autoFocus={true} name={type} required={true} placeholder={t("recruit.placeholder").concat(" ").concat(type)} 
            type="text" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 my-1" key={result} 
            list={"recruit-type"} onChange={recruitChange}
          />
          <datalist id={"recruit-type"}>
            {Object.values(recruitType).map((recruitTypes: string, result: number) => (
              <option value={recruitTypes} key={result}></option>
            ))}
          </datalist>
        </>
      ))}
      {Object.values(attrs).map((attr: string, result: number) => (
        <>
          <label htmlFor={attr} className="recruit-label" key={result}>{attr}</label>
          <input autoFocus={false} name={attr} required={true} placeholder={t("recruit.placeholder").concat(" ").concat(attr)} 
            type="text" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 my-1" key={result}
            onChange={recruitChange}
          />
        </>
      ))}
    </>
  );
}
