'use client';
import IconArrow from "~icons/lucide/arrow-right-to-line";

function Redirect() {
  window.location.replace("http://localhost:5134/auth/login/google?provider=Google&returnUrl=http://localhost:5134/auth/callback/google");
}

export default function IconLabel({
  icon = <IconArrow />,
}: {
  icon?: React.ReactNode;
}) {
  return (
    <button onClick={Redirect} className="grow flex m-2 items-center gap-1 action action-primary">
        <span>{"Login"}</span>
        <span className="text-sm" aria-hidden="true">
            {icon}
        </span>
    </button>
  );
}
