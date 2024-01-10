"use client";

import { useTranslations } from "next-intl";
import Logo from "@/components/Logo"
import { useState } from 'react';
import Button from "@/components/Button"


export default function Root() {
  const [registerStep, setRegisterStep] = useState(0);
  const t = useTranslations();

  function Back() {
    if (registerStep > 0) {
      setRegisterStep(registerStep-1);
    }
  }

  function Next() {
    if (registerStep <= 4) {
      setRegisterStep(registerStep+1);
    }
  }

  function BackButton() {
    if (registerStep > 0) {
        return <button onClick={Back} className="w-full action action-primary m-2">Back</button>;
    }
    return <></>;
}

  const steps: React.ReactNode[] = [
    <form className="flex flex-col p-2 w-full">
      <label className="inline-block text-xs text-slate-600 p-1 text-left">{t("common.account.first_name")}</label>
      <input name="fname" required={true} placeholder={t("common.account.first_name")} type="text" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 m-1"></input>
      <label className="block text-xs text-slate-600 p-1 text-left">{t("common.account.last_name")}</label>
      <input name="lname" required={true} placeholder={t("common.account.last_name")}  type="text" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 m-1"></input>
    </form>,
    <form id="2" className="flex flex-col p-2 w-full">
      <label className="inline-block text-xs text-slate-600 p-1 text-left">{t("common.account.email")}</label>
      <input name="fname" required={true} placeholder={t("common.account.email")} type="text" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 m-1"></input>
    </form>,
    <form id="3" className="flex flex-col p-2 w-full">
      <label className="inline-block text-xs text-slate-600 p-1 text-left">{t("common.account.password")}</label>
      <input name="fname" required={true} placeholder={t("common.account.password")} type="text" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 m-1"></input>
    </form>
  ];

  return (
    <>
    <div className="flex flex-col flex-wrap max-w-xs m-auto setting bg-gray-200 dark:bg-gray-800 p-4">
        <div className="flex justify-center w-full p-2">
            <Logo width={200} button={false}/>
        </div>
        {steps[registerStep]}
        <div className="flex p-1">
          <BackButton/>
          <button onClick={Next} className="w-full action action-primary m-2">Next</button>
        </div>
    </div>
    </>
  );
}
