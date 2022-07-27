import { useRef, useState, useEffect } from "react"
import api from "../../api"
import Header from "../../components/Header/Header"
import Pagination from "../../components/Pagination/Pagination"
import SearchStatus from "../../components/SearchStatus/SearchStatus"
import Users from "../../components/Users/Users"
import { paginate } from "../../utils/utils"
import { countItemsOnPage } from "../../constants/constants"
import GroupList from "../../components/GroupList/GroupList"
const UsersList = () => {
  const [users, setUsers] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProfession, setSelectedProfession] = useState()
  const [professions, setProfessions] = useState()
  const item = useRef(countItemsOnPage)
  const filteredUsers = selectedProfession
    ? users?.filter((item) => item.profession.name === selectedProfession.name)
    : users
  const countItems = filteredUsers?.length
  const currentUsers = paginate(filteredUsers, currentPage, countItemsOnPage)
  useEffect(() => {
    ;(async() => {
      const users = await api.users.fetchAll()
      const profs = await api.professions.fetchAll()
      setProfessions(profs)
      setUsers(users)
    })()
  }, [])
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProfession])
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
  const handelSelectProfession = (profession) => {
    setSelectedProfession(profession)
  }
  const hadleClearProfessionFilter = () => {
    setSelectedProfession()
  }
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1))
    if (number > 4 && number < 15) return "человек тусанет"
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут"
    if (lastOne === 1) return "человек тусанет"
    return "человек тусанет"
  }

  return (
    <div className="d-flex align-items-center">
      {professions && (
        <div>
          <button
            className="btn btn-secondary btn-sm"
            onClick={hadleClearProfessionFilter}
          >
            все пользователи
          </button>
          <GroupList
            items={professions}
            handleItemClick={handelSelectProfession}
            selectedItem={selectedProfession}
          />
        </div>
      )}
      {users && (
        <div className="d-flex align-items-center flex-column">
          <SearchStatus users={filteredUsers} renderPhrase={renderPhrase} />
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
        </div>
      )}
    </div>
  )
}

export default UsersList
