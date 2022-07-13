const Qualities = ({ user }) => {
  return (
    <>
      {user.qualities.map((item) => (
        <span className={"badge m-1 bg-" + item.color} key={item._id}>
          {item.name}
        </span>
      ))}
    </>
  )
}

export default Qualities
