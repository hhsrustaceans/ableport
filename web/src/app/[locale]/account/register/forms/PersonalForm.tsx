import { useTranslations } from "next-intl";

export default function NameForm() {
    const t = useTranslations();

    function Validate() {
        let age = 20;
        return age > 0 && age < 130;
    }

    return <form id="registerForm" className="flex flex-col p-2 w-full">
        <label for="age" className="font-semibold inline-block text-xs text-slate-600 p-1 text-left">{t("common.account.age")}</label>
        <input autoFocus={true} id="age" name="age" required={true} placeholder={t("common.account.age")} type="text" className="action w-full text-left bg-neutral-100 dark:bg-neutral-900 m-1"></input>
    </form>
}