import React from "react";

function CustomNavBar({ searchText, onSearchChange }) {
  return (
    <nav className="custom-nav-bar">
      <h1 className="note-app-header">Notes App by Rafly</h1>
      <input
        className="nav-input-search"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </nav>
  );
}

export default CustomNavBar;
