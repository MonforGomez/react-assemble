import { useState } from "react";
import { searchAll } from "../../services/search-service/search-service";
import { HeroesList } from "../heroes/index";
import { GamesList } from "../games/index";
import { MoviesList } from "../movies/index";


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
          <HeroesList heroes={results.characters} />

          <h4>Películas ({results.movies.length})</h4>
          <MoviesList movies={results.movies} />

          <h4>Juegos ({results.games.length})</h4>
          <GamesList games={results.games} />

        </>
      )}
    </div>
  );
}

export default SearchPage;