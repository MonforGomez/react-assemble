
import Pagination from "../../pagination/pagination";
import { GamesCard } from "../index";

function GamesList({ games, pages, setPages, totalPage, withPagination = false }) {
  
  return (
    <div className="container my-5">
      <div className="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 justify-content-center">
        {games?.map((game) => (
          <div className="col d-flex justify-content-center" key={game.id}>
            <GamesCard game={game} />
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

export default GamesList;