function SearchBar({ queryTransfer }) {
  return (
    <div className="search-bar">
      <label htmlFor="search">&#128269;</label>
      <input type="text" id="search" placeholder="Search..." onChange={(e) => { queryTransfer(e.target.value) }} />
    </div>
  )
}

export default SearchBar
