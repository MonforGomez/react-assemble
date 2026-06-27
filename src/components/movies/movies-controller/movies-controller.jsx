import { MoviesList } from "../index";
import { useState, useEffect } from "react";
import * as MoviesService from "../../../services/movies-service/movies-service";
import Loader from "../../ui/loader/loader";

export function AllMoviesController() {
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await MoviesService.ListMovies("420", page);
        setTimeout(() => {
        setMovies(movies.movies);
        setTotalPage(movies.totalPage);
        }, 5_000);
      } catch (error) {
        console.error("No se han encontrado peliculas", error);
      }
    }
    fetchMovies();
  }, [page]);

  if (!movies) {
    return <Loader />;
  } else {
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
}

export default AllMoviesController;
