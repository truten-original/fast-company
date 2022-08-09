import PropTypes from "prop-types"
import CaretDown from "./iconsSvg/CaretDown/CaretDown"
import CaretUp from "./iconsSvg/CaretUp/CaretUp"
const TableHeader = ({ onSort, selectedSort, sortingUnits }) => {
  const handleSort = (item) => {
    selectedSort.sortParam === item
      ? onSort({
        ...selectedSort,
        sortDirection: selectedSort.sortDirection === "asc" ? "desc" : "asc"
      })
      : onSort({ ...selectedSort, sortParam: item })
  }
  return (
    <thead>
      <tr>
        {Object.keys(sortingUnits).map((unit) => (
          <th
            onClick={() => {
              sortingUnits[unit].path && handleSort(sortingUnits[unit].path)
            }}
            role={sortingUnits[unit].path && "button"}
            scope="col"
            key={unit}
          >
            {sortingUnits[unit].name}
            {sortingUnits[unit].path === selectedSort.sortParam &&
              (selectedSort.sortDirection === "asc"
                ? (
                <CaretUp />
                  )
                : (
                <CaretDown />
                  ))}
          </th>
        ))}
      </tr>
    </thead>
  )
}
TableHeader.propTypes = {
  selectedSort: PropTypes.object,
  onSort: PropTypes.func,
  sortingUnits: PropTypes.object
}
export default TableHeader
