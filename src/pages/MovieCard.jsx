import { IMG_URL } from './globals/globals.js';

function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img src={`${IMG_URL}`} alt="movie poster" />
            <h2>{movie.title}</h2>
            <p>Movie Description</p>
        </div>
    );
}

export default MovieCard;