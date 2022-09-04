import { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import Qualities from "../../UI/Qualities/Qualities"
import api from "../../../api"
const UserPage = () => {
  const [currentUser, setCurrentUser] = useState()
  const userId = useParams().userId
  const history = useHistory()
  useEffect(() => {}, [])
  const goBack = () => {
    history.push("/users")
  }
  const goSet = () => {
    history.push(`${userId}/edit`)
  }

  api.users.getById(userId).then((result) => setCurrentUser(result))
  if (currentUser) {
    return (
      <div>
        <h1>{currentUser.name}</h1>
        <h2> Профессия: {currentUser.profession.name}</h2>
        <Qualities user={currentUser} />
        <h3>completed meetings:{currentUser.completedMeetings}</h3>
        <h1>{currentUser.rate}</h1>
        <button onClick={goBack}>все пользователи</button>
        <button onClick={goSet}>изменить параметры пользователя</button>
      </div>
    )
  } else {
    return <h1>Loading...</h1>
  }
}
export default UserPage
