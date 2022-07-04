import { useState } from "react"
import API from "../api"
const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll())
  const renderList = (users) => {
    return users.map((user) => {
      return (
        <tr key={user["_id"]}>
          <td>{user.name}</td>
          <td>
            {user.qualities.map((quality) => {
              return (
                <span
                  key={quality["_id"]}
                  className={`badge  bg-${quality.color}`}
                  style={{ marginLeft: "4px" }}
                >
                  {quality.name}
                </span>
              )
            })}
          </td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}/5</td>
          <td>
            <button
              className="bg-danger btn text-white"
              data-user={user["_id"]}
              onClick={(event) => {
                const dataId = event.target.getAttribute("data-user")
                handleDelete(dataId)
              }}
            >
              delete
            </button>
          </td>
        </tr>
      )
    })
  }
  const handleDelete = (userId) => {
    setUsers([...users].filter((user) => user["_id"] !== userId))
  }
  const renderPhrase = (number) => {
    let phrase
    if (number > 4 || number === 1) {
      phrase = `${number} человек тусанет с тобой сегодня`
    } else if (number > 1 && number <= 4) {
      phrase = `${number} человека тусанут с тобой сегодня`
    }
    return phrase
  }
  if (users.length)
    return (
      <>
        <h1
          className="bg-primary text-white p-2"
          style={{ width: "fit-content" }}
        >
          {renderPhrase(users.length)}
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Качества</th>
              <th>Профессия</th>
              <th>Встретился, раз</th>
              <th>Оценка</th>
            </tr>
          </thead>
          <tbody>{renderList(users)}</tbody>
        </table>
      </>
    )
  return (
    <h1 className="bg-danger text-white p-2" style={{ width: "fit-content" }}>
      Никто с тобой не тусанет
    </h1>
  )
}

export default Users
