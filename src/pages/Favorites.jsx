import "./favorites.css";
import Movies from "../components/movies";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function Favorites() {
  const { favorites, loadFavsFromLocalStorage } = useContext(GlobalContext);
  return (
    <div>
      <Movies title="Favorite Movies" movies={favorites} />
    </div>
  );
}
export default Favorites;
