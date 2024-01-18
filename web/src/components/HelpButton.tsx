"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import IconLabel from "@/components/IconLabel";
import IconHelp from "~icons/lucide/help-circle";
import Modal from "@/components/Modal";

export default function HelpButton({ text }: { text: string }) {
  const t = useTranslations();
  const [isHelpShown, showHelp] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("alwaysHelp") === "true") {
      showHelp(true);
    }
  }, []);

  return (
    <>
      <button className="action flex justify-center sm:inline-block" onClick={() => showHelp(true)}>
        <IconLabel caption={t("common.a11y.help")} icon={<IconHelp />} />
      </button>
      <Modal
        title={t("common.a11y.help")}
        isOpen={isHelpShown}
        onClose={() => showHelp(false)}
      >
        <h1 className="cta text-lg sm:text-xl">{t("panel.help.heading")}</h1>
        <p>{text}</p>
      </Modal>
    </>
  );
}
