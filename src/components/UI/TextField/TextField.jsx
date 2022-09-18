import PropTypes from "prop-types"
import { useState } from "react"
const TextField = ({ name, value, handleChange, error }) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleChangePass = () => {
    setShowPassword((prev) => !prev)
  }
  const getInputClasses = () => {
    const classes = error ? "form-control is-invalid" : "form-control"
    return classes
  }
  if (name === "password") {
    return (
      <div className="mb-4">
        <label htmlFor="email">{name}</label>
        <div className="input-group mb-3 has-validation">
          <input
            className={getInputClasses()}
            type={showPassword ? "text" : "password"}
            id={name}
            value={value}
            name={name}
            onChange={(e) => handleChange(e)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleChangePass}
          >
            {showPassword
              ? (
              <i className="bi bi-eye-slash"></i>
                )
              : (
              <i className="bi bi-eye"></i>
                )}
          </button>
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
      </div>
    )
  } else {
    return (
      <div className="mb-4">
        <label htmlFor="email">{name}</label>
        <input
          className={getInputClasses()}
          id={name}
          value={value}
          name={name}
          onChange={(e) => handleChange(e)}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    )
  }
}
TextField.defaultProps = {
  type: "text"
}
TextField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  handleChange: PropTypes.func
}

export default TextField
