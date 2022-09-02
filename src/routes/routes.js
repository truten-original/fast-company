import UserPage from "../components/pages/UserPage"
import Login from "../containers/Login/Login"
import Main from "../containers/Main/Main"
import ChangePage from "../components/common/СhangePage/СhangePage"
import UsersList from "../containers/Users/UsersList"
export const routes = [
  { path: "/", exact: true, component: Main },
  { path: "/users", exact: true, component: UsersList },
  { path: "/users/:userId", exact: true, component: UserPage },
  { path: "/login/:type?", exact: true, component: Login },
  { path: "/setuser/:userId", exact: true, component: ChangePage }
]
