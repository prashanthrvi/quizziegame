import React, { useState } from "react"
import "./index.css"
import CreateQuiz from "../CreateQuiz/CreateQuiz"

const Navbar = () => {
  const [quiz, setQuiz] = useState(false)
  return (
    <div className="navbarContainer">
      <h1 style={{ fontFamily: "poppins" }}>QUIZZIE</h1>
      <div className="navbarBtns">
        <button type="button">Dashboard</button>
        <button type="button">Analytics</button>
        <button type="button" onClick={() => setQuiz(true)}>
          Create Quiz
        </button>
      </div>
      <div>
        <hr style={{ marginBottom: "15px", color: "black" }} />
        <button type="button">LOGOUT</button>
      </div>
      {quiz && <CreateQuiz />}
    </div>
  )
}

export default Navbar
