import _ from "lodash"
const Pagination = ({
  handleChangePage,
  countItems,
  countItemsOnPage,
  currentPage,
}) => {
  const pageCount = Math.ceil(countItems / countItemsOnPage)
  const pages = _.range(1, pageCount + 1)
  if (pages.length === 1) {
    return null
  }
  return (
    <>
      <nav>
        <ul className="pagination">
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
        </ul>
      </nav>
    </>
  )
}

export default Pagination
