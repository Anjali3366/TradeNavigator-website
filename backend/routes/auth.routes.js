import express from "express";
import { login, logout, signup, test } from "../controllers/auth.controller.js";

const router = express.Router();
router.get("/", test);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
export default router;
