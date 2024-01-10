import { useTranslations } from "next-intl";
import Logo from "@/components/Logo"
import Button from "@/components/Button"
export default function Root() {
  const t = useTranslations();

  return (
    <>
    <div className="flex flex-col flex-wrap max-w-xs m-auto setting bg-gray-200 dark:bg-gray-800 p-4">
        <div className="flex justify-center w-full p-2">
            <Logo width={200} button={false}/>
        </div>

        <form className="flex flex-col p-2 w-full">
          <label className="inline-block text-xs text-slate-600 p-1 text-left">{t("common.account.first_name")}</label>
          <input name="fname" required={true} placeholder={t("common.account.first_name")} type="text" className="action w-full text-left dark:bg-neutral-900 m-1"></input>
          <label className="block text-xs text-slate-600 p-1 text-left">{t("common.account.last_name")}</label>
          <input name="lname" required={true} placeholder={t("common.account.last_name")}  type="text" className="action w-full text-left dark:bg-neutral-900 m-1"></input>
        </form>
        <div className="w-full p-2">
          <button className="w-full action action-primary">Next</button>
        </div>
    </div>
    </>
  );
}
