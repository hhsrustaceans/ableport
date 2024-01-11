'use client';
import { useTranslations } from "next-intl";
import IconArrow from "~icons/lucide/arrow-right-to-line";

function Redirect() {
  window.location.replace("http://localhost:5134/auth/login/google?provider=Google&returnUrl=http://localhost:5134/auth/account/redirect");
}

export default function Button({
  icon = <IconArrow />,
}: {
  icon?: React.ReactNode;
}) {
  const t = useTranslations();

  return (
    <button onClick={Redirect} className="w-full my-4 flex items-center gap-1 action action-primary">
        <span>{t("common.account.login")}</span>
        <span className="text-sm" aria-hidden="true">
            {icon}
        </span>
    </button>
  );
}
