import PropTypes from "prop-types"
import User from "../User/User"
const Users = ({ users, handleDelete }) => {
  return (
    <>
      <tbody>
        {users &&
          users.map((user) => (
            <User user={user} handleDelete={handleDelete} key={user._id} />
          ))}
      </tbody>
    </>
  )
}
Users.propTypes = {
  users: PropTypes.array,
  handleDelete: PropTypes.func,
}
export default Users
