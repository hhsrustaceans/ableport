import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";

export function BackButton({ step, setStep } : { step: number, setStep: Dispatch<SetStateAction<number>> }) {
  const t = useTranslations();
  let PreviousStep = (): void | JSX.Element => step > 0 ? setStep(step - 1) : <></>;

  return (step > 0 ? 
    <button onClick={PreviousStep} className="w-full action action-primary my-2">{t("recruit.selection.back")}</button> : <></>
  );
}
