import { useEffect, useState } from "react"
import LoginForm from "../../components/UI/LoginForm/LoginForm"
import RegisterForm from "../../components/UI/RegisterForm/RegisterForm"
import { useParams, useHistory } from "react-router-dom"
const Login = () => {
  const [formState, setFormState] = useState("login")
  const { type } = useParams()
  const history = useHistory()

  const toogleHistory = () => {
    type === "register"
      ? history.push("/login")
      : history.push("/login/register")
  }
  useEffect(() => {
    if (type === "register") {
      setFormState(type)
    } else {
      setFormState("login")
    }
  }, [type])

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 offset-md-4 p-4 shadow">
          {formState === "register"
            ? (
            <>
              <h1 className="mb-4">Registration</h1>
              <RegisterForm />
              <p>
                have you account ?{" "}
                <a
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={toogleHistory}
                >
                  Log in!
                </a>
              </p>
            </>
              )
            : (
            <>
              <h1 className="mb-4">Login</h1>
              <LoginForm />
              <p>
                have not account ?{" "}
                <a
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={toogleHistory}
                >
                  Sign in!
                </a>
              </p>
            </>
              )}
        </div>
      </div>
    </div>
  )
}

export default Login
