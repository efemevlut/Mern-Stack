const express = require("express");
require("dotenv").config()
const connectDB = require("./models/connectDb");
connectDB();
const app = express()

const router = require("./routes/router");


app.use(express.json())
app.use("/api", router)



app.listen(process.env.PORT, ()=> {
  console.log(`I am listening on port ${process.env.PORT}`)
});