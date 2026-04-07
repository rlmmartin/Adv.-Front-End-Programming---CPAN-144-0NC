import Link from "next/link";
import { useContext } from 'react';
import CartContext from '../context/CartContext'; 

export default function Navbar() {
  // Access the cart list from the global context to show the count
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo section */}
        <h1 className="navbar-logo">Words Mall</h1>
        
        {/* */}
        <ul className="navbar-links">
          <li>
            <Link href="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link href="/catalog" className="navbar-link">Catalog</Link>
          </li>
          <li>
            <Link href="/cart" className="navbar-link">
              Cart ({cart.length}) 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}