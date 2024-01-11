import { useTranslations } from "next-intl";
import IconClose from "~icons/mdi/close";

export function Modal({ toggle }: { toggle: () => void }) {
  const t = useTranslations();

  return (
    <dialog open className="fixed bg-transparent">
      <span className="fixed inset-0 backdrop-blur-sm"></span>

      <section className="relative w-screen lg:w-[1024px] px-3 lg:px-0 text-black dark:text-white">
        <article className="p-3 w-full bg-gray-200 dark:bg-gray-800 z-10 rounded-3xl border-2 border-green-500 flex 
          justify-between">
          <div>
            <h2 className="text-2xl">{t("recruit.create")}</h2>
          </div>
          <div
            onClick={toggle}
            className="hover:bg-gray-400 dark:hover:bg-gray-600 p-2 rounded-md h-9 duration-500 ease-in-out"
          >
            <IconClose />
          </div>
        </article>
      </section>
    </dialog>
  );
}
