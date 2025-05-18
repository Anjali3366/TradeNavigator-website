import express from "express";
import dotenv from "dotenv";
// import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
// routes
import authRoute from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/auth", authRoute);

// server starting
app.listen(PORT, () => {
  console.log("server Listening at ", PORT);
  connectDB();
});
