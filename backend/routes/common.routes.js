import express from "express";
import {
  allHoldings,
  allOrders,
  allPositions,
  newOrder,
} from "../controllers/common.controller.js";

const router = express.Router();

router.get("/allholdings", allHoldings);
router.get("/allpositions", allPositions);
router.get("/allOrders", allOrders);
router.post("/newOrder", newOrder);

export default router;
