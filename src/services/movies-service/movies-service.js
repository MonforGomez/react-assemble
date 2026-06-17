import axios from "axios";

const http = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

const imagesBaseUrl = 'https://image.tmdb.org/t/p/original';

function parseMovie(movie) {
  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    releaseDate: movie.release_date,
    rating: movie.vote_average,
    poster: `${imagesBaseUrl}${movie.poster_path}`
  };
}

export async function listMovies() {
  const { data } = await http.get("/discover/movie/", {
    params: {
      with_companies: "420",
    },
  });

  return data.results?.map((movie) => parseMovie(movie))
}

export async function detailMovie(id) {
  const { data } = await http.get(`/discover/movie/${id}`)
  return parseMovie(data)
}
