import { APP_TITLE } from "../globals/globals";
import "./Header.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import site_logo from "/public/images/moviedb_iconv2.png";
import SearchBar from "./SearchBar";
import { getsearchedMovies } from "../utilities/api";

function Header() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <>
      <header>
        <a href="#maincontent" id="skip_to_main">
          Skip to main content
        </a>
        <div className="header_container">
          <Link to="/" className="site_logo">
            <img
              src={site_logo}
              className="site-logo"
              alt="Site logo. Click to go to the homepage."
              aria-label="Site logo. Click to go to the homepage."
            />
          </Link>
          <h1>{APP_TITLE}</h1>
        </div>

        <nav>
          <button
            className="menu_button"
            aria-controls="header_menu"
            aria-expanded={isActive}
            aria-label="Menu Toggle"
            onClick={toggleClass}
          >
            <span className="material-symbols-outlined menu_icon"> menu </span>
          </button>

          <menu id="header_menu" className={isActive ? "menu_toggle" : null}>
            <li>
              <SearchBar />
            </li>
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
    </>
  );
}

export default Header;
