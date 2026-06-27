import { PageLayout } from "../../components/layout";
import jumboBG3 from "../../assets/jumbotron-games.jpeg"; //src/assets/jumbotron-img.png
import gameslist from "../../assets/games-list-logo.png";
import { AllGamesController } from "../../components/games";

function GamesPage() {
  return (
    <PageLayout
      jumbotron={{
        background: jumboBG3,
        title: "REACT ASSEMBLE",
        subtitle:
          "The ultimate Marvel crossover: PRESS START TO FIGHT!",
      }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={gameslist}
          className="img-fluid"
          alt="Heroes List Logo"
          style={{ height: "150px", width: "auto" }}
        />
      </div>
      <AllGamesController />
    </PageLayout>
  );
}

export default GamesPage;
