import Link from "next/link";

export default function Navbar() {
  return (
    //navbar container
    <nav className="navbar">
        {/*center the content of the navbar*/}
      <div className="navbar-container">
        {/*logo on the left side of the navbar*/}
        <h1 className="navbar-logo">Words Mall</h1>
        {/*navigation links on the right side of the navbar*/}
        <ul className="navbar-links">
          <li>
            <Link href="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/catalog" className="navbar-link">
              Catalog
            </Link>
          </li>
          <li>
            <Link href="/cart" className="navbar-link">
              Cart
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}