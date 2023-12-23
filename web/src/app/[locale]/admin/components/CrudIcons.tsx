import Update from "~icons/radix-icons/update";
import Delete from "~icons/mdi/delete-outline";
import Link from "next/link";

export function CrudIcons() {
  return (
    <>
      <td className="td-items">
        <Link href={""} className="flex justify-center dark:text-yellow-300 text-yellow-500"><Update /></Link>
      </td>
      <td className="td-items">
        <Link href={""} className="flex justify-center text-red-500"><Delete /></Link>
      </td>
    </>
  );
}
