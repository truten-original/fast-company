import { useState, useEffect } from "react"
import PropTypes from "prop-types"

const MySearch = ({ userSearch }) => {
  const [searchQuery, setSearchQuery] = useState("")
  useEffect(() => {
    userSearch(searchQuery)
  }, [searchQuery])
  return (
    <div className="col-12 mb-4">
      <input
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
        type="text"
        className="form-control"
        placeholder="Введите имя пользователя"
      />
    </div>
  )
}
MySearch.propTypes = {
  userSearch: PropTypes.func
}
export default MySearch
