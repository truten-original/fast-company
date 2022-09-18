import UserPage from "../components/pages/UserPage"
import Login from "../containers/Login/Login"
import Main from "../containers/Main/Main"
import ChangePage from "../components/common/СhangePage/СhangePage"
import Users from "../containers/Users/Users"
export const routes = [
  { path: "/", exact: true, component: Main },
  { path: "/users", exact: true, component: Users },
  { path: "/users/:userId", exact: true, component: UserPage },
  { path: "/login/:type?", exact: true, component: Login },
  { path: "/users/:userId/edit", exact: true, component: ChangePage }
]
