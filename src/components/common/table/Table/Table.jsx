import PropTypes from "prop-types"
import Qualities from "../../../UI/Qualities/Qualities"
import ToogleBookmark from "../../User/iconsSvg/ToogleBookmark/ToogleBookmark"
import TableBody from "../TableBody/TableBody"
import TableHeader from "../TableHeader/TableHeader"
const Table = ({
  currentUsers,
  handleDelete,
  selectedSort,
  handleSort,
  handleBookmark
}) => {
  const sortingUnits = {
    name: { name: "имя", path: "name" },
    profession: { name: "профессия", path: "profession.name" },
    qualities: {
      name: "качества",
      component: (user) => <Qualities user={user} />
    },
    completedMeetings: { name: "встречи", path: "completedMeetings" },
    rate: { name: "рейтинг", path: "rate" },
    bookmark: {
      name: "избранное",
      component: (user) => (
        <ToogleBookmark handleBookmark={handleBookmark} user={user} />
      ),
      path: "bookmark"
    },
    delete: { component: "delete" }
  }
  return (
    <table className="table">
      <TableHeader
        selectedSort={selectedSort}
        onSort={handleSort}
        sortingUnits={sortingUnits}
      />
      <TableBody
        handleBookmark={handleBookmark}
        users={currentUsers}
        handleDelete={handleDelete}
        sortingUnits={sortingUnits}
      />
    </table>
  )
}
Table.propTypes = {
  currentUsers: PropTypes.array,
  handleDelete: PropTypes.func,
  handleSort: PropTypes.func,
  selectedSort: PropTypes.object,
  handleBookmark: PropTypes.func,
  users: PropTypes.array
}
export default Table
