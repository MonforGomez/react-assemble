import { PageLayout } from "../../components/layout";
import jumboBG2 from "../../assets/jumbotron-characters.jpg"; //src/assets/jumbotron-img.png
import { AllHeroesController} from "../../components/heroes";
import heroeslist from "../../assets/heroes-list-logo.png";

function HeroesPage() {

  return (
    <PageLayout
      jumbotron={{
        background: jumboBG2,
        title: "REACT ASSEMBLE",
        subtitle:
          "Assemble Earth's mightiest heroes into a single ultimate database.",
      }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <img src={heroeslist} className="img-fluid" alt="Heroes List Logo" style={{ height: "150px", width: "auto" }} />
      </div>
      <AllHeroesController />
    </PageLayout>
  );
}

export default HeroesPage;
