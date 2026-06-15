import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as HeroService from "../../services/characters-service/characters-service";
import { PageLayout } from "../../components/layout";
import jumboBG2 from "../../assets/jumbotron-characters.jpg";

function HeroeDetailPage() {
  const { slug } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const character = await HeroService.getCharacter(slug);
        setCharacter(character);
      } catch (error) {
        console.error("no va", error);
      }
    };
    fetchCharacter();
  }, [slug]);

  if (!character) {
    return (
      <PageLayout
        style={{ backgroundColor: "blue" }}
        jumbotron={{
          background: jumboBG2,
          title: "REACT ASSEMBLE",
          subtitle:
            "Assemble Earth's mightiest heroes into a single ultimate database.",
        }}
      >
        <p className="text-center mt-5">Cargando héroe...</p>
      </PageLayout>
    );
  }

  const {
    name,
    picture,
    stats = {},
    gender,
    race,
    fullName,
    appearance = { height: [], weight: [] },
    aliases = [],
    placeofbirth,
  } = character;

  return (
    <PageLayout
      jumbotron={{
        background: jumboBG2,
        title: "REACT ASSEMBLE",
        subtitle:
          "Assemble Earth's mightiest heroes into a single ultimate database.",
      }}
    >
      <div className="container my-4">
        <div className="row g-4">
          {/* 
            - col-md-4: En tablets ocupa 4 de las 12 columnas disponibles.
            - col-lg-3: En laptops se reduce a 3 de las 12 columnas.
        */}
          <div className="col-lg-3 text-center">
            <h2 className="mb-3 text-uppercase fw-black fs-3 text-shadow-sm">
              {name}
            </h2>

            <img
              src={picture}
              alt={name}
              className="img-fluid rounded shadow border border-secondary"
            />
          </div>

          {/* 
            - col-md-8: En tablets toma las 8 columnas restantes de la rejilla.
            - col-lg-9: En laptops toma las 9 columnas restantes del contenedor.
        */}
          <div className="col-md-8 col-lg-9">
            {/*  
            - row: Inicia una sub-rejilla interna para subdividir el espacio de la columna principal.
            - g-4: Mantiene la consistencia con una separación de 1.5rem entre los sub-paneles inferiores.
        */}
            <div className="row g-4">
              {/* 
                - col-12: Comportamiento por defecto en móviles; el panel se expande al 100% del ancho.
                - col-md-6: En tablets, ocupa la mitad del espacio disponible (6 de 12).
            */}
              <div className="col-12 col-md-6">
                <h4 className="text-danger text-uppercase fw-bold fs-5 mb-3">
                  Detalles Básicos
                </h4>

                {/* CLASSES: 
                    - list-group: Inicializa el componente de lista estructurada de Bootstrap.
                    - list-group-flush: Elimina los bordes exteriores izquierdo y derecho, además de los bordes redondeados.
                    - bg-dark: Cambia el color a un gris muy oscuro (revisar).
                */}
                <ul className="list-group list-group-flush border border-secondary rounded bg-dark p-2 shadow">
                  {/* CLASSES: 
                    - list-group-item: Define la fila estructural interna obligatoria del componente list-group.
                    - bg-transparent: Elimina el fondo blanco por defecto del ítem para mostrar el bg-dark del contenedor padre.
                */}
                  <li className="list-group-item bg-transparent text-light py-2">
                    <strong
                      className="text-secondary text-uppercase me-2"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Nombre Real:
                    </strong>
                    <span className="fw-semibold">
                      {fullName || "Desconocido"}
                    </span>
                  </li>

                  <li className="list-group-item bg-transparent text-light py-2">
                    <strong
                      className="text-secondary text-uppercase me-2"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Lugar de Origen:
                    </strong>
                    <span className="fw-semibold">
                      {placeofbirth || "Desconocido"}
                    </span>
                  </li>

                  <li className="list-group-item bg-transparent text-light py-2">
                    <strong
                      className="text-secondary text-uppercase me-2"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Físico:
                    </strong>
                    <span className="fw-semibold">
                      {appearance.height?.[1] || "N/A"} /{" "}
                      {appearance.weight?.[1] || "N/A"}
                    </span>
                  </li>
                  <li className="list-group-item bg-transparent py-3 d-flex gap-2 flex-wrap">
                    {/* CLASSES: 
                        - badge: Transforma la etiqueta en una píldora visual con padding integrado.
                        - bg-X: Aplica type al badge.
                    */}
                    {race && (
                      <span
                        className="badge bg-danger text-uppercase p-2 fw-bold"
                        style={{ letterSpacing: "0.5px" }}
                      >
                        {race}
                      </span>
                    )}
                    {gender && (
                      <span className="badge bg-secondary text-uppercase p-2 fw-bold">
                        {gender}
                      </span>
                    )}
                  </li>
                </ul>
                {aliases.length > 0 && (
                  <div className="mt-3">
                    {/* CLASSES: 
                        - d-block: Fuerza al elemento inline a comportarse como un bloque, provocando un salto de línea obligatorio después de él.
                    */}
                    <span className="text-secondary fw-bold small d-block mb-2 text-uppercase">
                      Alias conocidos:
                    </span>
                    <div className="d-flex flex-wrap gap-2">
                      {aliases.map((a) => (
                        <span
                          key={a}
                          className="badge bg-dark border border-secondary text-light p-2"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* SUB-PANEL 2: Estadísticas de Poder */}
              <div className="col-12 col-md-6">
                {Object.keys(stats).length > 0 && (
                  <div>
                    <h4 className="text-danger text-uppercase fw-bold fs-5 mb-3">
                      Estadísticas de Poder
                    </h4>
                    <div className="bg-dark p-3 border border-secondary rounded shadow">
                      {Object.entries(stats).map(([key, value]) => (
                        <div key={key} className="mb-3">
                          <div className="d-flex justify-content-between mb-1">
                            {/* CLASSES: 
                                - text-capitalize: Transforma la primera letra de la palabra (el nombre de la estadística) a mayúscula.
                                - text-white-50: Aplica color blanco al texto pero con una opacidad reducida al 50%.
                            */}
                            <strong className="text-capitalize text-white-50">
                              {key}
                            </strong>
                            <span className="text-white fw-bold">
                              {value} pts
                            </span>
                          </div>
                          <div className="progress" style={{ height: "8px" }}>
                            <div
                              className={`progress-bar ${value >= 70 ? "bg-success" : value >= 40 ? "bg-warning" : "bg-danger"}`}
                              style={{ width: `${value}%` }}
                              aria-valuenow={value}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default HeroeDetailPage;
