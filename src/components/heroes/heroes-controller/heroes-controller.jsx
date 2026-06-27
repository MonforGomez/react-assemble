import { useState, useEffect } from "react";
import * as HeroService from "../../../services/characters-service/characters-service";
import { HeroesList } from "../index";

export function AllHeroesController() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    async function fetchHeroes() {
      try {
        const heroes = await HeroService.getAllCharacters();
        console.log("heroes:", heroes.length);
        setHeroes(heroes);
      } catch (error) {
        console.error("No se han encontrado heroes", error);
      }
    }

    fetchHeroes();
  }, []);

  return (
    <HeroesList heroes={heroes}/>
  );
}

export default AllHeroesController;