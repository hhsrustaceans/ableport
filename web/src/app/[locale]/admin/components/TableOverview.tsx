export function TableOverview({ heading, overview }: { heading: string[], overview: JSX.Element[] }) {
  return (
    <div className="overflow-x-scroll mt-5 md:mt-3 pb-4 rounded-lg">
      <table>
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-800 hidden md:table-row">
            {Object.values(heading).map((result: string) => (
              <th key={result} className="px-4 py-2" scope="col">{result}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {overview.map((overview: JSX.Element, result: number) => (
            <tr 
              className={`${result % 2 == 0 ? "bg-gray-50 dark:bg-gray-600" : "bg-gray-100 dark:bg-gray-500 md:text-green-600 md:dark:text-green-400"} 
                border-b-2 border-gray-300 dark:border-gray-400
              `}
              key={result}>
              {overview}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
