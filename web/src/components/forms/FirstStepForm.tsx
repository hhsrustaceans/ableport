import { useTranslations } from "next-intl";

export function FirstStepForm() {
  const t = useTranslations();

  const attrs: string[] = [
    t("recruit.organisation.type"),
    t("recruit.organisation.name"),
    t("recruit.organisation.description"),
  ];
  
  return (
    <>
      {Object.values(attrs).map((attr: string, result: number) => (
        <>
          <label htmlFor={attr} className="recruit-label" key={result}>{attr}</label>
          <input autoFocus={true} name={attr} required={true} placeholder={t("recruit.placeholder").concat(" ").concat(attr)} 
            type="text" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 my-1" key={result}
          />
        </>
      ))}
    </>
  );
}
