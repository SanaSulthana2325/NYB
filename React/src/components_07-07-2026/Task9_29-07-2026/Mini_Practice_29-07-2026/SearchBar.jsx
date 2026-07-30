function SearchBar({ search, setSearch }) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search restaurants..."
      className="border p-2 w-full"
    />
  );
}

export default SearchBar;