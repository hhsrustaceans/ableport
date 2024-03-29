"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import IconLabel from "@/components/IconLabel";
import Modal from "@/components/Modal";

export default function Welcome() {
  const t = useTranslations();
  const [isWelcomeWelcomeShown, showWelcome] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userWelcomed") === "true") {
      showWelcome(false);
    }
  }, []);

  function hideWelcome() {
    showWelcome(false);
    localStorage.setItem("usedWelcomed", "true");
  }

  useEffect(() => {
    if (localStorage.getItem("usedWelcomed") !== "true") {
      showWelcome(true);
    }
  }, []);

  return (
    <>
      <Modal
        title={t("common.a11y.help")}
        isOpen={isWelcomeWelcomeShown}
        noClose
      >
        <h1 className="text-lg sm:text-xl cta">{t("panel.welcome.heading")}</h1>
        <p className="cta">
          {t("panel.welcome.message", { action: t("panel.welcome.button") })}
        </p>
        <button
          className="action action-primary inline-block"
          onClick={hideWelcome}
        >
          <IconLabel caption={t("panel.welcome.button")} />
        </button>
      </Modal>
    </>
  );
}
