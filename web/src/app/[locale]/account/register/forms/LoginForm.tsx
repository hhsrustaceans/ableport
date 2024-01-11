import { useTranslations } from "next-intl";

export default function LoginForm() {
    const t = useTranslations();

    return <form id="registerForm" className="flex flex-col p-2 w-full">
        <label htmlFor="email" className="font-semibold inline-block text-xs text-slate-600 p-1 text-left">{t("common.account.email")}</label>
        <input autoFocus={true} name="email" required={true} placeholder={t("common.account.email")} type="text" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 m-1"></input>
        <label htmlFor="password" className="font-semibold inline-block text-xs text-slate-600 p-1 text-left">{t("common.account.password")}</label>
        <input autoFocus={true} name="password" required={true} placeholder={t("common.account.password")} type="text" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 m-1"></input>
    </form>
}