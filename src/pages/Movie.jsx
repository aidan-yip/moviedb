import "./movie.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieById } from "../utilities/api";
import { IMG_URL } from "../globals/globals";
import { formatReleaseDate, formatRating } from "../globals/toolbelt";
import React from "react";

// MUI
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteButton from "../components/FavoriteButton";

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

  // MUI
  const [value, setValue] = React.useState(2);

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
          <p>Rating: {formatRating(movie.vote_average)}</p>
          <p>Release Date: {formatReleaseDate(movie.release_date)}</p>
          <FavoriteButton movie={movie} />
          {/* user movie rating */}
          <p>Rate This Movie:</p>
          <Box sx={{ "& > legend": { mt: 2 } }}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          {/* movie rating */}
        </>
      )}
    </div>
  );
}
export default Movie;
