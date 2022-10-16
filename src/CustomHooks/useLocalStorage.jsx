import React from "react";

export function useLocalStorage(itemName, defaultValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(defaultValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(defaultValue));
          parsedItems = defaultValue;
        } else {
          parsedItems = JSON.parse(localStorageItem);
        }
        setItem(parsedItems);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { item, saveItem, loading, error };
}
