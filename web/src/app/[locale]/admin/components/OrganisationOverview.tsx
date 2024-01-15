import { organisation } from "../testdata";
import { TableOverview } from "./TableOverview";
import { CrudIcons } from "./CrudIcons";
import { NoSSR } from "./NoSSR";

export function OrganisationOverview({ heading }: { heading: string[] }) {
  const orgHeadings: JSX.Element[] = heading.map((orgHeading: string, result: number) => (
    <td key={result} className="td-items td-headings">{orgHeading.concat(":")}</td>
  ));

  const Display = (): JSX.Element => (
    <NoSSR>
      <td className="md:hidden">{orgHeadings}</td>
    </NoSSR>
  )

  const organisations = (Object.values(organisation)).map((organisation, result: number) =>
    <>
      <Display />
      <td key={result} className="td-items" scope="row">{result + 1}</td>
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
