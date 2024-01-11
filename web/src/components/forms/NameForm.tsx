"use client";
import { useTranslations } from "next-intl";

export default function NameForm() {
    const t = useTranslations();

    return <form id="registerForm" className="flex flex-col p-2 w-full">
        <label htmlFor="first_name" className="font-semibold inline-block text-xs text-slate-700 dark:text-slate-400 p-1 text-left">{t("common.account.first_name")}</label>
        <input autoFocus={true} id="first_name" name="first_name" required={true} placeholder={t("common.account.first_name")} type="text" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 m-1"></input>
        <label htmlFor="last_name" className="font-semibold block text-xs text-slate-700 dark:text-slate-400 p-1 text-left">{t("common.account.last_name")}</label>
        <input id="last_name" name="last_name" required={true} placeholder={t("common.account.last_name")} type="text" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 m-1"></input>
    </form>
}