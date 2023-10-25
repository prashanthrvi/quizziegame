import React from "react"
import css from "./CreateQuiz.module.css"

const CreateQuiz = () => {
  return (
    <div className={`${css.createQuizContainer} ${css.displayCreateOption}`}>
      <div className={css.createQuizCard}>
        <input type="text" placeholder="Quiz name" className={css.quizInput} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ color: "#9f9f9f" }}>Quiz Type</p>
          <label htmlFor="qa">Q & A</label>
          <input type="radio" id="qa" style={{ display: "none" }} />
          <label htmlFor="poll">Poll Type</label>
          <input type="radio" id="poll" style={{ display: "none" }} />
        </div>
        <div style={{ display: "flex" }}>
          <button type="button" className={css.cancelBtn}>
            Cancel
          </button>
          <button type="button" className={css.continueBtn}>
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateQuiz
