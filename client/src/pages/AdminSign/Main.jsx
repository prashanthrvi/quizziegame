import React from "react"
import css from "./Main.module.css"
import { useState } from "react"
import Login from "./Login"
import SignUp from "./SignUp"

const Main = () => {
  const [login, setLogin] = useState(false)
  return (
    <div className={css.mainContainer}>
      <div className={css.mainCard}>
        <h1
          style={{ fontFamily: "Jomhuria", fontSize: "100px", margin: "0px" }}
        >
          QUIZZIE
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "40%",
          }}
        >
          <button type="button" onClick={() => setLogin(false)}>
            Sign Up
          </button>
          <button type="button" onClick={() => setLogin(true)}>
            Log In
          </button>
        </div>
        {login && <Login />}
        {!login && <SignUp />}
      </div>
    </div>
  )
}

export default Main
