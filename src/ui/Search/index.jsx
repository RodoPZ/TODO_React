import React from "react";
import "./index.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar TODOs..."
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
      key={setSearchValue}
    />
  );
}

export { TodoSearch };
