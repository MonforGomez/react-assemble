import marvelLogo from "../../../assets/marvel-logo.png";
import { NavLink } from "react-router";

function NavBar() {
  return (
    <>
      {/* Barra superior */}
      <nav className="navbar navbar-dark" style={{ backgroundColor: "#111" }}>
        <div className="container-fluid d-flex align-items-center justify-content-between px-4">
          {/* Izquierda: icono de usuario */}
          {/*Aqui introduciremos el login y register, o el nombre de usuario si esta logeado*/}
          <div
            className="d-flex align-items-center gap-2 text-white"
            style={{ minWidth: "160px" }}
          >
            <i className="bi bi-person-circle fs-5"></i>
            <span className="fw-bold small text-uppercase">Ruben</span>
          </div>

          {/* Centro: logo Marvel */}
         
            <NavLink to="/">
                <img src={marvelLogo} alt="Marvel" style={{ height: '60px', width: "auto"}}  />
            </NavLink>
          

          {/*búsqueda, al pulsar la lupa te redirige al buscador*/}
          <div
            className="d-flex align-items-center gap-3 text-white"
            style={{ minWidth: "160px", justifyContent: "flex-end" }}
          >
            <i className="bi bi-search fs-5"></i>
          </div>
        </div>
      </nav>

      {/* Barra de navegación inferior */}
      <nav
        className="navbar navbar-dark navbar-expand"
        style={{ backgroundColor: "#1a1a1a", borderTop: "1px solid #333" }}
      >
        <div className="container-fluid justify-content-center">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase fw-bold small"
                to="/characters"
                style={{
                  color: "#ccc",
                  letterSpacing: "0.05em",
                  fontSize: "0.75rem",
                }}
              >Characters</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase fw-bold small"
                to="/movies"
                style={{
                  color: "#ccc",
                  letterSpacing: "0.05em",
                  fontSize: "0.75rem",
                }}
              >Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase fw-bold small"
                to="/games"
                style={{
                  color: "#ccc",
                  letterSpacing: "0.05em",
                  fontSize: "0.75rem",
                }}
              >Games</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
