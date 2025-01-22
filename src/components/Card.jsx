export default function MovieCard({movie}) {
  console.log(movie)
  const imgUrl = "https://image.tmdb.org/t/p/w300/" + movie.poster_path
  return (
    <li className="container">
      <div>{movie.title}</div>
      <img src={imgUrl} alt={movie.title}      />
    </li>
  )
}