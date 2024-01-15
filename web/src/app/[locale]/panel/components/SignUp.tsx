"use client";

import { Panel } from "@/lib/types/models/panel";
import { useTranslations } from "next-intl";

export default function SignUpButton({ panel }: { panel: Panel }) {
  const t = useTranslations();

  function signUp() {
    alert(t("panel.view.signupSucess", { panel: panel.name }));
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
