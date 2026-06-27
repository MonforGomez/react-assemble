import logoSpider from "../../assets/logo-spiderman.png"

function Pagination({ page, totalPage, onPrev, onNext }) {
  return (
    <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
      <button
        className="btn btn-danger"
        disabled={page === 1}
        onClick={onPrev}
      >
        Anterior
      </button>
      <div
        className="position-relative rounded-circle"
        style={{ width: "45px", height: "45px" }}
      >
        <img
          src={logoSpider}
          alt="spiderPage"
          className="rounded-circle w-100 h-100"
          style={{ objectFit: "cover" }}
        />
        <span
          className="position-absolute top-50 start-50 translate-middle fw-bold text-white"
          style={{ textShadow: "3px 3px 3px black" }}
        >
          {page}
        </span>
      </div>

      <button
        className="btn btn-danger"
        disabled={page === totalPage}
        onClick={onNext}
      >
        Siguiente
      </button>
    </div>
  );
}

export default Pagination;
