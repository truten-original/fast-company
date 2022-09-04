import _ from "lodash"
import { useEffect, useRef, useState } from "react"
import Table from "../../components/common/table/Table/Table"
import api from "../../api"
import GroupList from "../../components/common/GroupList/GroupList"
import Pagination from "../../components/common/Pagination/Pagination"
import SearchStatus from "../../components/common/SearchStatus/SearchStatus"
import { countItemsOnPage } from "../../constants/constants"
import { paginate } from "../../utils/utils"
import MySearch from "../../components/UI/MySearch/MySearch"
const UsersList = () => {
  const [users, setUsers] = useState()
  const [searchedUsers, setSearchedUsers] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProfession, setSelectedProfession] = useState()
  const [sort, setSort] = useState({ sortParam: "name", sortDirection: "asc" })
  const [professions, setProfessions] = useState()
  const item = useRef(countItemsOnPage)
  const filteredUsers = selectedProfession
    ? users?.filter((item) => item.profession.name === selectedProfession.name)
    : users
  const sortedUsers = _.orderBy(
    filteredUsers,
    [sort.sortParam],
    [sort.sortDirection]
  )
  const countItems = filteredUsers?.length
  const currentUsers = paginate(sortedUsers, currentPage, countItemsOnPage)
  const userSearch = (query) => {
    if (query.length !== 0) {
      setSearchedUsers(
        users.filter((user) =>
          user.name.toLowerCase().includes(query.toLowerCase())
        )
      )
    } else {
      setSearchedUsers(null)
    }
    setSelectedProfession(null)
  }
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
  const handleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark }
        }
        return user
      })
    )
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
    setSearchedUsers(null)
  }
  const hadleClearProfessionFilter = () => {
    setSelectedProfession()
  }
  const handleSort = (item) => {
    setSort(item)
  }
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1))
    if (number > 4 && number < 15) return "человек тусанет"
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут"
    if (lastOne === 1) return "человек тусанет"
    return "человек тусанет"
  }
  if (users) {
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
              <div>
                <MySearch userSearch={userSearch} />
                <Table
                  currentUsers={searchedUsers || currentUsers}
                  handleDelete={handleDelete}
                  handleBookmark={handleBookmark}
                  selectedSort={sort}
                  handleSort={handleSort}
                  users={users}
                />
              </div>
            )}
            <Pagination
              searchedUsers={searchedUsers}
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
  } else {
    return <h1>Loading...</h1>
  }
}

export default UsersList
