import { useState, useEffect } from "react";
import * as HeroService from "../../../services/characters-service/characters-service";
import { HeroesCard } from "../index";

function HeroesList(className = "") {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    async function fetchHeroes() {
      try {
        const heroes = await HeroService.getAllCharacters();
        setHeroes(heroes);
      } catch (error) {
        console.error("No se han encontrado heroes", error);
      }
    }

    fetchHeroes();
  }, []);
  return (
    <div className={`d-flex flex-wrap gap-2 mt-2 ${className}`}>
      {heroes.map((hero) => (
        <HeroesCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
}

export default HeroesList;
