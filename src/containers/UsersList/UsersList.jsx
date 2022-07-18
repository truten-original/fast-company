import { useEffect, useRef } from "react"
import { useState } from "react"
import api from "../../api"
import Header from "../../components/Header/Header"
import Pagination from "../../components/Pagination/Pagination"
import SearchStatus from "../../components/Title/SearchStatus"
import Users from "../../components/Users/Users"

const UsersList = () => {
  const countItemsOnPage = 4

  const [users, setUsers] = useState(api.users.fetchAll())
  const [currentPage, setCurrentPage] = useState(1)
  const item = useRef(4)
  const countItems = users.length
  const paginate = (users, currentPage, countItemsOnPage) => {
    const startIndex = (currentPage - 1) * countItemsOnPage
    return [...users].splice(startIndex, countItemsOnPage)
  }
  const currentUsers = paginate(users, currentPage, countItemsOnPage)
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
    item.current = item.current - 1
    if (item.current === 0) {
      item.current = 4
      setCurrentPage((prev) => prev - 1)
    }
  }
  const handleChangePage = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const checkUsers = (users) => {
    if (users.length === 0) {
      setCurrentPage((prev) => prev - 1)
    }
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
      {countItems > 0 && (
        <table className="table">
          <Header />
          <Users users={currentUsers} handleDelete={handleDelete} />
        </table>
      )}
      <Pagination
        checkUsers={checkUsers}
        currentUsers={currentUsers}
        currentPage={currentPage}
        countItems={countItems}
        countItemsOnPage={countItemsOnPage}
        handleChangePage={handleChangePage}
      />
    </>
  )
}

export default UsersList
