import "./movie.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieById } from "../utilities/api";
import { IMG_URL } from "../globals/globals";
import { formatReleaseDate } from "../globals/toolbelt";

function Movie() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getMovieById(id)
      .then((movie) => {
        setMovie(movie);
        console.log(movie);
      })
      .catch((error) => {
        alert("Error fetching movie", error);
        console.error("Error fetching movie", error);
      });
  }, [id]);

  return (
    <div className="moviePage">
      {movie && (
        <>
          <h1 className="title">{movie.title}</h1>
          <img
            className="banner"
            src={`${IMG_URL}w780/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>Release Date: {formatReleaseDate(movie.release_date)}</p>
          <button>♥️</button>
        </>
      )}
    </div>
  );
}
export default Movie;
