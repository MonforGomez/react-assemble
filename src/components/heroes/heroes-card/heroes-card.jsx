import { Link } from "react-router";

function HeroesCard({ hero: { name, picture, slug, gender, race } }) {
  return (
    <Link
      to={`/characters/${slug}`}
      className="card text-bg-dark"
      style={{ maxWidth: "200px" }}
    >
    <div className="position-absolute top-0 start-0 w-100 p-2 d-flex gap-1 flex-wrap z-3">
        {race && (
          <span className="badge bg-danger text-uppercase fw-bold style-badge" style={{ fontSize: "0.65rem", letterSpacing: "0.5px" }}>
            {race}
          </span>
        )}
        {gender && (
          <span className="badge bg-secondary text-uppercase fw-bold style-badge" style={{ fontSize: "0.65rem", opacity: "0.9" }}>
            {gender}
          </span>
        )}
      </div>

      <img 
        src={picture} 
        className="card-img w-100 h-100 object-fit-cover" 
        alt={name} 
        style={{ minHeight: "300px" }}
      />
      
      <div 
        className="card-img-overlay d-flex align-items-end p-3"
        style={{
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0) 100%)"
        }}
      >
        <h6 className="card-title m-0 fw-black text-uppercase tracking-wide text-white text-shadow-sm fs-5">
          {name}
        </h6>
      </div>
    </Link>
  );
}

export default HeroesCard;
