import { useState } from "react";

function SearchBar({ queryTransfer, selectTransfer }) {
  const [query, setQuery] = useState("");
  const [clicked, setClicked] = useState([
    { category: "Hardware", selected: false },
    { category: "Book", selected: false },
    { category: "Software", selected: false },
    { category: "Accessory", selected: false },
    { category: "Collectible", selected: false },
  ]);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    queryTransfer(value);
  }

  function handleFilters(e) {
    const value = e.target.innerText
    const updated = clicked.map((el) => {
      if (el.category === value) {
        return { ...el, selected: !el.selected }
      } else {
        if (!el.selected) {
          return { ...el, selected: false }
        } else {
          return { ...el, selected: true }
        }
      }
    })
    console.log(updated)
    setClicked(updated)
    selectTransfer(updated)
  }

  function checkActiveCategory(category) {
    let curr = clicked.findIndex(item => { return (item.category === category) && item.selected })
    return curr >= 0 ? true : false
  }

  //clicked[clicked.findIndex(item => { return (item.category === "Hardware") && item.selected })]?.selected 
  return (
    <>
      <div className="search">
        <label htmlFor="search">&#128269;</label>
        <input type="text" id="search" value={query} placeholder="Search..." onChange={handleChange} />
      </div>
      <div className="filter" onClick={handleFilters}>
        <p className={checkActiveCategory("Hardware") ? "fill_filter" : ""} >Hardware </p>
        <p className={checkActiveCategory("Book") ? "fill_filter" : ""} >Book</p>
        <p className={checkActiveCategory("Software") ? "fill_filter" : ""} >Software</p>
        <p className={checkActiveCategory("Accessory") ? "fill_filter" : ""} >Accessory</p>
        <p className={checkActiveCategory("Collectible") ? "fill_filter" : ""} >Collectible</p>
      </div>
    </>
  )
}

export default SearchBar
