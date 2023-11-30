import createMiddleware from "next-intl/middleware";
import { languages } from "@/lib/modules/i18n";

export default createMiddleware({
  locales: languages,
  defaultLocale: "nl",
});

export const config = {
  matcher: ["/", `/(nl)/:path*`],
};
