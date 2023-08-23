import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import ShoppingCart from "./components/ShoppingCart";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Posts from "./components/Posts";
import { useTodoContext } from "./components/TodoContext";
import { useCartContext } from "./components/CartContext";
import NavBar from "./components/NavBar";
function App() {
  const {fetchCart} =useCartContext()
  const { fetchData } = useTodoContext();
  useEffect(() => {
    fetchData();
  }, []);
useEffect(()=>{
  fetchCart()
},[])
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="post" element={<Posts />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
