import React, { useReducer } from "react";

export function useLocalStorage(itemName, defaultValue) {
  const [state, dispatch] = useReducer(reducer, initialState(defaultValue));
  const { error, loading, item, sincronizedItem } = state;

  // Action creators
  const onError = (error) => {
    dispatch({ type: actionTypes.error, payload: error });
  };
  const onSuccess = (item) => {
    dispatch({ type: actionTypes.success, payload: item });
  };
  const onSave = (item) => {
    dispatch({ type: actionTypes.save, payload: item });
  };
  const onSincronize = () => {
    dispatch({ type: actionTypes.sincronize });
  };

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
        onSuccess(parsedItems);
      } catch (error) {
        onError(error);
      }
    }, 1000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  return { item, saveItem, loading, error, sincronizeItem: onSincronize };
}
const initialState = (defaultValue) => ({
  error: false,
  loading: true,
  item: defaultValue,
  sincronizedItem: true,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    item: payload,
    loading: false,
    sincronizedItem: true,
    error: false,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};
