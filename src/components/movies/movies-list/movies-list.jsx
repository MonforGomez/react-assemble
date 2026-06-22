import { useState, useEffect } from "react";
import * as MoviesService from "../../../services/movies-service/movies-service";
import "./movies-list.css";
import { MoviesCard } from "../index";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await MoviesService.ListMovies(page);
        setMovies(movies);
      } catch (error) {
        console.error("No se han encontrado peliculas", error);
      }
    }
    fetchMovies();
  }, [page]);

  

  return (
    <div className="container my-5">
      <div className="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 justify-content-center">
        {movies.map((movie) => (
          <div className="col" key={movie.id}>
            <MoviesCard movie={movie} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
              <button
                className="btn btn-secondary"
                disabled={page === 1}
                onClick={() => setPage((prev) => prev - 1)}
              >
                Anterior
              </button>
              <div className="cuadrado-redondeado bg-secondary text-body border border-light">
                <span className="fw-bold text-white">{page}</span>  
              </div>
            
              <button
                className="btn btn-secondary"
                disabled={page === 2} 
                onClick={() => setPage((prev) => prev + 1)}
              >
                Siguiente
              </button>
            </div>
    </div>
  );
}

export default MoviesList;