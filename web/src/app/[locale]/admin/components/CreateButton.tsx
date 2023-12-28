import Link from "next/link";

export function CreateButton({ create } : { create: string }) {
  return (
    <Link href={""}>
      <button className="action-primary rounded-md mt-0 md:mt-3 px-2 py-1 duration-300 ease-in-out">{create}</button>
    </Link>
  );
}
