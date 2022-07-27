import { professions } from "./user.api"

export { professions } from "./user.api"
const fetchAll = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(professions), 2000)
  })
}
export default fetchAll
