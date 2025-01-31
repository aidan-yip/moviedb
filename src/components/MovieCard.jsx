import { IMG_URL } from "../globals/globals";
import "./MovieCard.css";

// helper functions
import { formatReleaseDate, formatRating } from "../globals/toolbelt";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={`${IMG_URL}w300/${movie.poster_path}`} alt={movie.title} />
      <div className="hover">
        <div className="title-and-release">
          <h2>{movie.title}</h2>
          <p>{formatReleaseDate(movie.release_date)}</p>
        </div>
        <div className="rating-and-favorite">
          <p>Rating {formatRating(movie.vote_average)}</p>
          <buttom>♥️</buttom>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
