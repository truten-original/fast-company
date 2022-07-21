import PropTypes from "prop-types"
import _ from "lodash"
const Pagination = ({
  handleChangePage,
  countItems,
  countItemsOnPage,
  currentPage,
  handleDecrementPage,
  handleIncrementPage,
}) => {
  const pageCount = Math.ceil(countItems / countItemsOnPage)
  const pages = _.range(1, pageCount + 1)
  if (pages.length === 1 || pages.length === 0) {
    return null
  }
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item ">
          <button
            className="page-link"
            onClick={handleDecrementPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pages.map((page) => (
          <li
            key={`page ${page}`}
            className={"page-item" + (page === currentPage ? " active" : "")}
          >
            <button
              className="page-link"
              onClick={() => {
                handleChangePage(page)
              }}
            >
              {page}
            </button>
          </li>
        ))}
        <li className="page-item ">
          <button
            className="page-link"
            onClick={handleIncrementPage}
            disabled={currentPage === pages.length}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  handleChangePage: PropTypes.func,
  handleDecrementPage: PropTypes.func,
  handleIncrementPage: PropTypes.func,
  countItems: PropTypes.number,
  currentPage: PropTypes.number,
  countItemsOnPage: PropTypes.number,
}
export default Pagination
