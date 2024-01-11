import { useTranslations } from "next-intl";

function BackButton() {
  return (
    <button className="w-full action action-primary my-2">Back</button>
  );
}

function NextButton() {
  return (
    <button className="w-full action action-primary my-2">Next</button>
  );
}

export function RecruitForm() {
  const t = useTranslations();

  return (
    <form id="recruitForm" className="flex flex-col w-full">
      <label htmlFor="type" className="recruit-label">{t("recruit.organisation.type")}</label>
      <input 
        autoFocus={true} 
        name="type" 
        required={true} 
        placeholder={t("recruit.placeholder").concat(" ").concat(t("recruit.organisation.type"))} 
        type="text" 
        className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 my-1" 
      />
      <label htmlFor="name" className="recruit-label">{t("recruit.organisation.name")}</label>
      <input 
        autoFocus={true} 
        name="name" 
        required={true} 
        placeholder={t("recruit.placeholder").concat(" ").concat(t("recruit.organisation.name"))} 
        type="text" 
        className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 my-1" 
      />
      <label htmlFor="description" className="recruit-label">{t("recruit.organisation.description")}</label>
      <input 
        autoFocus={true} 
        name="description" 
        required={true} 
        placeholder={t("recruit.placeholder").concat(" ").concat(t("recruit.organisation.description"))} 
        type="text" 
        className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 my-1"
      />
      <div className="flex gap-5">
        <BackButton />
        <NextButton />
      </div>
    </form>
  );
}
