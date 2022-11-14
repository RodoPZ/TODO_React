import React from "react";

export function TodoHeader({ children, loading }) {
  return (
    <header>
      {React.Children.toArray(children).map((child, index) =>
        React.cloneElement(child, { loading, key: index })
      )}
    </header>
  );
}
