import createMiddleware from "next-intl/middleware";
import { localeCodes } from "@/lib/modules/i18n";

export default createMiddleware({
  locales: localeCodes,
  defaultLocale: "nl",
});

export const config = {
  matcher: ["/", "/([a-z]{2})/:path*"],
};
