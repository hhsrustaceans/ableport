import { RecruitForm } from "@/components/forms/RecruitForm";
import { useTranslations } from "next-intl";
import IconClose from "~icons/mdi/close";

export function Modal({ toggle }: { toggle: () => void }) {
  const t = useTranslations();

  return (
    <dialog open className="bg-transparent top-0 rounded-3xl text-black dark:text-white z-10 flex items-center min-h-screen">
      <span className="fixed inset-0 backdrop-blur-sm"></span>
      
      <section className="relative w-screen lg:w-[1024px] border-2 border-green-500 rounded-3xl bg-gray-200 dark:bg-gray-800">
        <article className="p-6 w-full flex justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl">{t("recruit.create")}</h2>
          </div>
          <div
            onClick={toggle}
            className="hover:bg-gray-400 dark:hover:bg-gray-600 p-2 rounded-md h-9 duration-500 ease-in-out"
          >
            <IconClose />
          </div>
        </article>
        <article className="p-6 pt-0 grid grid-cols-1">
          <RecruitForm />
        </article>
      </section>
    </dialog>
  );
}
