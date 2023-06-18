import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchCategory }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size='1.3em' />
      <input
        onChange={(event) => handleSearchCategory(event.target.value)}
        type='text' 
        placeholder=" Type to search..." />
    </div>
  )
}

export default Search;