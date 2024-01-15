import Update from "~icons/radix-icons/update";
import Delete from "~icons/mdi/delete-outline";
import Link from "next/link";

export function CrudIcons() {
  return (
    <>
      <td className="td-items">
        <Link href={""} className="flex md:justify-center dark:text-yellow-300 text-yellow-500 justify-end py-1 md:py-0"><Update /></Link>
      </td>
      <td className="td-items">
        <Link href={""} className="flex md:justify-center text-red-500 justify-end py-1 md:py-0"><Delete /></Link>
      </td>
    </>
  );
}
