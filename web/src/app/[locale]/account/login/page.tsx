import { useTranslations } from "next-intl";
import Logo from "@/components/Logo"
import LoginButton from "./components/LoginButton";
import RegisterButton from "./components/RegisterButton";
import LoginForm from "../register/forms/LoginForm";

export default function Root() {
  const t = useTranslations();

  return (
    <>
    <div className="flex flex-col flex-wrap justify-center max-w-xs m-auto setting bg-gray-200 dark:bg-gray-800 p-4">
        <div className="flex justify-center w-full p-2">
            <Logo width={200} button={false}/>
        </div>
        {/* <Button text="Microsoft"/>
        <Button text="Google"/> */}
        <LoginForm/>
        <div className="flex-col p-3 w-full">
          <LoginButton/>
          <RegisterButton/>
        </div>  
    </div>
    </>
  );
}
