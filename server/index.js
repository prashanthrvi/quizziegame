const { MongoClient } = require("mongodb")
const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

// const { Resolver } = require("dns")
// // const resolver = new Resolver()

// resolver.setServers(["8.8.8.8"]) // Use Google's public DNS server or another DNS server of your choice

// resolver.resolve4("quizzieapp.lmfp43f.mongodb.net", (err, addresses) => {
//   if (err) {
//     console.error(err)
//   } else {
//     // Set the DNS server to the resolved address
//     resolver.setServers([addresses[0]])
//     console.log("DNS cache cleared.")
//     // Start your application logic here
//   }
// })

const app = express()
app.use(express.json())
app.use(cors())

// const Quiz = mongoose.model("Quiz", {
//   adminName: String,
//   adminId:String,
//   question: String,
//   optionType: String,

// })

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(process.env.NEW_URL)
    console.log(`Server running on port http://localhost:${process.env.PORT}`)
  } catch (err) {
    console.log(err)
  }
})
