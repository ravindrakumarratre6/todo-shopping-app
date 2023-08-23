import React, { createContext, useContext, useReducer } from 'react';

// Create a context for the shopping cart
const CartContext = createContext();

// Define the initial state for the cart
const initialState = {
  cartItems: [], // Initialize your initial cart items here
};

// Define the cart reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_CARTS":
      return {
        ...state,
        todos: action.payload
      };
    case 'ADD_TO_CART':
      // Implement logic to add item to cart
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'REMOVE_FROM_CART':
      // Implement logic to remove item from cart
      console.log("remove befotre",state.cartItems)
      const newCart = state.cartItems.filter(item => item.id !== action.payload);
      console.log("remove after",newCart)
      return {
        ...state,
        cartItems: newCart,
      };
      
    default:
      return state;
  }
};

// Create a provider component to wrap your app with the cart context
export const CartProvider = ({ children }) => {
  const [State, Dispatch] = useReducer(cartReducer, initialState);
  console.log("state",State)
  const fetchCart = async () => {
    try {
      const res = await fetch('https://dummyjson.com/carts');
      const data = await res.json();
      const datta= State?.todos?.carts[0];
      console.log("cart", data);
      console.log("cart22", datta);
      Dispatch({ type: "LOAD_CARTS", payload: data });
    } catch (error) {
      console.log("error in cart", error);
    }
  };
  
  return (
    <CartContext.Provider value={{ State, Dispatch, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCartContext = () =>  useContext(CartContext);
