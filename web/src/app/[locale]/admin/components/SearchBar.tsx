import Input from "@mui/material/Input";

export function SearchBar({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="grid-cols-1">
      <label htmlFor="searchResult">{label}</label>
      <Input placeholder={placeholder} role="search" />
    </div>
  );
}
