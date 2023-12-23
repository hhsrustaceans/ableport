import { useTranslations } from "next-intl";
import Link from "next/link";

export function CreateButton( { create } : { create: string }) {
  const t = useTranslations();

  return (
    <Link href={""}>
      <button className="action-primary rounded-md mt-3 px-2 py-1 duration-300 ease-in-out">{create}</button>
    </Link>
  );
}
