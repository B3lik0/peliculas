export function MoviePoster(path) {
    const img = "https://image.tmdb.org/t/p/w300" + path
    return <img src={img} alt="poster" />
}