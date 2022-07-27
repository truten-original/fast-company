import { useRef, useState, useEffect } from "react"
import api from "../../api"
import Header from "../../components/Header/Header"
import Pagination from "../../components/Pagination/Pagination"
import SearchStatus from "../../components/SearchStatus/SearchStatus"
import Users from "../../components/Users/Users"
import GroupList from "../../components/GroupList/GroupList"
import { paginate } from "../../utils/utils"
import { countItemsOnPage } from "../../constants/constants"
const UsersList = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const [currentPage, setCurrentPage] = useState(1)
  const [currentUsers, setCurrentUsers] = useState()
  const [selectedProfession, setSelectedProfession] = useState("")
  const [professions, setProfessions] = useState()
  const item = useRef(countItemsOnPage)
  const usersPaginate = paginate(users, currentPage, countItemsOnPage)

  useEffect(() => {
    ;(async() => {
      const professionsArr = Object.values(await api.professions())
      setProfessions(professionsArr)
    })()
  }, [])

  useEffect(() => {
    setCurrentUsers(paginate(users, currentPage, countItemsOnPage))
  }, [users])
  const countItems = users.length

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
    item.current -= 1
    if (item.current === 0) {
      item.current = countItemsOnPage
      if (currentPage !== 1) {
        setCurrentPage((prev) => prev - 1)
      }
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
  const handleProfessionClick = (id) => {
    setCurrentUsers(users.filter((user) => user.profession._id === id))
    setSelectedProfession(id)
  }
  const handleClickAllUsersButton = () => {
    setCurrentUsers(usersPaginate)
    setSelectedProfession(null)
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
      {professions && (
        <>
          <button
            className="btn btn-secondary btn-sm"
            onClick={handleClickAllUsersButton}
          >
            все пользователи
          </button>
          <GroupList
            items={professions}
            handleItemClick={handleProfessionClick}
            selectedItem={selectedProfession}
          />
        </>
      )}
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
        itemContent
        itemKey
      />
    </>
  )
}

export default UsersList
