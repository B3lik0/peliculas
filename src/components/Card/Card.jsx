import "./card.css"
import { Link } from "react-router-dom"
export default function MovieCard({movie}) {
  const imgUrl = "https://image.tmdb.org/t/p/w300/" + movie.poster_path
  return (
    <Link to={"movies/"+movie.id}>
    <li className="card">
      <img  src={imgUrl} alt={movie.title}     className="movieImage" />
      <div>{movie.title}</div>
    </li>
    </Link>
  )
}