import { organisation } from "../testdata";
import Update from "~icons/radix-icons/update";
import Delete from "~icons/mdi/delete-outline";
import Link from "next/link";
import { TableOverview } from "./TableOverview";

export function OrganisationOverview({ heading }: { heading: string[] }) {
  const organisations = (Object.values(organisation)).map((organisation, result: number) =>
    <>
      <td key={result} className="td-items">{organisation.id}</td>
      <td className="td-items">{organisation.type}</td>
      <td className="td-items">{organisation.name}</td>
      <td className="td-items">{organisation.description}</td>
      <td className="td-items">{organisation.logo}</td>
      <td className="td-items">{organisation.website}</td>
      <td className="td-items">{organisation.phoneNumber}</td>
      <td className="td-items">
        <Link href={""} className="flex justify-center text-yellow-300"><Update /></Link>
      </td>
      <td className="td-items">
        <Link href={""} className="flex justify-center text-red-500"><Delete /></Link>
      </td>
    </>
  );
  
  return (
    <TableOverview heading={heading} overview={organisations} />
  );
}
