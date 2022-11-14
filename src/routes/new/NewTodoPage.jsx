import React from "react";
import { TodoForm } from "../../ui/Form";
import { useTodos } from "../../CustomHooks/useTodos";

export function NewTodoPage() {
  const { addTodo } = useTodos();
  return (
    <TodoForm
      label="Escribe tu nuevo TODO"
      submitText="Añadir"
      submitEvent={(text) => addTodo(text)}
    ></TodoForm>
  );
}
