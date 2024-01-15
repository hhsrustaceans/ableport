import { useTranslations } from "next-intl";
import { ReactNode, useState, FormEvent, ChangeEvent, useContext } from "react";
import { FirstStepForm } from "./FirstStepForm";
import { SecondStepForm } from "./SecondStepForm";
import { Context } from "@/app/[locale]/recruit/components/Context";
import { BackButton } from "../buttons/BackButton";
import { NextButton } from "../buttons/NextButton";

export function RecruitForm({ toggle } : { toggle: () => void }) {
  const t = useTranslations();
  const [step, setStep] = useState(0);
  const {setChange, change, setShowContent} = useContext(Context);
  const getProgress = (): string => step / (steps.length - 1) * 100 + "%";

  const recruitType: string[] = [
    t("recruit.recruitType.nonprofit"), 
    t("recruit.recruitType.company"), 
    t("recruit.recruitType.other"), 
    t("recruit.recruitType.government")
  ];

  const recruitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setChange({...change, [event.target.name]: event.target.value});
  };

  const steps: ReactNode[] = [
    <FirstStepForm key={0} recruitType={recruitType} recruitChange={recruitChange} />,
    <SecondStepForm key={0} recruitChange={recruitChange} />
  ];

  const recruitSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setShowContent(true);
    alert("Recruit information has successfully been submitted!");
    toggle();
  };

  return (
    <form id="recruitForm" className="flex flex-col w-full" onSubmit={recruitSubmit}>
      <progress style={{ width: getProgress(), transitionProperty: "width" }} 
        className="h-1 bg-blue-600 duration-500 fixed top-0 left-0">
      </progress>
      {steps[step]}
      <article className="flex gap-5">
        <BackButton step={step} setStep={setStep} />
        <NextButton step={step} setStep={setStep} steps={steps} />
      </article>
    </form>
  );
}
