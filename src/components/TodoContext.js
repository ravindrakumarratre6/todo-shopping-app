import React, { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();

const initialState = {
  todos: []
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_TODOS":
      return {
        ...state,
        todos: action.payload
      };
    case "ADD_TASK":
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        todos: state.todos.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      };
    case "REMOVE_TASK":
      const newTodos = state.todos.filter((task) => task.id !== action.payload);
      return {
        ...state,
        todos: newTodos
      };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      dispatch({ type: "LOAD_TODOS", payload: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <TodoContext.Provider value={{ state, dispatch ,fetchData}}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
