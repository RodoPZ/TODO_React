import React from "react";
import "./index.css";
import { TodoIcon } from "../Icons";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <TodoIcon
        type="check"
        onClick={props.onComplete}
        completed={props.completed}
      />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <TodoIcon
        type="delete"
        onClick={props.onDelete}
        completed={props.completed}
      />
    </li>
  );
}

export { TodoItem };
