export function TableOverview({ heading, overview }: { heading: string[], overview: JSX.Element[] }) {
  return (
    <div className="overflow-x-scroll mt-3 pb-4">
      <table className="rounded-2xl">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800">
            {Object.values(heading)
              .map((result: string) => <th key={result + 1} className="px-4 py-2">{result}</th>)
            }
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50 dark:bg-gray-600">
            {overview}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
