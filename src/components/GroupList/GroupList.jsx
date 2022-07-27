import PropTypes from "prop-types"
const GroupList = ({
  items,
  handleItemClick,
  selectedItem,
  itemKey,
  itemContent
}) => {
  return (
    <ul className="list-group">
      {items.length > 0 &&
        items.map((item) => (
          <li
            role="button"
            onClick={() => handleItemClick(item)}
            key={item[itemKey]}
            className={
              "list-group-item" + (selectedItem === item ? " active" : "")
            }
          >
            {item[itemContent]}
          </li>
        ))}
    </ul>
  )
}
GroupList.defaultProps = {
  itemContent: "name",
  itemKey: "_id"
}
GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  handleItemClick: PropTypes.func,
  selectedItem: PropTypes.object,
  itemContent: PropTypes.string,
  itemKey: PropTypes.string
}
export default GroupList
