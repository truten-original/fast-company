import PropTypes from "prop-types"
import User from "../../User/User"

const TableBody = ({ users, handleDelete, sortingUnits, handleBookmark }) => {
  return (
    <tbody>
      {users &&
        users.map((user) => {
          return (
            <User
              handleBookmark={handleBookmark}
              sortingUnits={sortingUnits}
              user={user}
              handleDelete={handleDelete}
              key={user._id}
            />
          )
        })}
    </tbody>
  )
}
TableBody.propTypes = {
  users: PropTypes.array,
  handleDelete: PropTypes.func,
  sortingUnits: PropTypes.object,
  handleBookmark: PropTypes.func
}
export default TableBody
