"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Modal } from "./Modal";

export function ButtonCreate() {
  const t = useTranslations();
  const [modal, setModal] = useState(false);

  const toggle = (): void => {
    setModal(!modal);
    document.body.style.overflowY = modal ? "unset" : "hidden";
  }

  return (
    <>
      <Link href={""} className="cta action action-primary rounded-2xl duration-500 ease-in-out text-lg w-full flex justify-center
        items-center" 
        onClick={toggle}>
        {t("recruit.create")}
      </Link>
      {modal && <Modal toggle={toggle} open={modal} />}
    </>
  );
}
