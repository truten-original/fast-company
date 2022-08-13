import { useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import Qualities from "../Qualities/Qualities"
import api from "../../api"
const UserPage = () => {
  const [currentUser, setCurrentUser] = useState()
  const userId = useParams().userId
  const history = useHistory()
  const goBack = () => {
    history.replace("/users")
  }
  api.users.getById(userId).then((result) => setCurrentUser(result))
  if (currentUser) {
    return (
      <div>
        <h1>{currentUser.name}</h1>
        <h2>{currentUser.name}</h2>
        <Qualities user={currentUser} />
        <h3>completed meetings:{currentUser.completedMeetings}</h3>
        <h1>{currentUser.rate}</h1>
        <button onClick={goBack}>все пользователи</button>
      </div>
    )
  } else {
    return <h1>Loading...</h1>
  }
}
export default UserPage
