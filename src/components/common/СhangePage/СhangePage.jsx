import { useParams, useHistory } from "react-router-dom"
import TextField from "../../UI/TextField/TextField"
import api from "../../../api"
import { useEffect, useState } from "react"
import MultiSelectField from "../../UI/MultiSelectField/MultiSelectField"
import SelectField from "../../UI/SelectField/SelectField"
import RadioField from "../../UI/RadioField/RadioField"
const СhangePage = () => {
  const [userData, setUserData] = useState({})
  const [users, setUsers] = useState([])
  const [qualities, setQualities] = useState({})
  const [professions, setProfessions] = useState()
  const [defaultOptions, setDefaultOptions] = useState()
  const id = useParams().userId
  const history = useHistory()
  console.log(history)
  useEffect(() => {
    ;(async() => {
      const user = await api.users.getById(id)
      const users = await api.users.fetchAll()
      const qualities = await api.qualities.fetchAll()
      const professions = await api.professions.fetchAll()
      setUserData(user)
      setUsers(users)
      setQualities(qualities)
      setProfessions(professions)
    })()
  }, [])
  useEffect(() => {
    if (userData) {
      if (Object.keys(userData).length) {
        setDefaultOptions(userData.qualities)
        const changedUsers = users.map((user) => {
          if (user._id === id) {
            return { ...user, ...userData }
          }
          return user
        })
        setUsers(changedUsers)
      }
    }
  }, [userData])

  const handleChange = ({ target }) => {
    setUserData((prev) => ({ ...prev, [target.name]: target.value }))
  }
  const selectHandleChange = (e) => {
    setUserData((prev) => ({ ...prev, profession: e }))
  }
  const MultiSelectHandleChange = (value) => {
    const currentQualities = value.map((item) => qualities[item.value])
    setUserData((prev) => ({ ...prev, qualities: currentQualities }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (users.length) {
      localStorage.setItem("users", JSON.stringify(users))
    }
    history.replace(`/users/${id}`)
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {Object.keys(userData).length && (
        <>
          <TextField
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          <TextField
            value={userData?.email}
            handleChange={handleChange}
            name="email"
          />
          <SelectField
            value={userData.profession.name}
            defaultOptionText={userData.profession.name}
            label="profession"
            options={professions}
            name="profession"
            handleSelectChange={selectHandleChange}
          />
          <RadioField
            options={[
              { name: "male", value: "male" },
              { name: "female", value: "female" },
              { name: "other", value: "other" }
            ]}
            name="sex"
            onChange={handleChange}
            value={userData.sex}
          />
          {defaultOptions && (
            <MultiSelectField
              label="qualities"
              defaultValue={defaultOptions}
              handleChange={MultiSelectHandleChange}
              options={qualities}
            />
          )}
        </>
      )}
      <button className="btn btn-primary" type="submit">
        update
      </button>
      <button>all users</button>
    </form>
  )
}

export default СhangePage
