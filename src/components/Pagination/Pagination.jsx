import styles from "./styles.module.css";

const Pagination = ({
  totalPages,
  handlePreviousPage,
  handleNextPage,
  handlePageClick,
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      {/* BTN Previous*/}
      <button
        onClick={handlePreviousPage}
        className={styles.arrow}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>

      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              disabled={index + 1 === currentPage}
              key={index}
              className={styles.pageNumber}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      {/* BTN Next*/}
      <button
        onClick={handleNextPage}
        className={styles.arrow}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
