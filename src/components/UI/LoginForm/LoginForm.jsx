import { useState, useEffect } from "react"
import { validator } from "../../../utils/validator"
import CheckBoxField from "../CheckBoxField/CheckBoxField"
import TextField from "../TextField/TextField"
import * as yup from "yup"
const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "", stayOn: false })
  const [errors, setErrors] = useState({})
  useEffect(() => {
    validate()
  }, [data])
  const schema = yup.object().shape({
    password: yup
      .string()
      .required("поле должно быть заполнено")
      .matches(
        /[A-Z]+/g,
        "пароль должен содержать минимум одну заглавную букву"
      )
      .matches(/\d/g, "пароль должен содержать минимум одну цифру")
      .min(8, "длина пароля должна быть минимум 8 символов"),
    email: yup
      .string()
      .required("поле должно быть заполнено")
      .matches(/^\S+@\S+\.\S+$/, "введите корректный email")
  })
  const isValid = Object.keys(errors).length === 0
  // const validatorConfig = {
  //   email: {
  //     isRequired: {
  //       message: "поле должно быть заполнено"
  //     },
  //     isEmail: { message: "введите корректный email" }
  //   },
  //   password: {
  //     isRequired: {
  //       message: "поле должно быть заполнено"
  //     },
  //     isCapital: {
  //       message: "пароль должен содержать минимум одну заглавную букву"
  //     },
  //     isNeedeLength: {
  //       message: "длина пароля должна быть минимум 8 символов"
  //     },
  //     isNumber: {
  //       message: "пароль должен содержать минимум одну цифру"
  //     }
  //   }
  // }
  const validate = () => {
    // const errors = validator(data, validatorConfig)
    schema
      .validate(data)
      .then(() => setErrors({}))
      .catch((err) => setErrors({ [err.path]: err.message }))
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
    console.log(data)
  }
  return (
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
      <CheckBoxField name="stayOn" value={data.stayOn} onChange={handleChange}>
        Remain in the system
      </CheckBoxField>
      <button
        selected={false}
        className="btn btn-primary col-12 mx-auto"
        type="submit"
        disabled={!isValid}
      >
        submit
      </button>
    </form>
  )
}

export default LoginForm
