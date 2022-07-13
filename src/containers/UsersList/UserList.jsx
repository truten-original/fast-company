import React, { useState } from "react"
import api from "../../api"
import Header from "../../components/Header/Header"
import SearchStatus from "../../components/Title/SearchStatus"
import User from "../../components/User/User"

const UsersList = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1))
    if (number > 4 && number < 15) return "человек тусанет"
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут"
    if (lastOne === 1) return "человек тусанет"
    return "человек тусанет"
  }

  return (
    <>
      <SearchStatus users={users} renderPhrase={renderPhrase} />
      {users.length > 0 && (
        <table className="table">
          <Header />
          <User users={users} handleDelete={handleDelete} />
        </table>
      )}
    </>
  )
}

export default UsersList
