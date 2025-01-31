import { IMG_URL } from "../globals/globals";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={`${IMG_URL}w300/${movie.poster_path}`} alt={movie.title} />
      <div className="hover">
        <h2>{movie.title}</h2>
        <p>Movie Description</p>
      </div>
    </div>
  );
}

export default MovieCard;
