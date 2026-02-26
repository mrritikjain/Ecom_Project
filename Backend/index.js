import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthController from "../Backend/Controller/AuthController.js"
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

//mongo connection
mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("database connected.");
}).catch((err)=>{
  console.log(`database is not connected ${err}`)
})

app.use("auth/api", AuthController)
//dummy Route
app.get("/", (req, res) => {
  res.end("Welcome to home page");
});
app.listen(PORT, () => {
  console.log(`your server is running on Port ${PORT}`);
});
