import { API_KEY, BASE_URL } from "../globals/globals";

function getMovies(type){
    return fetch(`${BASE_URL}/movie/${type}?api_key=${API_KEY}`)
    .then((response) => {
        if(!response.ok) {
            throw new Error("Failed to fetch popular movies");
        }
        return response.json();
    })
    .catch((error) =>{
        console.error("Error fetching popular movies:",error);
        throw error;
    })
}

export { getMovies };