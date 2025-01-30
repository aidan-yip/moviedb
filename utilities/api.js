import { BASE_URL } from "../src/globals/globals";

function getPopularMovies(){
    return fetch(`${BASE_URL}`)
}