import { useState, useEffect } from "react";
import * as GameService from "../../../services/games-service/games-service";
import { GamesCard } from "../index";



function GamesList() {
  const [games, setGames] = useState([]);
  const [page, setPages] = useState(1);
  const [totalPage, setTotalPage] = useState(1); 
 
  useEffect(() => {
    async function fetchGames() {
      try {
        const { games, totalPages } = await GameService.listGames(page);
        setGames(games);
        setTotalPage(totalPages);
      } catch (error) {
        console.error("No se han encontrado juegos", error);
      }
    }

    fetchGames();
  }, [page]);

  return (
    <div className="container my-5">
      <div className="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 justify-content-center">
        {games.map((game) => (
          <div className="co d-flex justify-content-center" key={game.id}>
            <GamesCard game={game} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
          <button
            className="btn btn-secondary"
            disabled={page === 1}
            onClick={() => setPages((prev) => prev - 1)}
          >
            Anterior 
          </button>
          <div className="cuadrado-redondeado bg-secondary text-body border border-light">
            <span className="fw-bold text-white">{page}</span>  
          </div>
            
          <button
            className="btn btn-secondary"
            disabled={page === totalPage} 
            onClick={() => setPages((prev) => prev + 1)}
          >
            Siguiente
          </button>
      </div>
    </div>
  );
}

export default GamesList;