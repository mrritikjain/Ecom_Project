import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AuthController from "./Controller/AuthController.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ message: "Malformed JSON payload. Please check your syntax (e.g., missing commas or brackets)." });
  }
  next();
});
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
mongoose.set('strictQuery', false); 
//mongo connection
mongoose.connect(process.env.MONGO_URL).then(()=>{
  console.log("database connected.");
}).catch((err)=>{
  console.log(`database is not connected ${err}`)
})

app.use("/auth/api", AuthController)
//dummy Route
app.get("/", (req, res) => {
  res.end("Welcome to home page");
});
app.listen(PORT, () => {
  console.log(`your server is running on Port ${PORT}`);
});
