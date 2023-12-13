import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { localeCodes } from "./i18n";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: localeCodes,
  });
