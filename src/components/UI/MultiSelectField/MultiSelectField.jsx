import Select from "react-select"
import Proptypes from "prop-types"
const MultiSelectField = ({ options, handleChange, label, defaultValue }) => {
  const changedOptions =
    options &&
    Object.keys(options).map((optionName) => {
      return { value: optionName, label: options[optionName].name }
    })
  const optionsArray = options && Object.entries(options)
  const currentOptions =
    defaultValue &&
    defaultValue.map((value) => {
      const currentItem = optionsArray.find(
        (item) => item[1].name === value.name
      )
      return { value: currentItem[0], label: value.name }
    })
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <Select
        defaultValue={currentOptions}
        closeMenuOnSelect={false}
        onChange={(e) => {
          handleChange(e)
        }}
        isMulti
        options={changedOptions}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  )
}
MultiSelectField.propTypes = {
  defaultValue: Proptypes.array,
  options: Proptypes.object,
  handleChange: Proptypes.func,
  name: Proptypes.string,
  label: Proptypes.string
}
export default MultiSelectField
