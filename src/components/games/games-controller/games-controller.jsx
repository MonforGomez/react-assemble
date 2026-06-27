import { GamesList } from "../index";
import { useState, useEffect } from "react";
import * as GameService from "../../../services/games-service/games-service";

export function AllGamesController() {
  const [games, setGames] = useState([]);
  const [page, setPages] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    async function fetchGames() {
      try {
        const { games, totalPages } = await GameService.listGames({ page: page });
        setGames(games);
        setTotalPage(totalPages);
      } catch (error) {
        console.error("No se han encontrado juegos", error);
      }
    }

    fetchGames();
  }, [page]);

  return (
    <GamesList
      games={games}
      pages={page}
      setPages={setPages}
      totalPage={totalPage}
      withPagination={true}
    />
  );
}

export default AllGamesController;
