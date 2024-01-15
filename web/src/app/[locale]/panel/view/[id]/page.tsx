import { getDisabilityMeta } from "@/lib/modules/disability";
import { useTranslations } from "next-intl";
import SignUpButton from "../../components/SignUp";
import HelpButton from "@/components/HelpButton";
import { panels } from "@/lib/modules/panel";
import { HomeButton } from "../../components/HomeButton";

export default function ViewPanel({ params }: { params: { id: string } }) {
  const t = useTranslations();
  const panel = panels.find((p) => p.id === params.id)!;

  return (
    <>
      <div>
        <div className="cta">
          <h1 className="text-xl sm:text-2xl">{t("panel.view.title", { panel: panel.name })}</h1>
          <ul className="flex gap-3 justify-center items-center mx-auto text-sm text-gray-600 dark:text-gray-400">
            {panel.disabilities
              .map((d) => getDisabilityMeta(d)!)
              .map((d, index) => (
                <li key={index}>
                  <div
                    className="flex items-center gap-2"
                    aria-label={t(d.i18nKey)}
                    title={t(d.i18nKey)}
                  >
                    <span className="text-2xl">
                      <d.Icon />
                    </span>
                    <span>{t(d.i18nKey)}</span>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <p>{panel.content ?? panel.description}</p>
      </div>
      <div className="mt-4 space-x-2">
        <HelpButton text={t("panel.help.select_panel")} />
        <SignUpButton panel={panel} />
        <HomeButton />
      </div>
    </>
  );
}
