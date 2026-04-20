// Edited by Raymond April 19 with checkout button that removes the stuff

import "../styles/globals.css";
import Layout from "./layout"; 
import { useState } from "react";
import CartContext from '../context/CartContext';

// Ensure the navbar and footer are on every page and manage the global cart state
export default function App({ Component, pageProps }) {
  
  //This holds all the words the user clicks "buy" on.
  const [cart, setCart] = useState([]);

  
  // This will add a word to the cart Array
  const addtoCart = (word) => {
    setCart((prevCart) => [...prevCart, word]);
  };

  const removeCart = (wordRemove) => {
    setCart((prevCart) => prevCart.filter((item) => item.word !== wordRemove.word));
  };

  // New function for Phase 3: Finalize all components and functionality
  // This allows the checkout button to empty the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      {/* The CartContext.Provider shares the cart, addtoCart, removeCart, and clearCart with every page */}
      <CartContext.Provider value={{ cart, addtoCart, removeCart, clearCart }}>
        {/* Using the Layout component to automatically include Navbar and Footer */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContext.Provider>
    </>
  );
}