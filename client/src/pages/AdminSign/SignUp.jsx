import React from "react"
import css from "./Login.module.css"
import { useState } from "react"

const Login = () => {
  return (
    <form>
      <div className={css.labelInputCard}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className={css.labelInputCard}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
      </div>
      <div className={css.labelInputCard}>
        <label htmlFor="pw">Password</label>
        <input type="text" id="pw" />
      </div>

      <div className={css.labelInputCard}>
        <label htmlFor="confirm">Confirm Password</label>
        <input type="text" id="confirm" />
      </div>
      <button className={css.signUpBtn}>Sign-Up</button>
    </form>
  )
}

export default Login
