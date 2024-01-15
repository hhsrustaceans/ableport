import Update from "~icons/radix-icons/update";
import Link from "next/link";

export function IconOption() {
  return (
    <p className="flex items-center justify-end mt-2">
      <Link href={""} className="dark:text-yellow-300 text-yellow-500"><Update /></Link>
    </p>
  );
}
