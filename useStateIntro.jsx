import MovieCard from "../components/MovieCard";
import {useState} from "react";

function Home() {
    const [searchQuery , setSearchQuery]=useState("");

  const movies = [
    { id: 1, title: "John Wick", releaseYear: "2000" },
    { id: 2, title: "Avengers", releaseYear: "2020" },
    { id: 3, title: "John Wick 2", releaseYear: "2009" },
  ];

  const handleSearch = (e) => {
    alert(searchQuery)
    e.preventDefault() // this is to prevent the default functioning of onsubmit i.e clears the search bar after button press
    setSearchQuery("") // this updates the searchQuery to "" so clears the search bar
  };
  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="Search movies here..."
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>

      <div className="movie-grid">
        {movies.map(
            (movie) => 
                movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}
export default Home;
