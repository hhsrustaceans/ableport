import { useTranslations } from "next-intl";
import Logo from "./Logo";
import IconLabel from "./IconLabel";

export default function ErrorDisplay({ errorText }: { errorText: string }) {
  const t = useTranslations();

  return (
    <div className="text-center m-24 xl:m-52">
      <div className="m-auto mb-5">
        <Logo width={300} />
      </div>
      <p>{errorText}</p>
      <p className="text-sm text-gray-500">{t("common.error.subtext")}</p>
      <a className="action action-primary inline-block mt-5" href="{base}/">
        <IconLabel
          caption={t("common.error.return")}
          icon="lucide:arrow-left-to-line"
        />
      </a>
    </div>
  );
}
