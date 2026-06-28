import { MoviesCard } from "../index";
import Pagination from "../../pagination/pagination";

function MoviesList({
  movies,
  pages,
  setPages,
  totalPage,
  title,
  withPagination = false,
}) {
  return (
    <div className="container my-5">
      {title && (
        <h4
          className="text-white fw-bold text-uppercase pb-2 mb-4 border-bottom border-danger border-3"
          style={{
            textShadow:
              "2px 2px 8px rgba(0, 0, 0, 0.9), -1px -1px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          {title}{" "}
          <span className="text-white fw-normal lowercase ms-2">
            - {movies?.length ?? 0}
          </span>
        </h4>
      )}

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
