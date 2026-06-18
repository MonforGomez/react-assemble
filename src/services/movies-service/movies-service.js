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

export async function listMovies() {
  //como TMDB exporta solo 20 peliculas por pagina, y hay 38 peliculas de marvel, se hace una peticion get por cada pagina, con un promise.all
  const [page1, page2] = await Promise.all([
    http.get("/discover/movie", { params: { with_companies: "420", page: 1 } }),
    http.get("/discover/movie", { params: { with_companies: "420", page: 2 } }),
  ]);

  // Juntamos los resultados de ambas páginas en un solo array
  const allResults = [...page1.data.results, ...page2.data.results];
  // y de ese array, creamos una constante que recoja todas las peliculas con nuestra funcion parsemovie para recoger los datos que hemos querido
  const parsedMovies = allResults.map((movie) => parseMovie(movie));

  // Y ordenamos con .sort en funcion de su fecha de estreno
  return parsedMovies.sort(
    (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate),
  );
}

export async function detailMovie(id) {
  const { data } = await http.get(`/discover/movie/${id}`);
  return parseMovie(data);
}
