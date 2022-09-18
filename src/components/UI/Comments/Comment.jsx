import React from "react"
import RenderRandomImg from "../../common/RenderRandomImg/RenderRandomImg"
import API from "../../../api"
import { useEffect } from "react"
import { useState } from "react"
import { publishTimeCreator } from "../../../utils/publishTimeCreator"
const Comment = ({ comment, handleDelete }) => {
  const { userId, content, created_at, _id } = comment
  const [currentUser, setCurrentUser] = useState()
  useEffect(() => {
    ;(async () => {
      const user = await API.users.getById(userId)
      setCurrentUser(user)
    })()
  }, [])
  const currentTime = publishTimeCreator(created_at)
  return (
    currentUser && (
      <div className="bg-light card-body  mb-3">
        <div className="row">
          <div className="col">
            <div className="d-flex flex-start ">
              <RenderRandomImg />
              <div className="flex-grow-1 flex-shrink-1">
                <div className="mb-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-1 ">
                      {currentUser.name}
                      <span className="small mx-2">{currentTime}</span>
                    </p>
                    <button
                      className="btn btn-sm text-primary d-flex align-items-center"
                      onClick={() => handleDelete(_id)}
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </div>
                  <p className="small mb-0">{content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default Comment
