import { Footer, Jumbotron } from "../../ui";



function PageLayout({ children, jumbotron, className = "" }) {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
      {jumbotron && <Jumbotron {...jumbotron} />}
      <div className={`container py-3 ${className} flex-grow-1` }>
        {children}
      </div>
      <Footer />
      </div>
    </>
  );
}
export default PageLayout;
