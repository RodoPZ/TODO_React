import React from "react";
import { ImCheckmark } from "react-icons/im";
import { BsTrashFill } from "react-icons/bs";
import "./index.css";

const IconTypes = {
  check: (color) => <ImCheckmark className="Icon-check" />,
  delete: (color) => <BsTrashFill className="Icon-check" />,
};

export function TodoIcon({ type, color = "#25425a", completed, onClick }) {
  return (
    <span
      className={`Icon Icon-${type} ${completed && `Icon-${type}--active`}`}
      onClick={onClick}
    >
      {IconTypes[type](color)}
    </span>
  );
}
