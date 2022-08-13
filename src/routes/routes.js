import UserPage from "../components/UserPage/UserPage"
import Login from "../containers/Login/Login"
import Main from "../containers/Main/Main"
import UsersList from "../containers/UsersList/UsersList"
export const routes = [
  { path: "/", exact: true, component: Main },
  { path: "/users", exact: true, component: UsersList },
  { path: "/users/:userId", exact: true, component: UserPage },
  { path: "/login", exact: true, component: Login }
]
