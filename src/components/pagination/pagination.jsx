function Pagination({ page, totalPage, onPrev, onNext }) {
    return (
        <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
          <button
            className="btn btn-secondary"
            disabled={page === 1}
            onClick={onPrev}
          >
            Anterior 
          </button>
          <div className="cuadrado-redondeado bg-secondary text-body border border-light">
            <span className="fw-bold text-white">{page}</span>  
          </div>
            
          <button
            className="btn btn-secondary"
            disabled={page === totalPage} 
            onClick={onNext}
          >
            Siguiente
          </button>
      </div>
    )
}

export default Pagination;