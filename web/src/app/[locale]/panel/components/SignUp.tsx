"use client";

import { Panel } from "@/lib/types/models/panel";
import { useTranslations } from "next-intl";
import {useRouter} from "@/lib/modules/navigation";

export default function SignUpButton({ panel }: { panel: Panel }) {
  const t = useTranslations();
  const router = useRouter();

  function signUp() {
    alert(t("panel.view.signupSucess", { panel: panel.name }));
    router.push("/panel");
  }

  return (
    <button
      onClick={() => signUp()}
      className="px-16 action action-primary my-2"
    >
      {t("panel.view.signup")}
    </button>
  );
}
