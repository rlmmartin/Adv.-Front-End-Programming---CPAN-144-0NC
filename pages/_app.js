import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import cartContext from '../context/CartContext';

//ensure the navbar and footer are on every page of the website
export default function App({ Component, pageProps }) {
  
  //This will hold all the words the user clicks buy on to their cart.
  const [cart, setCart] = useState([]);

  // This addas a new word to the cart without removing the old ones.
  const addtoCart = (word) => {
    setCart((prevCart) => [...prevCart,word]);
  };

  return (
    <>
      {/* The CartContext.Provider will share the cart and addtoCart with every page of the website. */}
      <cartContext.Provider value={{ cart, addtoCart }}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </cartContext.Provider>
    </>
  );
}