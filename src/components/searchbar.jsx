import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import { getsearchedMovies } from "../utilities/api";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    if (query.trim() === "") {
      setSearchedMovies([]);
      return;
    }
    getsearchedMovies(query)
      .then((data) => {
        setSearchedMovies(data.results);
      })
      .catch((error) => {
        alert("Error searching movies", error);
      });
  }, [query]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const navigate = useNavigate();
  const handleSelectMovie = (movieId) => {
    clearSearch();
    navigate(`/movie/${movieId}`);
  };

  const clearSearch = () => {
    setQuery("");
    setSearchedMovies([]);
  };

  const handleSubmit = (event) => {
    if (searchedMovies.length > 0) {
      navigate(`/searchedResults/:${query}`);
    } else {
      event.preventDefault();
    }
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search..."
            className="search-input"
          />
          <button type="submit" className="search-icon search-btn">
            🔍
          </button>
          {query && (
            <button className="clear-btn" onClick={clearSearch}>
              ✖
            </button>
          )}
        </form>
      </div>
      {searchedMovies.length > 0 && (
        <ul className="autocomplete-list">
          {searchedMovies.map((movie, index) => (
            <li
              key={index}
              onClick={() => handleSelectMovie(movie.id)}
              className="autocomplete-item"
            >
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
