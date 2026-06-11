import { PageLayout } from "../components/layout";
import jumboBG from "../assets/jumbotron-img.png"   //src/assets/jumbotron-img.png
import { HeroesList } from "../components/heroes";

function HomePage() {
  return (
    <>
      <PageLayout
        jumbotron={{
          background: jumboBG,
          title: "REACT ASSEMBLE",
          subtitle: "Assemble Earth's mightiest heroes into a single ultimate database.",
        }}
      >
        <h1>Bienvenidos a nuestra pagina de Marvel</h1>
        <h3>Heroes List</h3>
        <HeroesList/>
      </PageLayout>
      
    </>
  );
}

export default HomePage;
