import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext";
function MovieCard({movie})
{
    const {isFavorite,addToFavorites,removeFromFavorites}=useMovieContext()
    const favorite=isFavorite(movie.id)
    function onfvrtclick(e){
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} img here`} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" :"" }`} onClick={onfvrtclick}>
                ♡
                </button>
            </div>
        </div>
        <div className="movie-info">
            <p>{movie.title}</p>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>

}
export default MovieCard;