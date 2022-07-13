import { useState } from "react"
import Qualities from "../Qualities/Qualities"
import ToogleBookmark from "./iconsSvg/ToogleBookmark/ToogleBookmark"
const User = ({ users, handleDelete }) => {
  return (
    <>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>
              <Qualities user={user} />
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate} /5</td>
            <td>
              <ToogleBookmark />
            </td>
            <td>
              <button
                onClick={() => handleDelete(user._id)}
                className="btn btn-danger"
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  )
}

export default User
