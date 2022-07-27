import PropTypes from 'prop-types'
const SearchStatus = ({ users, renderPhrase }) => {
  return (
    <>
      <h2>
        <span
          className={'badge ' + (users.length > 0 ? 'bg-primary' : 'bg-danger')}
        >
          {users.length > 0
            ? `${
                users.length + ' ' + renderPhrase(users.length)
              } с тобой сегодня`
            : 'Никто с тобой не тусанет'}
        </span>
      </h2>
    </>
  )
}
SearchStatus.propTypes = {
  users: PropTypes.array,
  renderPhrase: PropTypes.func
}
export default SearchStatus
