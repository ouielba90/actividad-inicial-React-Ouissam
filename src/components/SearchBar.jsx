import { useState } from "react";

function SearchBar({ queryTransfer }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    queryTransfer(value);
  }
  return (
    <div className="search-bar">
      <label htmlFor="search">&#128269;</label>
      <input type="text" id="search" value={query} placeholder="Search..." onChange={handleChange} />
    </div>
  )
}

export default SearchBar
