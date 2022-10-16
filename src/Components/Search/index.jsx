import React from "react";
import { TodoContext } from "../Context";
import "./index.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Buscar TODOs..."
      value={searchValue}
      onChange={onSearchValueChange}
      key={setSearchValue}
    />
  );
}

export { TodoSearch };
