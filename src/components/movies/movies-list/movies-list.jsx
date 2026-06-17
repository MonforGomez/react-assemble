import { useState, useEffect } from "react";
import * as MoviesService from "../../../services/movies-service/movies-service";
import { MoviesCard } from "../index";

function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await MoviesService.listMovies();
        setMovies(movies);
      } catch (error) {
        console.error("No se han encontrado peliculas", error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div className="container my-5">
      <div className="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 justify-content-center">
        {movies.map((movie) => (
          <div className="col" key={movie.id}>
            <MoviesCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
