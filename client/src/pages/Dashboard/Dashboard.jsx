import React from "react"
import Navbar from "../../components/Navbar/Navbar"
import css from "./Dashboard.module.css"

const Dashboard = () => {
  return (
    <div className={css.dashboardContainer}>
      <Navbar />
      <div className={css.dashboardCard}>
        <ul>
          <li style={{ color: "orange" }}>
            <span>12 </span> Quiz Created
          </li>
          <li style={{ color: "green" }}>
            <span>110 </span> Questions Created
          </li>
          <li style={{ color: "blue" }}>
            <span>1.4K </span> Total Impressions
          </li>
        </ul>
        <h1>Trending Quizs</h1>
      </div>
    </div>
  )
}

export default Dashboard
