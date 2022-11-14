import React from "react";
import "./index.css";

function CreateTodoButton(props) {
  return (
    <button className="CreateTodoButton" onClick={props.onClick}>
      +
    </button>
  );
}

export { CreateTodoButton };
