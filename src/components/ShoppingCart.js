import React from "react";
import { useCartContext } from "./CartContext";
import "../css/ShoppingCart.css"; // Assuming the CSS file is named ShoppingCart.css

const ShoppingCart = () => {
  const { State, Dispatch } = useCartContext();
  const cartProducts = State?.todos?.carts;
  const newCartItem = State.cartItems;
  const calculateSubtotal = () => {
    if (cartProducts) {
      return cartProducts.reduce((total, cart) => {
        return (
          total +
          cart.products.reduce((subtotal, item) => subtotal + item.price, 0)
        );
      }, 0);
    }
    return 0;
  };

  const handleAddToCart = (item) => {
    Dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const handleRemoveFromCart = (itemId) => {
    console.log("id", itemId);
    Dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  return (
    <div className="shopping-cart-container">
      <h2 className="section-heading">Shopping Cart</h2>
      <ul className="shopping-cart-addlist">
        {newCartItem.map((item) => (
          <li key={item.id}>
           <span >{item.title}</span>  <span>${item.price}</span>
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      {cartProducts?.map((cart) => (
        <div key={cart.cartId} className="cart">
          <h3>{cart.cartName}</h3>
          {cart?.products.map((item) => (
            <div key={item.id} className="cart-item">
              <span className="item-title">{item.title}</span>
              <span className="item-price">${item.price}</span>
              <button
                className="add-button"
                onClick={() => handleAddToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ))}

      <div className="subtotal">
        <h1>
          <strong>Subtotal:</strong> ${calculateSubtotal()}
        </h1>
      </div>
    </div>
  );
};

export default ShoppingCart;
