import { panel } from "../testdata";
import { TableOverview } from "./TableOverview";
import { CrudIcons } from "./CrudIcons";
import { NoSSR } from "./NoSSR";

export function PanelOverview({ heading }: { heading: string[] }) {
  const panelHeadings: JSX.Element[] = heading.map((panelHeading: string, result: number) => (
    <td key={result} className={`td-items td-headings`}>{panelHeading.concat(":")}</td>
  ));

  const Display = (): JSX.Element => (
    <NoSSR>
      <td className="md:hidden">{panelHeadings}</td>
    </NoSSR>
  );

  const panels = (Object.values(panel)).map((panel, result: number) =>
    <>
      <Display />
      <td key={result} className="td-items" scope="row">{result + 1}</td>
      <td className="td-items">{panel.organisation.name}</td>
      <td className="td-items">{panel.title}</td>
      <td className="td-items">{panel.description}</td>
      <td className="td-items">{panel.content}</td>
      <td className="td-items">{panel.activePeriod?.toLocaleDateString()}</td>
      <td className="td-items">{panel.location}</td>
      <td className="td-items">{panel.reward}</td>
      <td className="td-items">{panel.studyType}</td>
      <CrudIcons />
    </>
  );

  return (
    <TableOverview heading={heading} overview={panels} />
  );
}
