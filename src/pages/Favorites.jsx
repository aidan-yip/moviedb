import "./favorites.css";
import Movies from "../components/Movies";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function Favorites() {
  const { favorites, loadFavsFromLocalStorage } = useContext(GlobalContext);
  return (
    <div className="favourite-page">
      <Movies title="Favorite Movies" movies={favorites} />
      {favorites.length === 0 && <p>You do not have any favorite movies.</p>}
    </div>
  );
}
export default Favorites;
