"use client";
import { useTranslations } from "next-intl";
import { useState } from 'react';

export default function NameForm() {
    const t = useTranslations();

    const [ageError, setAgeError] = useState("");

    function ValidateAge(e: any) {
        const age = Number(e.currentTarget.value);
        let error = ""
        if (age < 1) error = "Age too low";
        if (age > 130) error = "Age too high";
        setAgeError(error);
    }

    return <form id="registerForm" className="flex flex-col p-2 w-full">
        <label htmlFor="age" className="font-semibold inline-block text-xs text-slate-700 dark:text-slate-400 p-1 text-left">{t("common.account.age")}</label>
        <input onChange={ValidateAge} style={{"appearance": "textfield"}} min={1} max={130} autoFocus={true} id="age" name="age" required={true} placeholder={t("common.account.age")} type="number" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 m-1"></input>
        <p className="text-xs text-red-400">{ageError}</p>
    </form>
}