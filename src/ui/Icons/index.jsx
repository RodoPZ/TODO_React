import React from "react";
import { ImCheckmark } from "react-icons/im";
import { BsTrashFill } from "react-icons/bs";
import { AiTwotoneEdit } from "react-icons/ai";
import "./index.css";

const IconTypes = {
  check: <ImCheckmark className="Icon-check" color="inherit" />,
  delete: <BsTrashFill className="Icon-delete" />,
  edit: <AiTwotoneEdit className="Icon-edit" />,
};

export function TodoIcon({ type, completed, onClick }) {
  return (
    <span
      className={`Icon ${!completed && `Icon-${type}`} ${
        completed && `Icon-${type}--active`
      }`}
      onClick={onClick}
    >
      {IconTypes[type]}
    </span>
  );
}
