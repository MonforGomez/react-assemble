import { PageLayout } from "../../components/layout/index";
import jumboBG from "../../assets/jumbotron-img.png"   //src/assets/jumbotron-img.png


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
      </PageLayout>
      
    </>
  );
}

export default HomePage;
