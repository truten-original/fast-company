import Proptypes from "proptypes"
const RadioField = ({ options, name, onChange, value, label }) => {
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <div>
        {options.map((option) => (
          <div
            key={`${option.name}_${option.value}`}
            className="form-check form-check-inline"
          >
            <input
              checked={option.value === value}
              className="form-check-input"
              type="radio"
              name={name}
              id={`${option.name}_${option.value}`}
              value={option.value}
              onChange={(e) => {
                onChange(e)
              }}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
RadioField.propTypes = {
  options: Proptypes.array,
  name: Proptypes.string,
  onChange: Proptypes.func,
  value: Proptypes.string,
  label: Proptypes.string
}
export default RadioField
