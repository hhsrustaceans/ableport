import { organisation } from "../testdata";
import { TableOverview } from "./TableOverview";
import { CrudIcons } from "./CrudIcons";

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
      <CrudIcons />
    </>
  );
  
  return (
    <TableOverview heading={heading} overview={organisations} />
  );
}
