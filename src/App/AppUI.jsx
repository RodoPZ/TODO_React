import React from "react";
import { TodoContext } from "../Components/Context";
import { TodoCounter } from "../Components/Counter";
import { TodoSearch } from "../Components/Search";
import { TodoList } from "../Components/List";
import { TodoItem } from "../Components/Item";
import { CreateTodoButton } from "../Components/Button";
import { Modal } from "../Modal";
import { TodoForm } from "../Components/Form";
import { TodoLoading } from "../Components/Loading";
import "./index.css";
import { CreateNewTodos } from "../Components/CreateNewTodos";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <main>
      <h1 className="Title">TODO</h1>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Error</p>}
        {loading && <TodoLoading />}
        {!loading && !searchedTodos.length && <CreateNewTodos />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </main>
  );
}

export { AppUI };
