export default function IconLabel({ text = "Button"}: { text: string }) {
  return (
    <button className="grow m-2 flex items-center justify-center gap-1 action action-primary">
        <span>{text}</span>
    </button>
  );
}
