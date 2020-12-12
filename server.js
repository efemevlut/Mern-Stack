const express = require("express");
const app = express()

require("dotenv").config()

const connectDB = require("./models/connectDb");
const router = require("./routes/router");

connectDB();

app.use(express.json())
app.use("/api", router)

app.listen(process.env.PORT, ()=> {
  console.log(`I am listening on port ${process.env.PORT}`)
});