import { useEffect, useState } from "react"
import { validator } from "../../../utils/validator"
import TextField from "../../UI/TextField/TextField"
import API from "../../../api"
import SelectField from "../SelectField/SelectField"
import RadioField from "../RadioField/RadioField"
import MultiSelectField from "../MultiSelectField/MultiSelectField"
import CheckBoxField from "../CheckBoxField/CheckBoxField"
const RegisterForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    profession: "",
    sex: "Male",
    qualities: [],
    agreement: false
  })
  const [professions, setProfessions] = useState()
  const [qualities, setQualities] = useState()
  const [errors, setErrors] = useState({})
  useEffect(() => {
    ;(async() => {
      const professions = await API.professions.fetchAll()
      setProfessions(professions)
    })()
    ;(async() => {
      const qualities = await API.qualities.fetchAll()
      setQualities(qualities)
    })()
  }, [])
  useEffect(() => {
    validate()
  }, [data])
  console.log(qualities)
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
    },
    profession: {
      isChoosed: { message: "профессия должна быть выбрана" }
    },
    agreement: {
      isReceived: {
        message: "примите пользовательское соглашение"
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
  const handleChangeMultiSelect = (e) => {
    setData((prev) => ({ ...prev, qualities: e }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // eslint-disable-next-line no-useless-return
    if (validate()) return
  }
  return (
    <form
      className="needs-validation"
      type="submit"
      onSubmit={(e) => handleSubmit(e)}
    >
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
      <SelectField
        label="profession"
        handleSelectChange={handleChange}
        value={data.profession}
        defaultOptionText="Choose profession"
        options={professions}
        error={errors.profession}
        name="profession"
      />
      <RadioField
        options={[
          { name: "Male", value: "Male" },
          { name: "Female", value: "Female" },
          { name: "Other", value: "Other" }
        ]}
        value={data.sex}
        onChange={handleChange}
        name="sex"
        label="your sex"
      />
      <MultiSelectField
        options={qualities}
        defaultValue={data.qualities}
        handleChange={handleChangeMultiSelect}
        name="qualities"
        label="qualities"
      />
      <CheckBoxField
        value={data.agreement}
        onChange={handleChange}
        name="agreement"
        error={errors.agreement}
      >
        Confirm <a>user agreement</a>
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

export default RegisterForm
