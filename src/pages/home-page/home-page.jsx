import { PageLayout } from "../../components/layout/index";
import jumboBG from "../../assets/jumbotron-img.png";
import comingSoon from "../../assets/coming-soon-logo.png";

function HomePage() {
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
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              {" "}
              <h4 className="text-center mb-2 fw-bold">X-men 97 Season 2</h4>
              
              <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/mfUtseK27pc"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-md-8 mt-4">
              <h4 className="text-center mb-2 fw-bold">
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
