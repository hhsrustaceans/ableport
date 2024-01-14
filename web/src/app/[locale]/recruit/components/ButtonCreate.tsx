import Link from "next/link";
import { useTranslations } from "next-intl";
import { useContext, useState } from "react";
import { Modal } from "./Modal";
import { Context } from "./Context";

export function ButtonCreate() {
  const t = useTranslations();
  const [modal, setModal] = useState(false);
  const {setChange, change, setShowContent} = useContext(Context);

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
      {modal && 
        <Context.Provider value={{setChange, change, setShowContent, toggle}}>
          <Modal open={modal} />
        </Context.Provider>
      }
    </>
  );
}
