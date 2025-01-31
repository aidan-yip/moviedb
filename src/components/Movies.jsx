import MovieCard from "./MovieCard";
import "./Movies.css";

function Movies({ title, movies }) {
  return (
    <div className="movies">
      <h1>{title}</h1>
      {/* map over movies */}
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
