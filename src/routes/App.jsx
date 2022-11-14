import React from "react";
import Homepage from "./home/HomePage";
import { EditTodoPage } from "./edit/EditTodoPage";
import { NewTodoPage } from "./new/NewTodoPage";
import { HashRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/new" element={<NewTodoPage />}></Route>
          <Route path="/edit/:id" element={<EditTodoPage />}></Route>
          <Route path="*" element={<p>Not Found</p>}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}
