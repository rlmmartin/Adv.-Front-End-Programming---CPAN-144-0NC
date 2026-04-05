import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <h1 className="navbar-logo">Words Mall</h1>

        <ul className="navbar-links">
          <li>
            <Link href="/pages/index" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/pages/catalog" className="navbar-link">
              Catalog
            </Link>
          </li>
          <li>
            <Link href="/pages/cart" className="navbar-link">
              Cart
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}