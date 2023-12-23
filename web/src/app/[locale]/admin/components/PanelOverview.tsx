import type { Organisation, Panel } from "../../types";
import Update from "~icons/radix-icons/update";
import Delete from "~icons/mdi/delete-outline";
import Link from "next/link";
import { TableOverview } from "./TableOverview";

export function PanelOverview({ heading }: { heading: string[] }) {
  const organisation: Organisation = {
    id: 1,
    type: "test",
    name: "test",
    description: "test",
    logo: "test",
    website: "test",
    phoneNumber: "test",
  };

  const panel: Panel[] = [
    {
      id: 1,
      organisation: organisation,
      title: "test",
      description: "test",
      content: "test",
      activePeriod: new Date(),
      location: "test",
      reward: ["test"],
      studyType: "test",
    },
  ];

  const panels = (Object.values(panel)).map((panel: Panel, result: number) =>
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
      <td className="td-items">
        <Link href={""} className="flex justify-center text-yellow-300"><Update /></Link>
      </td>
      <td className="td-items">
        <Link href={""} className="flex justify-center text-red-500"><Delete /></Link>
      </td>
    </>
  );

  return (
    <TableOverview heading={heading} overview={panels} />
  );
}
