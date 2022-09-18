import React from "react"
import CommentsList from "../Comments/CommentsList"
import MeetingsCard from "../UserInfo/MeetingsCard"
import QualitiesCard from "../UserInfo/QualitiesCard"
import UserInfoCard from "../UserInfo/UserInfoCard"
const UserPageLayout = ({ goSet, currentUser, pageId }) => {
  return (
    <div className="container">
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <UserInfoCard goSet={goSet} currentUser={currentUser} />
          <QualitiesCard currentUser={currentUser} />
          <MeetingsCard currentUser={currentUser} />
        </div>
        <div className="col-md-8">
          <CommentsList pageId={pageId} />
        </div>
      </div>
    </div>
  )
}

export default UserPageLayout
