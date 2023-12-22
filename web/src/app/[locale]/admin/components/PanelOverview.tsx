import type { Organisation, Panel } from "../../types";

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
      reward: ["test", "test"],
      studyType: "test",
    },
  ];

  return (
    <table className="mt-5 rounded-2xl">
      <thead>
        <tr className="bg-gray-200 dark:bg-gray-800">
          {Object.values(heading)
            .map((result: string) => <th key={result + 1} className="px-4 py-2">{result}</th>)
          }
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-400 dark:bg-gray-600">
          {Object.values(panel)
            .map((panel: Panel, result: number) => {
              return (
                <>
                  <td key={result} className="td-items">{panel.id}</td>
                  <td className="td-items">{panel.organisation.name}</td>
                  <td className="td-items">{panel.title}</td>
                  <td className="td-items">{panel.description}</td>
                  <td className="td-items">{panel.content}</td>
                  <td className="td-items">{panel.activePeriod?.toLocaleDateString()}</td>
                </>
              );
            })
          }
        </tr>
      </tbody>
    </table>
  );
}
