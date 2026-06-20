import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import * as MovieService from "../../services/movies-service/movies-service";
import jumboBG4 from "../../assets/jumbotron-movies.jpg";
import { PageLayout } from "../../components/layout";


function MoviesDetailPage() {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(); 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movie = await MovieService.detailMovie(id);
        setMovie(movie);
      } catch (error) {
        console.error ("Error al cargar pelicula" , error)
      }
    };
    fetchMovie();
  }, [id])
  
  if (!movie) {
    return (
      <PageLayout
        style={{ backgroundColor: "blue" }}
        jumbotron={{
          background: jumboBG4,
          title: "REACT ASSEMBLE",
          subtitle: "Movies of Marvel. I LOVE YOU 3000.",
        }}
      >
        <p className="text-center mt-5">Cargando Pelicula...</p>
      </PageLayout>
    );
  }
  return (
    <PageLayout
       style={{ backgroundColor: "blue" }}
        jumbotron={{
          background: jumboBG4,
          title: "REACT ASSEMBLE",
          subtitle: "Movies of Marvel. I LOVE YOU 3000.",
      }}
    >
 <div className="container my-5">
      <div className="row g-4">
    
        <div className="col-md-4">
          <img
            src={movie.poster}
            alt={movie.title}
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-8 d-flex flex-column justify-content-center">
          <h1 className="fw-bold">{movie.title}</h1>

          <div className="d-flex gap-3 my-3">
            <span className="badge bg-warning text-dark fs-6">
              ⭐ {movie.rating.toFixed(1)}
            </span>
            <span className="badge bg-secondary fs-6">
              📅 {movie.releaseDate}
            </span>
          </div>

          <p className="text-muted">{movie.overview}</p>
        </div>
      </div>
      <div className="text-center mt-4">
          <Link
            to="/movies"
            className="btn btn-secondary align-items-center px-4"
          >
            <strong>Volver a Peliculas</strong>
          </Link>
        </div>
    </div>
    </PageLayout>

  );
}

export default MoviesDetailPage;
