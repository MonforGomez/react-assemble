import { GamesList } from "../index";
import { useState, useEffect } from "react";
import * as GameService from "../../../services/games-service/games-service";
import Loader from "../../ui/loader/loader";

export function AllGamesController() {
  const [games, setGames] = useState();
  const [page, setPages] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    async function fetchGames() {
      try {
        const { games, totalPages } = await GameService.listGames({
          page: page,
        });
        //setTimeout(() => {
          setGames(games);
          setTotalPage(totalPages);
        //}, 5_000);
      } catch (error) {
        console.error("No se han encontrado juegos", error);
      }
    }

    fetchGames();
  }, [page]);

  if (!games) {
    return <Loader />;
  } else {
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
}

export default AllGamesController;
