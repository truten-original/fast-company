import React from "react"
import ReactDOM from "react-dom/client"
import Users from "./components/users"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Users />)

reportWebVitals()
