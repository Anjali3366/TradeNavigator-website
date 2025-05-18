import express from "express";
import { login, logout, test } from "../controllers/auth.controller.js";

const router = express.Router();
router.get("/", test);
router.post("/login", login);
router.post("/logout", logout);
export default router;
