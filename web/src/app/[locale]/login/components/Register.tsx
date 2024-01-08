'use client';
import IconArrow from "~icons/lucide/arrow-right-to-line";

export default function IconLabel({
  icon = <IconArrow />,
}: {
  icon?: React.ReactNode;
}) {
  return (
    <button className="grow flex m-2 items-center gap-1 action action-primary">
        <span>{"Register"}</span>
        <span className="text-sm" aria-hidden="true">
            {icon}
        </span>
    </button>
  );
}
