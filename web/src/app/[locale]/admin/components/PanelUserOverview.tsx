import { panelUser } from "../testdata";
import Update from "~icons/radix-icons/update";
import Delete from "~icons/mdi/delete-outline";
import Link from "next/link";
import { TableOverview } from "./TableOverview";

export function PanelUserOverview({ heading }: { heading: string[] }) {
  const panelUsers = (Object.values(panelUser)).map((panelUser, result: number) =>
    <>
      <td key={result} className="td-items">{panelUser.id}</td>
      <td className="td-items">{panelUser.firstName}</td>
      <td className="td-items">{panelUser.lastName}</td>
      <td className="td-items">{panelUser.email}</td>
      <td className="td-items">{panelUser.phoneNumber}</td>
      <td className="td-items">{panelUser.dateOfBirth.toLocaleDateString()}</td>
      <td className="td-items">{panelUser.avatarUrl}</td>
      <td className="td-items">
        <Link href={""} className="flex justify-center text-yellow-300"><Update /></Link>
      </td>
      <td className="td-items">
        <Link href={""} className="flex justify-center text-red-500"><Delete /></Link>
      </td>
    </>
  );

  return (
    <TableOverview heading={heading} overview={panelUsers} />
  );
}
