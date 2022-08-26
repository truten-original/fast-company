import { useEffect, useState } from "react"
import TextField from "../../components/TextField/TextField"
import { validator } from "../../utils/validator"
const Login = () => {
  const [data, setData] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({})
  useEffect(() => {
    validate()
  }, [data])
  const isValid = Object.keys(errors).length === 0
  const validatorConfig = {
    email: {
      isRequired: {
        message: "поле должно быть заполнено"
      },
      isEmail: { message: "введите корректный email" }
    },
    password: {
      isRequired: {
        message: "поле должно быть заполнено"
      },
      isCapital: {
        message: "пароль должен содержать минимум одну заглавную букву"
      },
      isNeedeLength: {
        message: "длина пароля должна быть минимум 8 символов"
      },
      isNumber: {
        message: "пароль должен содержать минимум одну цифру"
      }
    }
  }
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length !== 0
  }

  const handleChange = ({ target }) => {
    setData((prev) => ({ ...prev, [target.name]: target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // eslint-disable-next-line no-useless-return
    if (validate()) return
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 offset-md-4 p-4 shadow">
          <h1 className="mb-4">Login</h1>
          <form type="submit" onSubmit={(e) => handleSubmit(e)}>
            <TextField
              name="email"
              value={data.email}
              handleChange={handleChange}
              error={errors.email}
            />
            <TextField
              error={errors.password}
              type="password"
              name="password"
              value={data.password}
              handleChange={handleChange}
            />
            <button
              selected={false}
              className="btn btn-primary col-12 mx-auto"
              type="submit"
              disabled={!isValid}
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
