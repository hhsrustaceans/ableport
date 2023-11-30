"use client";

import { useTranslations } from "next-intl";
import IconLabel from "@/components/IconLabel";
import IconHelp from "~icons/lucide/help-circle";

export default function HelpButton({}: { text: string }) {
  const t = useTranslations();

  function showHelp() {}

  return (
    <button className="action" onClick={showHelp}>
      <IconLabel caption={t("common.a11y.help")} icon={<IconHelp />} />
    </button>
  );
}
