import React from "react";

const SearchButton = React.memo(function SearchButton({ onSearch }) {
  console.log("SearchButton Rendered");

  return (
    <button
      className="bg-indigo-600 text-white px-4 py-2 rounded"
      onClick={onSearch}
    >
      Search
    </button>
  );
});

export default SearchButton;