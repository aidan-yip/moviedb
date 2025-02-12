import { APP_TITLE } from "../globals/globals";
import "./Header.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import site_logo from "/public/images/camera_icon.svg";
import SearchBar from "./SearchBar";
import { getsearchedMovies } from "../utilities/api";

function Header() {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <a href="#maincontent" id="skip_to_main">
        Skip to main content
      </a>
      <div className="header_container">
        <h1>{APP_TITLE}</h1>
        <Link to="/" className="site_logo">
          <img
            src={site_logo}
            alt="Site logo. Click to go to the homepage."
            aria-label="Site logo. Click to go to the homepage."
          />
        </Link>
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

        <menu
          id="header_menu"
          className={isActive ? "menu_toggle" : null}
          onClick={toggleClass}
        >
          <SearchBar />
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
