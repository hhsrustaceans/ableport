import type { Organisation, Panel } from "../../types";
import Update from "~icons/radix-icons/update";
import Delete from "~icons/mdi/delete-outline";
import Link from "next/link";

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

  const panels = //Array.from({ length: 5 }).forEach((_: unknown) => { return
    (Object.values(panel)).map((panel: Panel, result: number) =>
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
  //});

  return (
    <div className="overflow-x-scroll mt-6 pb-4">
      <table className="rounded-2xl">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800">
            {Object.values(heading)
              .map((result: string) => <th key={result + 1} className="px-4 py-2">{result}</th>)
            }
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-400 dark:bg-gray-600">
            {panels}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
