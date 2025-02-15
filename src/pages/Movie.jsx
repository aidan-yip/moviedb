import "./movie.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getMovieById,
  getMovieCast,
  getRecommendedMovies,
} from "../utilities/api";
import { IMG_URL } from "../globals/globals";
import { formatReleaseDate, formatRating } from "../globals/toolbelt";
import React from "react";
import Movies from "../components/Movies";
import bannerPlaceHolder from "/images/banner.png";
import castPlaceHolder from "/images/cast.png";

// MUI
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteButton from "../components/FavoriteButton";

function Movie() {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  const [recommendedMovies, setRecommendedMovies] = useState([]);

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
    getMovieCast(id)
      .then((castData) => {
        setCast(castData.slice(0, 5));
      })
      .catch((error) => {
        console.error("Error fetching cast:", error);
      });
    getRecommendedMovies(id)
      .then((recommendedMoviesData) => {
        setRecommendedMovies(recommendedMoviesData.results);
        console.log(recommendedMoviesData);
      })
      .catch((error) => {
        console.error("Error fetching recommended movies:", error);
      });
  }, [id]);

  // MUI
  const [value, setValue] = React.useState(3);

  return (
    <div className="moviePage">
      {movie && (
        <>
          <img
            className="banner"
            src={
              movie.backdrop_path
                ? `${IMG_URL}w780/${movie.backdrop_path}`
                : bannerPlaceHolder
            }
            alt={movie.title}
          />
          <section className="movieInfo">
            <h1 className="title">{movie.title}</h1>
            <p>Release Date: {formatReleaseDate(movie.release_date)}</p>
            <p>{movie.overview}</p>
            <p>Rating: {formatRating(movie.vote_average)}</p>
            <FavoriteButton movie={movie} />
            {/* user movie rating */}
            <p>Rate This Movie:</p>
            <Box sx={{ "& > legend": { mt: 2 } }}>
              <Rating
                name="simple-controlled"
                value={value}
                size="large"
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
            {/* movie rating */}
          </section>
            <h2 className="cast-header">Cast</h2>
            <div className="cast-container">
              {cast.length > 0 ? (
                cast.map((actor) => (
                  <div key={actor.id} className="cast-member">
                    <img
                      src={
                        actor.profile_path
                          ? `${IMG_URL}w185/${actor.profile_path}`
                          : castPlaceHolder
                      }
                      alt={actor.name}
                      className="cast-image"
                    />
                    <p>
                      <strong className="actor-name">{actor.name}</strong>
                    </p>
                    <p className="actor-role">as {actor.character}</p>
                  </div>
                ))
              ) : (
                <p>No cast information available.</p>
              )}
            </div>
          <div className="rec-container">
            <Movies title="Recommended Movies" movies={recommendedMovies} />
          </div>
        </>
      )}
    </div>
  );
}
export default Movie;
