import { PageLayout } from "../../components/layout";
import jumboBG3 from "../../assets/jumbotron-games.jpeg"; //src/assets/jumbotron-img.png
import gameslist from "../../assets/games-list-logo.png";
import { GamesCard } from "../../components/games";

function GamesDetailPage() {
  return (
    <PageLayout
      jumbotron={{
        background: jumboBG3,
        title: "REACT ASSEMBLE",
        subtitle:
          "Assemble Earth's mightiest heroes into a single ultimate database.",
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
      <GamesCard />
    </PageLayout>
  );
}

export default GamesDetailPage;
