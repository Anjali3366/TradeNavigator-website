import express from "express";
import dotenv from "dotenv";

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/db.js";
// routes
import authRoute from "./routes/auth.routes.js";
import commonRoute from "./routes/common.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:5174/",
      "http://localhost:5173",
      "http://localhost:5175/",
    ],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

// routes
app.use("/auth", authRoute);
app.use("/", commonRoute);

// server starting
app.listen(PORT, () => {
  console.log("server Listening at ", PORT);
  connectDB();
});
