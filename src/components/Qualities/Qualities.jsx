import PropTypes from "prop-types"
const Qualities = ({ user }) => {
  return (
    <>
      {user.qualities.map((qual) => (
        <span className={"badge m-1 bg-" + qual.color} key={qual._id}>
          {qual.name}
        </span>
      ))}
    </>
  )
}
Qualities.propTypes = {
  user: PropTypes.object,
}
export default Qualities
