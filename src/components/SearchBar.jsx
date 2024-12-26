import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing a search icon
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Ensure the onSearch function exists before calling it
    if (onSearch && typeof onSearch === "function") {
      onSearch(value);
    } else {
      console.error("onSearch is not a valid function. Please provide a valid function as a prop.");
    }
  };

  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search Repositories"
      />
    </div>
  );
};

export default SearchBar;
