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


function getMovieById(id) {
    return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error fetching movie by ID:", error);
        throw error;
      });
  }
  function getMovieCast(movieId) {
    return fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch cast information");
            }
            return response.json();
        })
        .then((data) => data.cast) // Return only the cast array
        .catch((error) => {
            console.error("Error fetching movie cast:", error);
            throw error;
        });
}


export { getMovies, getMovieById, getMovieCast };