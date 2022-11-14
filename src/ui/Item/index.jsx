import React from "react";
import "./index.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      {props.CheckIcon}
      {props.EditIcon}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      {props.DeleteIcon}
    </li>
  );
}

export { TodoItem };
