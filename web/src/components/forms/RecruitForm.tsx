import { useTranslations } from "next-intl";
import { ReactNode, useState } from "react";
import { FirstStepForm } from "./FirstStepForm";
import { SecondStepForm } from "./SecondStepForm";

export function RecruitForm() {
  const t = useTranslations();
  const [step, setStep] = useState(0);

  const recruitType: string[] = [
    t("recruit.recruitType.nonprofit"), 
    t("recruit.recruitType.company"), 
    t("recruit.recruitType.other"), 
    t("recruit.recruitType.government")
  ];

  const steps: ReactNode[] = [
    <FirstStepForm key={0} recruitType={recruitType} />,
    <SecondStepForm key={0} />
  ];

  const BackButton = (): JSX.Element => ( 
    step > 0 ? <button onClick={PreviousStep} className="w-full action action-primary my-2">{t("recruit.selection.back")}</button> : 
    <></>
  );
  
  const NextButton = (): JSX.Element => (
    <button onClick={NextStep} className="w-full action action-primary my-2">
      {step == steps.length - 1 ? t("recruit.selection.submit") : t("recruit.selection.next")}
    </button>
  );

  let PreviousStep = (): void | JSX.Element => step > 0 ? setStep(step - 1) : <></>;
  let NextStep = (): void | JSX.Element => step < steps.length - 1 ? setStep(step + 1) : <></>;
  let getProgress = (): string => step / (steps.length - 1) * 100 + "%";

  return (
    <form id="recruitForm" className="flex flex-col w-full">
      <progress style={{ width: getProgress(), height: "0.2rem", backgroundColor: "blue", transitionProperty: "width", 
        transitionDuration: "0.5s", position: "fixed", top: 0, left: 0 }}>
      </progress>
      {steps[step]}
      <article className="flex gap-5">
        <BackButton />
        <NextButton />
      </article>
    </form>
  );
}
