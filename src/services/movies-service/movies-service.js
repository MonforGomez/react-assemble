import axios from "axios";

const http = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

const imagesBaseUrl = "https://image.tmdb.org/t/p/original";

function parseMovie(movie) {
  return {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    releaseDate: movie.release_date,
    rating: movie.vote_average,
    poster: `${imagesBaseUrl}${movie.poster_path}`,
  };
}


export async function ListMovies(filter = "420", page = 1) {
  const searcher = filter || "420"; 

  const { data : movies } = await http.get("/discover/movie", { 
    params: { 
      with_companies: searcher, 
      page: page } });
 
  const parsedMovies = movies.results.map((movie) => parseMovie(movie));
  const sortedMovies =parsedMovies.sort(
    (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)); 

  

  return {
    movies: sortedMovies,
    totalPage: movies.total_pages,
  }
}

export async function detailMovie(id) {
  const { data : movies } = await http.get(`/movie/${id}`);
  return parseMovie(movies);
}

export const searchMovies = async (query) => {
  const { data : movies } = await http.get("/search/movie", {
    params: { query }
  })
  return movies.results?.map(m => parseMovie(m))
}