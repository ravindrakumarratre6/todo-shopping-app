import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./components/CartContext";
import { TodoProvider } from "./components/TodoContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </CartProvider>
  </React.StrictMode>
);
