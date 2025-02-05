import MovieCard from "./MovieCard";
import "./Movies.css";

function Movies({ title, movies }) {
  return (
    <div className="movies">
      <h1>{title}</h1>
      {/* map over movies */}
      <div className="movies-container">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default Movies;
