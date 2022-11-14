import React from "react";
import { useTodos } from "../../CustomHooks/useTodos";
import { TodoCounter } from "../../ui/Counter";
import { TodoSearch } from "../../ui/Search";
import { TodoList } from "../../ui/List";
import { TodoItem } from "../../ui/Item";
import { CreateTodoButton } from "../../ui/Button";
// import { Modal } from "../../Modal";
import { TodoForm } from "../../ui/Form";
import { TodoLoading } from "../../ui/Loading";
import { TodoIcon } from "../../ui/Icons";
import "./index.css";
import { CreateNewTodos } from "../../ui/CreateNewTodos";
import { TodoHeader } from "../../ui/Header";
import { ChangeAlert } from "../../ui/ChangeAlert";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    // openModal,
    // setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    // addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <main>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        onError={() => <p>Error</p>}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <CreateNewTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText} </p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            CheckIcon={
              <TodoIcon
                type="check"
                onClick={() => completeTodo(todo.id)}
                completed={todo.completed}
              />
            }
            EditIcon={
              <TodoIcon
                type="edit"
                onClick={() =>
                  navigate("/edit/" + todo.id, { state: { todo } })
                }
                completed={todo.completed}
              />
            }
            DeleteIcon={
              <TodoIcon
                type="delete"
                onClick={() => deleteTodo(todo.id)}
                completed={todo.completed}
              />
            }
          ></TodoItem>
        )}
      </TodoList>

      {/* {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
      */}
      <CreateTodoButton
        onClick={() => navigate("/new")}
        // setOpenModal={setOpenModal} openModal={openModal}
      />
      <ChangeAlert sincronize={sincronizeTodos} />
    </main>
  );
}

export default App;
