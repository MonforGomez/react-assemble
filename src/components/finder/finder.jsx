import { useState } from "react";
import { searchAll } from "../../services/search-service/search-service";
import { HeroesCard } from "../heroes/index";
import { GamesCard } from "../games/index";
import { MoviesCard } from "../movies/index";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const data = await searchAll(query);
    setResults(data);
    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSearch} className="d-flex gap-2 mb-4">
        <input
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar en Marvel..."
        />
        <button className="btn btn-danger" type="submit">
          Buscar
        </button>
      </form>

      {loading && <p>Buscando...</p>}

      {results && (
        <>
          <h4>Personajes ({results.characters.length})</h4>
          <div className="row">
            {results.characters.map((character) => (
              <div className="col-md-3" key={character.id}>
                <HeroesCard hero={character} />
              </div>
            ))}
          </div>

          <h4>Películas ({results.movies.length})</h4>
          <div className="row">
            {results.movies.map((movie) => (
              <div className="col-md-3" key={movie.id}>
                <MoviesCard movie={movie} />
              </div>
            ))}
          </div>

          <h4>Juegos ({results.games.length})</h4>
          <div className="row">
            {results.games.map((game) => (
              <div className="col-md-3" key={game.id}>
                <GamesCard game={game} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SearchPage;

// import * as MoviesService from "../../services/movies-service/movies-service";
// import * as GamesService from "../../services/games-service/games-service";
// import * as CharactersService from "../../services/characters-service/characters-service";
// import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router";
// import { HeroesList } from "../heroes/index";
// import { GamesList } from "../games/index";
// import { MoviesList } from "../movies/index";

// function Finder() {
//   const [state, setState] = useState(null);
//   const [searchParams, setSearchParams] = useSearchParams();

//   // 1. Leemos el término inicial de la URL
//   const queryName = searchParams.get("name") || "";

//   // 2. Estado local dedicado exclusivamente al texto del input
//   const [inputValue, setInputValue] = useState(queryName);

//   useEffect(() => {
//     async function fetch() {
//       if (!queryName.trim()) {
//         setState({
//           games: [],
//           movies: [],
//           characters: [],
//         });
//         return;}
//       try {
//         const [characters, movies, games] = await Promise.all([
//           CharactersService.getAllCharacters(queryName),
//           MoviesService.searchMovies(queryName),
//           GamesService.listGames(queryName),
//         ]);

//         setState({
//           games,
//           movies,
//           characters,
//         });
//       } catch (error) {
//         console.error("Cargando los resultados de la busqueda:", error);
//       setState({
//           games: [],
//           movies: [],
//           characters: [],
//         });
//       }
//     }
//     fetch();
//   }, [queryName]);

//   // 4. Manejador del cambio de texto
//   const handleSearchChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);

//     if (value.trim()) {
//       setSearchParams({ name: value });
//     } else {
//       setSearchParams({});
//     }
//   };

//   if (!state) return <>Cargando resultados...</>;
//   else {
//     const { movies, games, characters } = state;
//     return (
//       <div className="search-results-container">
//         {/* Input del buscador */}
//         <div className="search-bar-container" style={{ margin: "20px 0" }}>
//           <input
//             type="text"
//             placeholder="Buscar películas, personajes o juegos..."
//             value={inputValue}
//             onChange={handleSearchChange}
//             style={{
//               padding: "10px 15px",
//               width: "100%",
//               maxWidth: "400px",
//               borderRadius: "4px",
//               border: "1px solid #ccc",
//               fontSize: "16px",
//             }}
//           />
//         </div>

//         {/* CORREGIDO: Cambiado {name} por {queryName} */}
//         <h2>Resultados para: "{queryName}"</h2>

//         {/* Sección de Personajes */}
//         <section>
//           <h3>Personajes</h3>
//           <HeroesList characters={characters} />
//         </section>

//         {/* Sección de Películas */}
//         <section>
//           <h3>Películas</h3>
//           <MoviesList movies={movies} />
//         </section>

//         {/* Sección de Videojuegos */}
//         <section>
//           <h3>Videojuegos</h3>
//           <GamesList games={games} />
//         </section>
//       </div>
//     );
//   }
// }

// export default Finder;
