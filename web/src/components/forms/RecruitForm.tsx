import { useTranslations } from "next-intl";
import { useState } from "react";
import { FirstStepForm } from "./FirstStepForm";
import { SecondStepForm } from "./SecondStepForm";

export function RecruitForm() {
  const t = useTranslations();
  const [step, setStep] = useState(0);

  const steps: React.ReactNode[] = [
    <FirstStepForm key={0} />,
    <SecondStepForm key={0} />
  ];

  const BackButton = ({ back }: { back: string }): JSX.Element => (
    <button onClick={PreviousStep} className="w-full action action-primary my-2">{back}</button>
  );
  
  const NextButton = ({ next }: { next: string }): JSX.Element => (
    <button onClick={NextStep} className="w-full action action-primary my-2">{next}</button>
  );  

  let PreviousStep = (): void => step > 0 ? setStep(step - 1) : console.log("Not allowed to go back!");
  let NextStep = (): void => step < steps.length - 1 ? setStep(step + 1) : console.log("Not allowed to go further!");
  let getProgress = (): string => step / (steps.length - 1) * 100 + "%";

  return (
    <form id="recruitForm" className="flex flex-col w-full">
      <progress style={{ width: getProgress(), height: "0.2rem", backgroundColor: "blue", transitionProperty: "width", 
        transitionDuration: "0.5s", position: "fixed", top: 0, left: 0 }}>
      </progress>
      {steps[step]}
      <div className="flex gap-5">
        <BackButton back={t("recruit.selection.back")} />
        <NextButton next={t("recruit.selection.next")} />
      </div>
    </form>
  );
}
