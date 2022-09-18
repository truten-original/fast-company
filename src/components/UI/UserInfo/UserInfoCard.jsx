import RenderRandomImg from "../../common/RenderRandomImg/RenderRandomImg"
import Qualities from "../../UI/Qualities/Qualities"
const UserInfoCard = ({ goSet, currentUser }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <button
          className="position-absolute top-0 end-0 btn btn-light btn-sm"
          onClick={goSet}
        >
          <i className="bi bi-gear"></i>
        </button>
        <div className="d-flex flex-column align-items-center text-center position-relative">
          <RenderRandomImg size="150" />
          <div className="mt-3">
            <h4>{currentUser.name}</h4>
            <p className="text-secondary mb-1">{currentUser.profession.name}</p>
            <div className="text-muted">
              <i
                className="bi bi-caret-down-fill text-primary"
                role="button"
              ></i>
              <i className="bi bi-caret-up text-secondary" role="button"></i>
              <span className="ms-2">{currentUser.rate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfoCard
