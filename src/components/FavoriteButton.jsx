import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function FavoriteButton({ movie }) {
  const { favorites, addFavorite, removeFavorite } = useContext(GlobalContext);
  const isFavorite = favorites.find((fav) => {
    return fav.id === movie.id;
  });
  function handleClick(event) {
    event.stopPropagation();
    if (isFavorite) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }
  }
  return (
    <button onClick={handleClick}>
      {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
    </button>
  );
}
export default FavoriteButton;
