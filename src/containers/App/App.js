import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navigation from "../../components/common/Navigation/Navigation"
import { routes } from "../../routes/routes"
const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
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
      </div>
    </BrowserRouter>
  )
}

export default App
