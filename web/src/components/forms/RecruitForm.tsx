import { useTranslations } from "next-intl";

const BackButton = ({ back }: { back: string }): JSX.Element => <button className="w-full action action-primary my-2">{back}</button>;
const NextButton = ({ next }: { next: string }): JSX.Element => <button className="w-full action action-primary my-2">{next}</button>;

export function RecruitForm() {
  const t = useTranslations();

  const attrs: string[] = [
    t("recruit.organisation.type"),
    t("recruit.organisation.name"),
    t("recruit.organisation.description"),
  ];

  return (
    <form id="recruitForm" className="flex flex-col w-full">
      {Object.values(attrs).map((attr: string, result: number) => (
        <>
          <label htmlFor={attr} className="recruit-label" key={result}>{attr}</label>
          <input autoFocus={true} name={attr} required={true} placeholder={t("recruit.placeholder").concat(" ").concat(attr)} 
            type="text" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 my-1" key={result}
          />
        </>
      ))}
      <div className="flex gap-5">
        <BackButton back={t("recruit.selection.back")} />
        <NextButton next={t("recruit.selection.next")} />
      </div>
    </form>
  );
}
