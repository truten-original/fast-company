const RenderRandomImg = ({ size }) => {
  return (
    <img
      src={`https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
        .toString(36)
        .substring(7)}.svg`}
      className="rounded-circle shadow-1-strong me-3"
      alt="avatar"
      width={size ? size : "65"}
      height={size ? size : "65"}
    />
  )
}

export default RenderRandomImg
