import './App.css';
import MovieCard from './components/movieCard.jsx'

function App() {
  const movienum = 1
  return (
    <>
      {
        movienum === 1 ? (<MovieCard movie={{ title: "avengers", releaseYear: "2020" }} />)
          :
          (<MovieCard movie={{ title: "Darknight", releaseYear: "2021" }} />)
      }
      {
        movienum===1 && <MovieCard movie={{ title: "bad guys", releaseYear: "2023" }} />
      }
    </>


  );
}

export default App 
