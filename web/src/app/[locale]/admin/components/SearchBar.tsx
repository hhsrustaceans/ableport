export function SearchBar({ label, placeholder } : { label: string, placeholder: string }) {
  return (
    <div className="grid-cols-1">
      <label htmlFor="searchResult">{label}</label>
      <input 
        id="searchResult" 
        className="w-full rounded-md bg-none outline-none px-2 text-black border-gray-600 dark:border-gray-400 border-2" 
        placeholder={placeholder}
        type="search" 
      />
    </div>
  );
}
