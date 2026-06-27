import { MoviesCard } from "../index";
import Pagination from "../../pagination/pagination";

function MoviesList({ movies, pages, setPages, totalPage, withPagination = false }) {
 
  return (
    <div className="container my-5">
      <div className="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 justify-content-center">
        {movies?.map((movie) => (
          <div className="col" key={movie.id}>
            <MoviesCard movie={movie} />
          </div>
        ))}
      </div>
       {withPagination && (
        <Pagination
          page={pages}
          totalPage={totalPage}
          onPrev={() => setPages((prev) => prev - 1)}
          onNext={() => setPages((prev) => prev + 1)} 
        />
      )}
    </div>
  );
}

export default MoviesList;