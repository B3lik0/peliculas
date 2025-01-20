import MovieCard from "./Card";
import { get } from "../data/API";
import { useEffect, useState } from "react";

export default function Grid() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  console.log(movies)
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}
