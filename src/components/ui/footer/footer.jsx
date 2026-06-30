function Footer() {
  // Función rápida para hacer scroll suave hacia arriba (Utilidad real)
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-100 bg-dark text-secondary py-4 mt-5 border-top border-secondary">
      <div className="container">
        <div className="row align-items-center justify-content-between g-3">
          
          {/* Lado Izquierdo: Copyright */}
          <div className="col-md-6 text-center text-md-start">
            <p className="m-0 text-white fw-bolder text-uppercase tracking-wider" style={{ letterSpacing: "1px" }}>
              REACT ASSEMBLE
            </p>
            <p className="m-0 small text-secondary text-uppercase mt-1" style={{ fontSize: "10px" }}>
              Todos los datos y multimedia pertenecen a sus respectivos proveedores externos © {new Date().getFullYear()}
            </p>
          </div>

          {/* Lado Derecho: ScrollTop + VisualEffect */}
          <div className="col-md-6 text-center text-md-end">
            <a 
              href="#top" 
              onClick={scrollToTop}
              className="text-secondary text-decoration-none small text-uppercase fw-bold me-4 hover-white"
              style={{ fontSize: "12px", transition: "color 0.2s" }}
            >
              ▲ Volver Arriba
            </a>
            <span className="text-muted d-none d-sm-inline">|</span>
            <span 
              className="text-muted small text-uppercase ms-0 ms-sm-4"
              style={{ fontSize: "12px" }}
            >
              Status: <span className="text-success">● Live</span>
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;