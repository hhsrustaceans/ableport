import LogoAsset from "@/assets/logo.svg";
import { productName } from "@/lib/modules/config";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Logo({ width = 150 }: { width?: number }) {
  const t = useTranslations();

  return (
    <Image
      src={LogoAsset}
      alt={t("common.nav.logo", { product: productName })}
      width={width}
    />
  );
}
