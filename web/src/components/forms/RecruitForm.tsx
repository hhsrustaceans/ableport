import { useTranslations } from "next-intl";
import { ReactNode, useState, FormEvent, ChangeEvent } from "react";
import { FirstStepForm } from "./FirstStepForm";
import { SecondStepForm } from "./SecondStepForm";
import { Organisation } from "@/app/[locale]/types";
import { useRouter } from "next/navigation";

export function RecruitForm() {
  const t = useTranslations();
  const [step, setStep] = useState(0);

  const [change, setChange] = useState<Organisation>({
    type: "",
    name: "",
    description: "",
    logo: "",
    website: "",
    phoneNumber: "",
  });

  const recruitType: string[] = [
    t("recruit.recruitType.nonprofit"), 
    t("recruit.recruitType.company"), 
    t("recruit.recruitType.other"), 
    t("recruit.recruitType.government")
  ];

  const recruitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setChange({
      ...change, [event.target.name]: event.target.value
    });
  };

  const steps: ReactNode[] = [
    <FirstStepForm key={0} recruitType={recruitType} recruitChange={recruitChange} />,
    <SecondStepForm key={0} recruitChange={recruitChange} />
  ];

  const BackButton = (): JSX.Element => ( step > 0 ? 
    <button onClick={PreviousStep} className="w-full action action-primary my-2">{t("recruit.selection.back")}</button> : <></>
  );
  
  const NextButton = (): JSX.Element => (
    <button onClick={NextStep} className="w-full action action-primary my-2">
      {step == steps.length - 1 ? t("recruit.selection.submit") : t("recruit.selection.next")}
    </button>
  );

  let PreviousStep = (): void | JSX.Element => step > 0 ? setStep(step - 1) : <></>;
  let NextStep = (): void | JSX.Element => step < steps.length - 1 ? setStep(step + 1) : <></>;
  let getProgress = (): string => step / (steps.length - 1) * 100 + "%";
  
  const router = useRouter();

  const recruitSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    console.log(change);
    alert("Recruit information has successfully been submitted!");
    router.push("./", change);
  };

  return (
    <form id="recruitForm" className="flex flex-col w-full" onSubmit={recruitSubmit}>
      <progress style={{ width: getProgress(), transitionProperty: "width" }} 
        className="h-1 bg-blue-600 duration-500 fixed top-0 left-0">
      </progress>
      {steps[step]}
      <article className="flex gap-5">
        <BackButton />
        <NextButton />
      </article>
    </form>
  );
}
