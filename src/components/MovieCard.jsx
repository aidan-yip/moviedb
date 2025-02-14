import { IMG_URL } from "../globals/globals";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import postPlaceholder from "/images/movie.png";

// helper functions
import { formatReleaseDate, formatRating } from "../globals/toolbelt";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/movie/${movie.id}`)} className="movie-card">
      <img
        src={
          movie.poster_path
            ? `${IMG_URL}w300/${movie.poster_path}`
            : postPlaceholder
        }
        alt={movie.title}
      />
      <div className="hover">
        <div className="title-and-release">
          <h2>{movie.title}</h2>
          <p>{formatReleaseDate(movie.release_date)}</p>
        </div>
        <div className="rating-and-favorite">
          <p>Rating {formatRating(movie.vote_average)}</p>
          <FavoriteButton movie={movie} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
