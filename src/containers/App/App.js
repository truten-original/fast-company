import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navigation from "../../components/Navigation/Navigation"
import { routes } from "../../routes/routes"
const App = () => {
  return (
    <BrowserRouter>
      <>
        <Navigation />
        <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          ></Route>
        ))}
      </Switch>
      </>
    </BrowserRouter>
  )
}

export default App
