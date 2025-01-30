import MovieCard from "./MovieCard";
import "./movies.css";

function Movies({ title, movies }) {
  return (
    <div className="movies">
      <h1>{title}</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
