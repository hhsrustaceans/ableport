"use client";

import ReactModal from "react-modal";
import { useTranslations } from "next-intl";
import IconClose from "~icons/mdi/close";
import "./Modal.css";
import { useEffect } from "react";

export default function Modal({
  children,
  title,
  noClose,
  isOpen,
  onClose,
}: {
  children: React.ReactNode;
  title: string;
  noClose?: boolean;
  isOpen: boolean;
  onClose?: () => void;
}) {
  const t = useTranslations();

  useEffect(() => {
    ReactModal.setAppElement("#app");
  });

  return (
    <>
      <ReactModal
        className="rounded-md text-sm w-64 sm:w-96 mx-auto my-24 bg-white dark:bg-gray-800 drop-shadow-2xl p-6"
        contentLabel={title}
        isOpen={isOpen}
        onRequestClose={onClose}
        style={{ overlay: { backgroundColor: null! } }}
      >
        {noClose ? (
          <></>
        ) : (
          <button
            onClick={onClose}
            aria-label={t("common.dialog.close")}
            className="p-1 action block"
          >
            <IconClose />
          </button>
        )}
        <div className="mt-3">{children}</div>
      </ReactModal>
    </>
  );
}
