import MovieCard from "../Card/Card";
import { get } from "../../data/API";
import { useEffect, useState } from "react";
import "../Grid/Grid.css"
export default function Grid() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <div>
      <ul className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </ul></div>
  );
}
