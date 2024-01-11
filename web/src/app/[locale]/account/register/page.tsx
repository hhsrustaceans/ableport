"use client";

import { useTranslations } from "next-intl";
import Logo from "@/components/Logo"
import { useState } from 'react';
import NameForm from "./forms/NameForm";
import LoginForm from "./forms/LoginForm";
import PersonalForm from "./forms/PersonalForm";


export default function Root() {
  const [registerStep, setRegisterStep] = useState(0);
  const t = useTranslations();

  const steps: React.ReactNode[] = [
    <NameForm />,
    <LoginForm />,
    <PersonalForm />
  ];

  function PreviousStep() {
    if (registerStep > 0) {
      setRegisterStep(registerStep - 1);
    }
  }

  function NextStep() {
    if (registerStep < steps.length - 1) {
      setRegisterStep(registerStep + 1);
    } else if (registerStep == steps.length - 1) {
      alert("Registered successfully!");
    }
  }

  function BackButton() {
    if (registerStep > 0) {
      return <button onClick={PreviousStep} className="w-full action action-primary m-2">{t("common.form.back")}</button>;
    }
    return <></>;
  }

  function NextButton() {
    return <button onClick={NextStep} className="w-full action action-primary m-2">
      {registerStep == steps.length - 1 ? t("common.form.submit") : t("common.form.next")}
    </button>;
  }

  function getProgress(): string {
    return registerStep/(steps.length-1)*100 + "%";
  }

  return (
    <>
      <div style={{width: getProgress(), height: "0.2rem", backgroundColor: "blue", transitionProperty: "width", transitionDuration: "0.5s" }}></div>
      <div className="text-center m-10" id="main">
        <div className="flex flex-col flex-wrap max-w-xs m-auto setting bg-gray-200 dark:bg-gray-800 p-4">
          <div className="flex justify-center w-full p-2">
            <Logo width={200} button={false} />
          </div>
          {steps[registerStep]}
          <div className="flex p-1 w-full">
            <BackButton />
            <NextButton />
          </div>
        </div>
      </div>
    </>
  );
}
