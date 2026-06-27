import { MoviesList } from "../index";
import { useState, useEffect } from "react";
import * as MoviesService from "../../../services/movies-service/movies-service";

export function AllMoviesController() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await MoviesService.ListMovies(page);
        setMovies(movies);
        setTotalPage(totalPage);
      } catch (error) {
        console.error("No se han encontrado peliculas", error);
      }
    }
    fetchMovies();
  }, [page]);

   return (
    <MoviesList
      movies={movies}
      pages={page}
      setPages={setPage}
      totalPage={totalPage}
      withPagination={true}
    />
  );
}

export default AllMoviesController; 
