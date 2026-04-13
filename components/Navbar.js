import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  //gets the current page path (so we know which link is active)
  const pathname = usePathname();

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
            {/*adds "active" class if user is on home page*/}
            <Link
              href="/"
              className={`navbar-link ${pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
          </li>

          <li>
            {/*checks if user is on catalog page*/}
            <Link
              href="/catalog"
              className={`navbar-link ${pathname === "/catalog" ? "active" : ""}`}
            >
              Catalog
            </Link>
          </li>

          <li>
            {/*checks if user is on cart page*/}
            <Link
              href="/cart"
              className={`navbar-link ${pathname === "/cart" ? "active" : ""}`}
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}