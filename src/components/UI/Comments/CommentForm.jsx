import { useEffect } from "react"
import { useState } from "react"
import API from "../../../api"
import SelectField from "../SelectField/SelectField"
import { validator } from "../../../utils/validator"
const CommentForm = ({ handleAdd }) => {
  const [users, setUsers] = useState([])
  const [localData, setLocalData] = useState({ userId: "", content: "" })
  const [errors, setErrors] = useState({})
  useEffect(() => {
    ;(async () => {
      const users = await API.users.fetchAll()
      setUsers(users)
    })()
  }, [])
  useEffect(() => {
    validate()
  }, [localData])
  const validatorConfig = {
    userId: {
      isRequired: {
        message: "поле должно быть заполнено"
      }
    },
    comment: {
      isRequired: {
        message: "поле должно быть заполнено"
      }
    }
  }
  const validate = () => {
    const errors = validator(localData, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length !== 0
  }
  const isValid = Object.keys(errors).length === 0

  const handleSelectChange = (user) => {
    setLocalData((prev) => ({ ...prev, userId: user._id }))
  }
  const handleAreaChange = (e) => {
    setLocalData((prev) => ({ ...prev, content: e.target.value }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    handleAdd(localData)
    setLocalData({
      userId: "",
      content: ""
    })
  }
  return (
    users && (
      <>
        <h1>New Comment</h1>
        <SelectField
          value={localData.userId}
          options={users}
          handleSelectChange={handleSelectChange}
          defaultOptionText="выберите пользователя"
        />
        <form
          action="submit"
          onSubmit={(e) => {
            onSubmit(e)
          }}
        >
          <label htmlFor="floatingTextarea2">Сообщение</label>
          <textarea
            value={localData.content}
            onChange={(e) => {
              handleAreaChange(e)
            }}
            className="form-control"
            id="floatingTextarea2"
            rows="3"
            // style={{ height: "80px" }}
          ></textarea>
          <button className="btn btn-primary mt-4" disabled={!isValid}>
            опубликовать
          </button>
        </form>
      </>
    )
  )
}

export default CommentForm
