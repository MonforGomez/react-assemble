import { HeroesList } from "../index";
import { useState, useEffect } from "react";
import * as HeroService from "../../../services/characters-service/characters-service";
import Loader from "../../ui/loader/loader";

export function AllHeroesController() {
  const [heroes, setHeroes] = useState();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    async function fetchHeroes() {
      try {
        const { character, totalPages } = await HeroService.getAllCharacters({
          page: page,
        });
        setTimeout(() => {
          setHeroes(character);
          setTotalPage(totalPages);
        }, 5_000);
      } catch (error) {
        console.error("No se han encontrado heroes", error);
      }
    }

    fetchHeroes();
  }, [page]);

  if (!heroes) {
    return <Loader />;
  } else {
    return (
      <HeroesList
        heroes={heroes}
        pages={page}
        setPages={setPage}
        totalPage={totalPage}
        withPagination={true}
      />
    );
  }
}

export default AllHeroesController;
