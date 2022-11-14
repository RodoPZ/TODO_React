import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V2", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModalSincronizar, setOpenModalSincronizar] = React.useState(false);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => {
    const id = newTodoId();
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
      id: id,
    });
    saveTodos(newTodos);
  };
  const getTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    return todos[todoIndex];
  };

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  const editTodo = (id, newText) => {
    const todoIndex = todos.findIndex((todo) => {
      console.log(todo.id);
      return todo.id == id;
    });

    const newTodos = [...todos];

    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  };
  return {
    error,
    loading,
    getTodo,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    editTodo,
    addTodo,
    deleteTodo,
    sincronizeTodos,
    openModalSincronizar,
    setOpenModalSincronizar,
  };
}

function newTodoId() {
  console.log(Date.now());
  return Date.now();
}
