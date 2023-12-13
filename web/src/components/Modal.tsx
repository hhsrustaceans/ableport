"use client";

import ReactModal from "react-modal";
import { useTranslations } from "next-intl";
import IconClose from "~icons/mdi/close";
import "./Modal.css";

ReactModal.setAppElement("#app");

export default function Modal({
  children,
  title,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const t = useTranslations();

  return (
    <>
      <ReactModal
        className="rounded-md text-sm w-72 md:w-96 mx-auto my-24 bg-white dark:bg-gray-800 drop-shadow-2xl p-6"
        contentLabel={title}
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{ overlay: { backgroundColor: null! } }}
      >
        <button
          onClick={onClose}
          aria-label={t("common.dialog.close")}
          className="p-1 action block"
        >
          <IconClose />
        </button>
        <div className="mt-3">{children}</div>
      </ReactModal>
    </>
  );
}
