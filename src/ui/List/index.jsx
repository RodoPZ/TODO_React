import React from "react";
import "./index.css";

function TodoList(props) {
  const renderfunc = props.children || props.render;

  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchValue)}

      <ul>
        {!props.loading && !props.error && props.searchedTodos.map(renderfunc)}
      </ul>
    </section>
  );
}

export { TodoList };
