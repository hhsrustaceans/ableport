import { useTranslations } from "next-intl";
import IconClose from "~icons/mdi/close";

export function Modal({ toggle }: { toggle: () => void }) {
  const t = useTranslations();

  return (
    <div className="fixed inset-0 flex items-center justify-center">
    <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm"></div>
    <div className="relative w-screen lg:w-[1024px] h-4/5 p-6 lg:mx-auto">
      <article className="w-full p-3 bg-gray-200 dark:bg-gray-800 z-10 rounded-3xl border-2 border-green-500">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl">{t("recruit.create")}</h2>
          </div>
          <div
            onClick={toggle}
            className="hover:bg-gray-400 dark:hover:bg-gray-600 p-2 rounded-md h-9 duration-500 ease-in-out"
          >
            <IconClose />
          </div>
        </div>
      </article>
    </div>
  </div>
  );
}
