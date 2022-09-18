import React from "react"
import { useEffect, useState } from "react"
import Comment from "./Comment"
import CommentForm from "./CommentForm"
import API from "../../../api"
const CommentsList = ({ pageId }) => {
  const [comments, setComments] = useState([])
  const [addedComments, setAddedComments] = useState([])
  const [data, setData] = useState({
    userId: "",
    pageId: pageId,
    content: ""
  })
  useEffect(() => {
    ;(async () => {
      const comments = await API.comments.fetchCommentsForUser(pageId)
      setComments(comments)
    })()
  }, [addedComments])

  const handleDelete = (id) => {
    ;(async () => {
      await API.comments.remove(id)
    })()
    setComments((prev) => [...prev].filter((comment) => comment._id !== id))
  }
  const handleAdd = (data) => {
    const dataWithID = { pageId, ...data }
    ;(async () => {
      await API.comments.add(dataWithID)
    })()
    setAddedComments((prev) => [...prev, data])
  }
  return (
    <>
      <div className="card mb-2">
        {" "}
        <div className="card-body ">
          <CommentForm
            pageId={pageId}
            data={data}
            setData={setData}
            handleAdd={handleAdd}
          />
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body ">
          <h2>Comments</h2>
          <hr />
          {comments &&
            comments.map((comment) => (
              <Comment
                comment={comment}
                key={comment._id}
                handleDelete={handleDelete}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default CommentsList
