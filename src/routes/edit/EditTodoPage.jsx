import React from "react";
import { useTodos } from "../../CustomHooks/useTodos";
import { TodoForm } from "../../ui/Form";
import { useLocation, useParams } from "react-router-dom";
import "./index.css";

export function EditTodoPage() {
  const location = useLocation();
  const { editTodo, loading, getTodo } = useTodos();
  const params = useParams();
  const id = Number(params.id);
  let todoText;
  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p className="loadingText">Cargando...</p>;
  } else {
    const todo = getTodo(id);
    todoText = todo.text;
  }
  return (
    <TodoForm
      label="Edita tu TODO"
      defaultTodoText={todoText}
      submitText="Editar"
      submitEvent={(newText) => editTodo(id, newText)}
      disabled={loading}
    ></TodoForm>
  );
}
