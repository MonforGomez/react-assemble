import { Link } from "react-router";

function GamesCard({ game: { name, id, picture, rating } }) {
  const getRatingColor = (score) => {
    if (score >= 4) return "bg-success border-success";
    if (score >= 3) return "bg-warning  border-warning";
    return "bg-danger border-danger";
  };

  const roundedRating = rating ? rating.toFixed(1) : null;

  return (
    <Link
      to={`/games/${id}`}
      className="card text-bg-dark "
      style={{ maxWidth: "200px" }}
    >
      <div className="position-absolute top-0 end-0 w-100 p-2 d-flex gap-1 flex-wrap z-3">
        {roundedRating !== null && roundedRating > 0 && (
          <span
            className={`badge ${getRatingColor(roundedRating)} border d-flex align-items-center gap-1 fw-bold shadow-sm`}
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.5px",
              padding: "5px 8px",
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          >
            <span className="text-light">★</span>
            {roundedRating}
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
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0) 100%)",
        }}
      >
        <h6 className="card-title m-0 fw-black text-uppercase tracking-wide text-white text-shadow-sm fs-5">
          {name}
        </h6>
      </div>
    </Link>
  );
}

export default GamesCard;
