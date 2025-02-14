import MovieCard from "./MovieCard";
import "./Movies.css";

function Movies({ title, movies }) {
  return (
    <section className="movies">
      <h1 className="section-header" id="section-header">{title}</h1>
      {/* map over movies */}
      <div className="movies-container">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="divider"></div>
    </section>
  );
}

export default Movies;
