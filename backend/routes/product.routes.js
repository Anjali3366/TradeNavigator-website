import express from "express";
import {
  allProduct,
  createProduct,
} from "../controllers/product.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/all", protectRoute, allProduct);
router.post("/create", protectRoute, createProduct);

export default router;
