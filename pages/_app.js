import "../styles/globals.css";
import Layout from "./layout"; 
import { useState } from "react";
import CartContext from '../context/CartContext';

// Ensure the navbar and footer are on every page and manage the global cart state
export default function App({ Component, pageProps }) {
  
  // This holds all the words the user clicks "buy" on.
  const [cart, setCart] = useState([]);

  //  Adds a new word to the cart array without removing old ones
  const addtoCart = (word) => {
    setCart((prevCart) => [...prevCart, word]);
  };

  return (
    <>
      {/* The CartContext.Provider shares the cart and addtoCart with every page */}
      <CartContext.Provider value={{ cart, addtoCart }}>
        {/* Using the Layout component to automatically include Navbar and Footer */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContext.Provider>
    </>
  );
}