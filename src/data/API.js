const API = 'https://api.themoviedb.org/3'
const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGQzOTM4MmIzNGU3ZGYzMDEyNzUxNjIzOWVjNzFkMSIsIm5iZiI6MTczNzE2MjgwMy4wNzIsInN1YiI6IjY3OGIwMDMzMDhkZDcwOGJiOTZkYmZjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8SUZlR1qczgb3qY94QarGhvoBZJq6sfIiSmIctefdhY'

export async function get(path) {
    return await fetch(API + path, {
        headers: {
            Authorization: "Bearer " + apiKey,
            "Content-Type": "application/json;charset=utf-8"
        }
    }).then(response => response.json())

}