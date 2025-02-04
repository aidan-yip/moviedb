import { APP_TITLE } from "../globals/globals";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>{APP_TITLE}</h1>
      <nav>
        <menu>
          <li>
            <Link to="/" className="navlink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Favorites" className="navlink">
              Favorites
            </Link>
          </li>
          <li>
            <Link to="/About" className="navlink">
              About
            </Link>
          </li>
        </menu>
      </nav>
    </header>
  );
}

export default Header;
