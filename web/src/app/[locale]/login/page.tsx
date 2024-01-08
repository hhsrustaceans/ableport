import { useTranslations } from "next-intl";
import Logo from "@/components/Logo"
import Register from "./components/Register";
import Button from "@/components/Button"

export default function Root() {
  const t = useTranslations();

  return (
    <>
    <div className="flex flex-col flex-wrap justify-center max-w-xs m-auto setting bg-gray-200 dark:bg-gray-800 p-4">
        <div className="flex justify-center m-4">
            <Logo width={200} button={false}/>
        </div>
        <Button text="Microsoft"/>
        <Button text="Google"/>
        <Register/>
    </div>
    </>
  );
}
