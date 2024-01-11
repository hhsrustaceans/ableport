"use client";
import { useTranslations } from "next-intl";
import { useState } from 'react';

export default function LoginForm() {
    const t = useTranslations();
    const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

    function ValidatePassword(e: any) {
        let errors: string[] = [];

        let lowerCaseLetters = /[a-z]/g;
        let text = e.currentTarget.value;
        if(!text.match(lowerCaseLetters)) {
            errors.push("Password needs one lowercase letter");
        }

        // Validate capital letters
        let upperCaseLetters = /[A-Z]/g;
        if(!text.match(upperCaseLetters)) {
            errors.push("Password needs one uppercase letter");
        }

        // Validate numbers
        let numbers = /[0-9]/g;
        if(!text.match(numbers)) {
            errors.push("Password needs one number");
        }

        // Validate length
        if(text.length < 6) {
            errors.push("Password needs more than six characters");
        }

        setPasswordErrors(errors);
    }

    return <form id="registerForm" className="flex flex-col p-2 w-full">
        <label htmlFor="email" className="font-semibold inline-block text-xs text-slate-700 dark:text-slate-400 p-1 text-left">{t("common.account.email")}</label>
        <input autoFocus={true} name="email" required={true} placeholder={t("common.account.email")} type="text" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 m-1"></input>
        <p className="text-xs text-red-400">{}</p>
        <label htmlFor="password" className="font-semibold inline-block text-xs text-slate-700 dark:text-slate-400 p-1 text-left">{t("common.account.password")}</label>
        <input onChange={ValidatePassword} name="password" required={true} placeholder={t("common.account.password")} type="text" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 m-1"></input>
        {passwordErrors.map((error) => (<p className="text-xs text-red-400">{error}</p>))}
        
    </form>
}