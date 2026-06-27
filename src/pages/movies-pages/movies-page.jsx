import { PageLayout } from "../../components/layout";
import jumboBG4 from "../../assets/jumbotron-movies.jpg";
import movieslist from "../../assets/movies-list-logo.png";
import { AllMoviesController } from "../../components/movies";

function MoviesPage() {
  return (
    <PageLayout
      jumbotron={{
        background: jumboBG4,
        title: "REACT ASSEMBLE",
        subtitle:
          "Movies of Marvel. I LOVE YOU 3000.",
      }}
    >
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={movieslist}
          className="img-fluid"
          alt="Heroes List Logo"
          style={{ height: "150px", width: "auto" }}
        />
      </div>
      <AllMoviesController />
    </PageLayout>
  );
}

export default MoviesPage;
