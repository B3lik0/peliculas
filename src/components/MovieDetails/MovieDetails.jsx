
import { useParams } from "react-router-dom"
import { get } from "../../data/API"
import { useState, useEffect } from "react"
import { MoviePoster } from "../../data/posterCard"
import List from "./List"
import "../MovieDetails/MovieDetails.css"
export default function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data)
    })
  }, [movieId])
  const imgUrl = MoviePoster(movie?.poster_path)
  return (
    <>
      <div className="movieContainer">
        <div>
          <h1>{movie?.original_title}</h1>
          <h3>{movie?.tagline}</h3>
          <br />
          <List genres={movie?.genres} />
          <br />
          <p>{movie?.overview}</p>
        </div>
        <div>
          <img src={imgUrl} width={500} />
        </div>
      </div>
    </>
  )
}