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

export default Users
