import PropTypes from "prop-types"
const GroupList = ({ items, handleItemClick, selectedItem }) => {
  return (
    <ul className="list-group">
      {items.length > 0 &&
        items.map((item) => (
          <li
            role="button"
            onClick={() =>
              handleItemClick(item[GroupList.defaultProps.itemKey])
            }
            key={item[GroupList.defaultProps.itemKey]}
            className={
              "list-group-item" +
              (selectedItem === item[GroupList.defaultProps.itemKey]
                ? " active"
                : "")
            }
          >
            {item[GroupList.defaultProps.itemContent]}
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
  items: PropTypes.array,
  handleItemClick: PropTypes.func,
  selectedItem: PropTypes.string
}
export default GroupList
