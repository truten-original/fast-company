import PropTypes from "prop-types"
const CheckBoxField = ({ name, value, onChange, children, error }) => {
  const handleChange = () => {
    onChange({ target: { name, value: !value } })
  }
  const getLabelClasses = () => {
    const classes = error ? "form-check-label is-invalid" : "form-check-label"
    return classes
  }
  return (
    <div>
      <div className="form-check mb-4 ">
        <input
          onChange={handleChange}
          className="form-check-input"
          type="checkbox"
          value=""
          id={name}
          checked={value}
        />
        <label className={getLabelClasses()} htmlFor={name}>
          {children}
        </label>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  )
}
CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  error: PropTypes.string
}
export default CheckBoxField
