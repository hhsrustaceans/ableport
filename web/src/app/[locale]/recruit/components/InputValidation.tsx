import { useState } from "react";

export function InputValidation() {
  const [error, setError] = useState<{value: string; key: number}[]>([]);
  let errors: {value: string, key: number}[] = [];

  const type = (text: string): number | JSX.Element => (
    text.length <= 10 ? <></> : errors.push({value: "Type is longer then 10 characters...", key: 0})
  );

  const name = (text: string): number | JSX.Element => (
    text.length <= 30 ? <></> : errors.push({value: "Name is longer then 30 characters...", key: 1})
  );

  const description = (text: string): number | JSX.Element => (
    text.length <= 1000 ? <></> : errors.push({value: "Description is longer then 1000 characters...", key: 2})
  );

  setError(errors);

  return (
    <>
      {error.map((err: {value: string; key: number}) => (
        <p key={err.key} className="text-xs text-red-400">{err.value}</p>
      ))}
    </>
  );
}
