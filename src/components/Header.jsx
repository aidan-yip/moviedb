import { APP_TITLE } from '../globals/globals';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>{APP_TITLE}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Movies/:id">Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;