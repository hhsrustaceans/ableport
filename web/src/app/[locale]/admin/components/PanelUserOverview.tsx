import { panelUser } from "../testdata";
import { TableOverview } from "./TableOverview";
import { CrudIcons } from "./CrudIcons";
import { NoSSR } from "./NoSSR";

export function PanelUserOverview({ heading }: { heading: string[] }) {
  const panelUserHeadings: JSX.Element[] = heading.map((panelUserHeading: string, result: number) => (
    <td key={result} className="td-items td-headings">{panelUserHeading.concat(":")}</td>
  ))

  const Display = (): JSX.Element => (
    <NoSSR>
      <td className="md:hidden">{panelUserHeadings}</td>
    </NoSSR>
  );
  
  const panelUsers = (Object.values(panelUser)).map((panelUser, result: number) =>
    <>
      <Display />
      <td key={result} className="td-items" scope="row">{result + 1}</td>
      <td className="td-items">{panelUser.firstName}</td>
      <td className="td-items">{panelUser.lastName}</td>
      <td className="td-items">{panelUser.email}</td>
      <td className="td-items">{panelUser.phoneNumber}</td>
      <td className="td-items">{panelUser.dateOfBirth.toLocaleDateString()}</td>
      <td className="td-items">{panelUser.avatarUrl}</td>
      <CrudIcons />
    </>
  );

  return (
    <TableOverview heading={heading} overview={panelUsers} />
  );
}
