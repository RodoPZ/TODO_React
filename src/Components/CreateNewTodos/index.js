import React from "react";
import "./index.css";
import { ReactComponent as ChoreList } from "../../images/chore_list.svg";
export function CreateNewTodos() {
  return (
    <div className="App__container">
      <p className="App__Text">Crea tu primer TODO</p>
      <ChoreList className="App__svg" />
    </div>
  );
}
