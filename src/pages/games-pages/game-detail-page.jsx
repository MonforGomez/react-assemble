import { PageLayout } from "../../components/layout";
import jumboBG3 from "../../assets/jumbotron-games.jpeg";
import { useEffect, useState } from "react";
import * as GameService from "../../services/games-service/games-service";
import { Link, useParams } from "react-router";

function GamesDetailPage() {
  const { slug } = useParams();
  const [game, setGame] = useState();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const game = await GameService.detailGame(slug);
        setGame(game);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGame();
  }, [slug]);

  if (!game) {
    return (
      <PageLayout
        style={{ backgroundColor: "blue" }}
        jumbotron={{
          background: jumboBG3,
          title: "REACT ASSEMBLE",
          subtitle: "The ultimate Marvel crossover: PRESS START TO FIGHT!",
        }}
      >
        <p className="text-center mt-5">Cargando Juego...</p>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      jumbotron={{
        background: jumboBG3,
        title: "REACT ASSEMBLE",
        subtitle: "The ultimate Marvel crossover: PRESS START TO FIGHT!",
      }}
    >
      <div className="container py-4">
        {/* rating e imagen */}
        <div className="card mb-4 border-0 shadow-sm overflow-hidden">
          <div className="card-body d-flex justify-content-between align-items-start flex-wrap gap-2">
            <div>
              <h1 className="card-title h3 mb-1">{game.name}</h1>
            </div>
            <div className="text-end">
              <span className="fs-4 text-warning">★</span>
              <span className="fs-5 fw-semibold ms-1">{game.rating}</span>
              <span className="text-muted small"> / 5</span>
            </div>
          </div>
          <div className="card-body text-center">
            {game.picture ? (
              <img
                src={game.picture}
                alt={game.name}
                className="img-fluid rounded"
              />
            ) : (
              <p className="text-muted small mb-0">Sin imagen disponible</p>
            )}
          </div>
        </div>

        {/* Stat cards */}
        <div className="row g-3 mb-4">
          <div className="col">
            <div className="card text-center border-0 bg-light">
              <div className="card-body">
                <p className="text-muted small mb-1">RATING</p>
                <p className="fs-4 fw-semibold text-warning mb-0">
                  ★ {game.rating}
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card text-center border-0 bg-light">
              <div className="card-body">
                <p className="text-muted small mb-1">PLATAFORMAS</p>
                <p className="fs-6 fw-semibold mb-0">{game.platforms}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <Link
            to="/games"
            className="btn btn-secondary align-items-center px-4"
          >
            <strong>Volver a Juegos</strong>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}

export default GamesDetailPage;
