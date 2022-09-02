import { useState } from "react"
import PropTypes from "prop-types"
import Bookmark from "../Bookmark/Bookmark"
import BookmarkFill from "../BookmarkFill/BookmarkFill"
import classes from "./ToogleBookmark.module.css"
const ToogleBookmark = ({ handleBookmark, user }) => {
  return (
    <>
      <span
        className={classes.wrapper}
        onClick={() => handleBookmark(user._id)}
      >
        {user.bookmark ? <BookmarkFill /> : <Bookmark />}
      </span>
    </>
  )
}
ToogleBookmark.propTypes = {
  handleBookmark: PropTypes.func,
  user: PropTypes.object
}
export default ToogleBookmark
