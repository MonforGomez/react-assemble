import { HeroesCard } from "../index";
import Pagination from "../../pagination/pagination";

function HeroesList({
  heroes,
  pages,
  setPages,
  totalPage,
  withPagination = false,
}) {
  return (
    <div className="container my-5">
      <div className="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 justify-content-center">
        {heroes?.map((hero) => (
          <div className="col" key={hero.id}>
            <HeroesCard hero={hero} />
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

export default HeroesList;
