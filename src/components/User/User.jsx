import _ from "lodash"
import PropTypes from "prop-types"
const User = ({ user, handleDelete, sortingUnits }) => {
  const renderUnit = (unit, user) => {
    if (sortingUnits[`${unit}`].component) {
      if (typeof sortingUnits[unit].component === "function") {
        return sortingUnits[unit].component(user)
      } else {
        return (
          <button
            onClick={() => handleDelete(user._id)}
            className="btn btn-danger"
          >
            delete
          </button>
        )
      }
    } else {
      return _.get(user, _.get(sortingUnits, `${unit}.path`))
    }
  }
  return (
    <tr>
      {Object.keys(sortingUnits).map((sortingUnit) => (
        <td key={sortingUnit}> {renderUnit(sortingUnit, user)}</td>
      ))}
    </tr>
  )
}
User.propTypes = {
  user: PropTypes.object,
  handleDelete: PropTypes.func,
  sortingUnits: PropTypes.object
}
export default User
