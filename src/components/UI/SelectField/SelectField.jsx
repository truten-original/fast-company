import Proptypes from "proptypes"
const SelectField = ({
  label,
  handleSelectChange,
  value,
  defaultOptionText,
  options,
  error,
  name
}) => {
  const getInputClasses = () => {
    const classes = error ? "form-control is-invalid" : "form-control"
    return classes
  }
  const onChange = (e) => {
    const currentItem = options.find((option) => option._id === e.target.value)
    handleSelectChange(currentItem)
  }
  return (
    <div className="mb-4">
      <label htmlFor="validationCustom04" className="form-label">
        {label}
      </label>
      <select
        name={name}
        className={getInputClasses()}
        id="validationCustom04"
        value={value}
        onChange={(e) => onChange(e)}
      >
        <option value="">{defaultOptionText}</option>
        {options &&
          options.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}
SelectField.propTypes = {
  label: Proptypes.string,
  handleSelectChange: Proptypes.func,
  value: Proptypes.string,
  defaultOptionText: Proptypes.string,
  options: Proptypes.array,
  error: Proptypes.string,
  name: Proptypes.string
}

export default SelectField
