import { useRef, useState } from "react"
import api from "../../api"
import Header from "../../components/Header/Header"
import Pagination from "../../components/Pagination/Pagination"
import SearchStatus from "../../components/SearchStatus/SearchStatus"
import Users from "../../components/Users/Users"
import { paginate } from "../../utils/utils"
import { countItemsOnPage } from "../../constants/constants"
const UsersList = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const [currentPage, setCurrentPage] = useState(1)
  const item = useRef(countItemsOnPage)

  const countItems = users.length
  const currentUsers = paginate(users, currentPage, countItemsOnPage)

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
    item.current = item.current - 1
    if (item.current === 0) {
      item.current = countItemsOnPage
      setCurrentPage((prev) => prev - 1)
    }
  }

  const handleChangePage = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const handleIncrementPage = () => {
    setCurrentPage((prev) => prev + 1)
  }
  const handleDecrementPage = () => {
    setCurrentPage((prev) => prev - 1)
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
        handleIncrementPage={handleIncrementPage}
        handleDecrementPage={handleDecrementPage}
        currentPage={currentPage}
        countItems={countItems}
        countItemsOnPage={countItemsOnPage}
        handleChangePage={handleChangePage}
      />
    </>
  )
}

export default UsersList
