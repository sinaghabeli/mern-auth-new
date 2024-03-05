import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

console.log("Log");

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use("/api/user", userRoute);
