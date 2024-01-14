"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useState } from "react";
import { Modal } from "./Modal";
import { Organisation } from "../../types";

export function ButtonCreate({ 
  setChange, 
  change, 
  setShowContent, 
} : { 
  setChange: Dispatch<SetStateAction<Organisation>>, 
  change: Organisation, 
  setShowContent: Dispatch<SetStateAction<boolean>>, 
}) {
  const t = useTranslations();
  const [modal, setModal] = useState(false);

  const toggle = (): void => {
    setModal(!modal);
    document.body.style.overflowY = modal ? "unset" : "hidden";
  }

  return (
    <>
      <Link href={""} className="cta action action-primary rounded-2xl duration-500 ease-in-out text-lg w-full flex justify-center
        items-center focus:rounded-2xl" 
        onClick={toggle}>
        {t("recruit.create")}
      </Link>
      {modal && <Modal toggle={toggle} open={modal} setChange={setChange} change={change} setShowContent={setShowContent} />}
    </>
  );
}
