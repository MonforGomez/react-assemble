import { PageLayout } from "../../components/layout/index";
import jumboBG from "../../assets/jumbotron-img.png";
import comingSoon from "../../assets/coming-soon-logo.png";


function HomePage() {
  const marvelTextShadow = {
    textShadow:
      "2px 2px 8px rgba(0, 0, 0, 0.9), -1px -1px 4px rgba(0, 0, 0, 0.7)",
  };

  return (
    <>
      <PageLayout
        jumbotron={{
          background: jumboBG,
          title: "REACT ASSEMBLE",
          subtitle:
            "Assemble Earth's mightiest heroes into a single ultimate database.",
        }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={comingSoon}
            className="img-fluid"
            alt="Heroes List Logo"
            style={{ height: "60px", width: "auto" }}
          />
        </div>

        <div
          className="w-80  text-center py-3 my-4 border-top border-bottom border-light shadow-lg"
          style={{
            backgroundColor: "#e50914",
            borderRadius: "15px 5px 15px 5px",
          }}
        >
          <h2
            className="text-white text-uppercase fw-bolder m-0 m-0"
            style={{
              ...marvelTextShadow,
              letterSpacing: "2px",
              fontSize: "2rem",
            }}
          >
            "With great power comes great responsibility"
          </h2>
        </div>

        <div className="container my-5">
          <div className="row justify-content-center g-5">

            <div className="col-md-8">
              {" "}
              <h4
                className="text-center text-white text-uppercase pb-1 mb-3 fw-bold border-bottom border-3 "
                style={{ ...marvelTextShadow}}
              >
                X-men 97 Season 2
              </h4>
              <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/mfUtseK27pc"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; "
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="col-md-8 mt-5">
              <h4
                className="text-center text-white text-uppercase pb-1 mb-3 fw-bold border-bottom border-3 "
                style={{ ...marvelTextShadow}}
              >
                Spider-man: Brand New Day
              </h4>

              <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/6TnbSI4yfZY"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default HomePage;
