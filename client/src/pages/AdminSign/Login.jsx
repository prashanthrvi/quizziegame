import React from "react"
import css from "./Login.module.css"

const Login = () => {
  return (
    <form>
      <div className={css.labelInputCard}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
      </div>
      <div className={css.labelInputCard}>
        <label htmlFor="pw">Password</label>
        <input type="text" id="pw" />
      </div>
      <button className={css.loginBtn}>Log In</button>
    </form>
  )
}

export default Login
