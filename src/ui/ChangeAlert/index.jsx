import React from "react";
import { Modal } from "../../Modal";
import { useStorageListener } from "./useStorageListener";
import "./index.css";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <Modal>
        <div className="alert__container">
          <p className="alert__title">Hubo cambios en la lista</p>
          <button
            className="alert__button"
            onClick={() => {
              toggleShow(false);
            }}
          >
            Sincronizar
          </button>
        </div>
      </Modal>
    );
  } else {
  }
}

export { ChangeAlert };
