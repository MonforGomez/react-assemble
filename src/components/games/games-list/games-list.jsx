import { useState, useEffect } from "react";
import * as GameService from "../../../services/games-service/games-service";
import { GamesCard } from "../index";

function GamesList(className = "") {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const games = await GameService.listGames();
        setGames(games);
      } catch (error) {
        console.error("No se han encontrado juegos", error);
      }
    }

    fetchGames();
  }, []);
  return (
    <div className={`d-flex flex-wrap gap-2 mt-2 ${className}`}>
      {games.map((game) => (
        <GamesCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GamesList;