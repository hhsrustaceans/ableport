import Link from "next/link";
import { useTranslations } from "next-intl";
import { Study } from "@/lib/types/models/study";
import StudyPreview from "../components/StudyPreview";
import HelpButton from "../components/HelpButton";

export default function Root() {
  const t = useTranslations();

  const studies: Study[] = [
    {
      id: "test",
      name: "Test",
      description: "This is a test study.",
      websiteUrl: "https://example.com",
    },
  ];

  return (
    <>
      <h1 className="cta">{t("panel.studies_avail")}</h1>
      <ul className="max-w-md m-auto space-y-2">
        {studies.map((study, key) => (
          <li key={key}>
            <Link
              href={`../study/${study.id}`}
              className="block action action-li"
            >
              <StudyPreview study={study} />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <HelpButton text={t("panel.help.select_study")} />
      </div>
    </>
  );
}
