import { Link } from "react-router-dom"
import classes from "./Navigation.module.css"
const Navigation = () => {
  return (
    <div className={classes.nav}>
      <span>
        <Link to="/">Main</Link>
      </span>
      <span>
        <Link to="/login">Login</Link>
      </span>
      <span>
        <Link to="/users">Users</Link>
      </span>
    </div>
  )
}

export default Navigation
