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
          <HeroesList heroes={results.characters} title={"Heroes"} />

          <MoviesList movies={results.movies} title={"Peliculas"} />

          <GamesList games={results.games} title={"Juegos"} />
        </>
      )}
    </div>
  );
}

export default SearchPage;
