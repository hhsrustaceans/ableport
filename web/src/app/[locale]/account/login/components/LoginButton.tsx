'use client';
import { useTranslations } from "next-intl";
import { redirect } from 'next/navigation'
import IconArrow from "~icons/lucide/arrow-right-to-line";
import { useRouter } from 'next/navigation'

function ExternalRedirect() {
  redirect("http://localhost:5134/auth/login/google?provider=Google&returnUrl=http://localhost:5134/auth/account/redirect");
}

const loginData = "{\"email\":\"test@gmail.com\",\"password\":\"AW8v89WA12*!\"}";

export default function Button({
  icon = <IconArrow />,
}: {
  icon?: React.ReactNode;
}) {
  const t = useTranslations();
  const router = useRouter()

  async function NormalLogin() {
    //router.push('../../panel');

    const response = await fetch("http://localhost:5134/auth/login?useCookies=true", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "Sec-Fetch-Site": "same-site",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: loginData, // body data type must match "Content-Type" header
    });
  
    if (response.status == 200) {
      router.push('../../panel');
    } else {
      console.log(response.body);
    }
  }

  return (
    <button onClick={NormalLogin} className="w-full my-4 flex items-center gap-1 action action-primary">
        <span>{t("common.account.login")}</span>
        <span className="text-sm" aria-hidden="true">
            {icon}
        </span>
    </button>
  );
}
