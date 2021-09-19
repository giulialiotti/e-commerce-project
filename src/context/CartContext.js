import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
  
    /* Add items to cart function -- Missing: if product is already in cart and is added again increase quantity (Remove it and add a new one with the correct quantity) */
    const addToCart = (product) => {
        setCart([
          ...cart,
          product
        ]) 
    };
  
    /* Remove item from cart function */
    const removeFromCart = (id) => {
      setCart(cart.filter(product => product.id !== id));
    };
  
    /* Get number of items in cart function */
    const sumCartProducts = () => {
      return cart.reduce((acc, product) => acc + product.quantity, 0)
    };
  
    /* Remove all items from cart function */
    const emptyCart = () => {
      setCart([])
    };

    /* Check if product is already in cart function */
    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    };

    /* Get total price of products in cart function */
    const totalCartPrice = () => {
      return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, sumCartProducts, emptyCart, isInCart, totalCartPrice }}>
            {children}
        </CartContext.Provider>
    )
};