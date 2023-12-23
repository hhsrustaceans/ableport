import { panel } from "../testdata";
import { TableOverview } from "./TableOverview";
import { CrudIcons } from "./CrudIcons";

export function PanelOverview({ heading }: { heading: string[] }) {
  const panels = (Object.values(panel)).map((panel, result: number) =>
    <>
      <td key={result} className="td-items">{panel.id}</td>
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
