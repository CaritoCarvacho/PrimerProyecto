import "./Paginator.styles.css";

function Paginator({ totalPages, currentPage, onClick }) {
  const buttons = Array.from({ length: totalPages }, (_, page) => {
    return (
      <button
        key={"paginator-" + page}
        onClick={() => onClick(page)}
        className={currentPage === page ? "active" : ""}
      >
        {page + 1}
      </button>
    );
  });

  return (
    <div className="paginator-container">
      <button
        disabled={currentPage === 0}
        onClick={() => onClick(currentPage - 1)}
      >
        Prev
      </button>
      {buttons}
      <button
        disabled={currentPage === totalPages - 1}
        onClick={() => onClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Paginator;
