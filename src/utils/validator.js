/* eslint-disable no-case-declarations */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable space-before-blocks */
export const validator = (data, config) => {
  const errors = {}
  function validate(validateMethod, data, config) {
    let statusValidate
    switch (validateMethod) {
      case "isRequired":
        statusValidate = (data.trim().length === 0) 
        break
      case "isEmail":
        const emailRegExp = /^\S+@\S+\.\S+$/g
        statusValidate = (!emailRegExp.test(data)) 
        break
      case "isCapital":
        const capitalRegExp = /[A-Z]+/g
        statusValidate = (!capitalRegExp.test(data)) 
        break
      case "isNumber":
        const numberRegExp = /\d/g
        statusValidate = (!numberRegExp.test(data)) 
        break
      case "isNeedeLength":
        statusValidate = (data.length === 0) 
        break
      default:
        break
    }
    if (statusValidate) return config.message
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      )
      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}
