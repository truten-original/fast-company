import { useState } from "react"
import Bookmark from "../Bookmark/Bookmark"
import BookmarkFill from "../BookmarkFill/BookmarkFill"
import classes from "./ToogleBookmark.module.css"
const ToogleBookmark = () => {
  const [favourite, setFavourite] = useState(false)
  const changeFavourite = () => setFavourite(!favourite)
  return (
    <>
      <span onClick={changeFavourite} className={classes.wrapper}>
        {favourite ? <BookmarkFill /> : <Bookmark />}
      </span>
    </>
  )
}

export default ToogleBookmark
