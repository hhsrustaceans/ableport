import IconArrow from "~icons/lucide/arrow-right-to-line";

export default function IconLabel({
  caption,
  icon = <IconArrow />,
}: {
  caption: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-1">
      <span>{caption}</span>
      <span className="text-sm" aria-hidden="true">
        {icon}
      </span>
    </div>
  );
}
