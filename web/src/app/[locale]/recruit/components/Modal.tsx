import { RecruitForm } from "@/components/forms/RecruitForm";
import { useTranslations } from "next-intl";
import { KeyboardEvent, MouseEvent } from "react";
import IconClose from "~icons/mdi/close";

export function Modal({ toggle, open } : { toggle: () => void, open: boolean }) {
  const t = useTranslations();
  const close = (event: MouseEvent): void => event.stopPropagation();
  const escape = (event: KeyboardEvent): boolean | void => event.key == "Escape" && toggle();
  const enter = (event: KeyboardEvent): boolean | void => event.key == "Enter" && toggle();

  return (
    <>
      {/*Overlay, shouldn't be removed.*/}
      <span className={`fixed inset-0 z-10 transition-opacity ${open ? "backdrop-blur-sm opacity-100" : 
        "backdrop-blur-0 opacity-0"}`} onClick={toggle}>
      </span>
      
      <dialog open className={`bg-transparent top-0 rounded-3xl text-black dark:text-white z-10 flex items-center 
        min-h-screen transition-transform ${open ? "opacity-100 500 ease-out" : "opacity-0 ease-in"}`} onClick={close} 
        onKeyDown={escape}>
        <section className="relative w-screen lg:w-[1024px] border-2 border-green-500 rounded-3xl bg-gray-200 
          dark:bg-gray-800">
          <article className="p-6 pb-2 w-full flex justify-between">
            <div className="focus:outline focus:outline-gray-400 focus:outline-4 rounded-md p-1" tabIndex={0}>
              <h2 className="text-xl sm:text-2xl">{t("recruit.create")}</h2>
            </div>
            <div onClick={toggle} className="hover:bg-gray-400 dark:hover:bg-gray-600 p-2 rounded-md h-9 duration-200
              ease-in-out focus:outline focus:outline-gray-400 focus:outline-4" tabIndex={0} onKeyDown={enter}>
              <IconClose />
            </div>
          </article>
          <article className="p-6 pt-0 grid grid-cols-1">
            <RecruitForm toggle={toggle} />
          </article>
        </section>
      </dialog>
    </>
  );
}
