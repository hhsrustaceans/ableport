import { useTranslations } from "next-intl";
import { Dispatch, ReactNode, SetStateAction } from "react";

export function NextButton({ 
  step, 
  setStep, 
  steps 
} : { 
  step: number, 
  setStep: Dispatch<SetStateAction<number>>, 
  steps: ReactNode[] 
}) {
  const t = useTranslations();
  let NextStep = (): void | JSX.Element => step < steps.length - 1 ? setStep(step + 1) : <></>;

  return (
    <button onClick={NextStep} className="w-full action action-primary my-2">
      {step == steps.length - 1 ? t("recruit.selection.submit") : t("recruit.selection.next")}
    </button>
  );
}
