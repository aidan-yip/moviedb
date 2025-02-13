import Movies from "../components/Movies.jsx";
import { use } from "react";
import { getsearchedMovies } from "../utilities/api.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./searchResults.css";

// import { data } from 'react-router';

function SearchResult() {
  const query = useParams().query;
  const [searchedMovieList, setSearchedMovies] = useState([]);

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

  return (
    <section>
      <div className="searched-movies">
        {searchedMovieList.length === 0 && <h2>No movies found</h2>}
        {searchedMovieList.length > 0 && (
          <Movies className="search-results" title="Search Results" movies={searchedMovieList} />
        )}
      </div>
    </section>
  );
}
export default SearchResult;
