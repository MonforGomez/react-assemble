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

  const { data } = await http.get("/discover/movie", { 
    params: { 
      with_companies: searcher, 
      page: page } });
 
  const parsedMovies = data.results.map((movie) => parseMovie(movie));
  const sortedMovies =parsedMovies.sort(
    (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)); 

    const pageSize = 20; 
    const totalPages = data.total_pages || Math.ceil(data.total_results / pageSize);

  return {
    movies: sortedMovies,
    totalPages: totalPages,
  }
}

export async function detailMovie(id) {
  const { data } = await http.get(`/movie/${id}`);
  return parseMovie(data);
}

export const searchMovies = async (query) => {
  const { data } = await http.get("/search/movie", {
    params: { query }
  })
  return data.results?.map(m => parseMovie(m))
}