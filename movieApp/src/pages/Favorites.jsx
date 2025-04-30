import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../services/api";
function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
        <div className="favorites">
            <h2>Your Favorites</h2>
      <div className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h2>No favorites yet.</h2>
      <p>add favorites to see movies here !</p>
    </div>
  );
}
export default Favorites;
