import marvelLogo from "../../../assets/marvel-logo.png";
import { Link, NavLink } from "react-router";
import { useAuth } from "../../../context/auth-context";

function NavBar() {
  const { user, logout } = useAuth();
  return (
    <>
      {/* Barra superior */}
      <nav className="navbar navbar-dark" style={{ backgroundColor: "#111" }}>
        <div className="container-fluid d-flex align-items-center justify-content-between px-4">
          {/* Izquierda: reg/log zone or user tag */}
          <div
            className="d-flex align-items-center gap-2 text-white"
            style={{ minWidth: "180px" }}
          >
            {user ? (
              <div>
                <ul className="navbar-nav flex-row gap-3 d-flex list-unstyled m-0 p-0">
                  <li className="nav-item ">
                    <i className="bi bi-person-circle fs-5 m-1"></i>
                    <span className="fw-bold small text-uppercase">
                      {user.username}
                    </span>
                  </li>
                  <li className="nav-item border-start border-secondary ps-3">
                    <button
                      type="button"
                      className="btn btn-link text-white p-0 border-0 text-decoration-none shadow-none"
                      onClick={() => {
                        logout();
                      }}
                      title="Cerrar sesión" // 💡 Muy importante para accesibilidad (aparece al pasar el ratón)
                      style={{ transition: "transform 0.2s ease" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.15)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      {/* Icono de Font Awesome (Sign-out) */}
                      <i className="bi bi-box-arrow-right fs-5 text-secondary-hover "></i>
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <ul className="navbar-nav flex-row gap-3 d-flex list-unstyled m-0 p-0">
                  <li className="nav-item ">
                    <NavLink
                      className="nav-link text-uppercase fw-bold small"
                      to="/register"
                      style={{
                        color: "#ccc",
                        letterSpacing: "0.05em",
                        fontSize: "0.75rem",
                      }}
                    >
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item border-start border-secondary ps-3">
                    <NavLink
                      className="nav-link text-uppercase fw-bold small"
                      to="/login"
                      style={{
                        color: "#ccc",
                        letterSpacing: "0.05em",
                        fontSize: "0.75rem",
                      }}
                    >
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* </div>
                    <div className="collapse navbar-collapse" id="main-navbar">
                    <ul className="navbar-nav me-auto">
                      {user && (
                        <>
                          <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/search"><i className="fa fa-search" aria-hidden="true" /></NavLink>
                          </li>
                        </>
                      )}
                    </ul>
                    <ul className="navbar-nav">
                      {!user && (
                        <>
                          <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/register">Register</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                          </li>
                        </>
                      )}
                      {user && (
                        <>
                          <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/profile">{user.username}</NavLink>
                          </li>
                          <li className="nav-item">
                            <button className="nav-link btn btn-link" onClick={() => logout()}><i className="fa fa-sign-out"></i></button>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div> */}

          {/* Centro: logo Marvel */}

          <NavLink to="/">
            <img
              src={marvelLogo}
              alt="Marvel"
              style={{ height: "60px", width: "auto" }}
            />
          </NavLink>

          {/*búsqueda, al pulsar la lupa te redirige al buscador*/}
          <Link
            to="/search"
            className="d-flex align-items-center gap-3 text-white"
            style={{ minWidth: "160px", justifyContent: "flex-end" }}
          >
            <i className="bi bi-search fs-5"></i>
          </Link>
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
              >
                Characters
              </NavLink>
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
              >
                Movies
              </NavLink>
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
              >
                Games
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
