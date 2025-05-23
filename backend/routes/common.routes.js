import express from "express";
import {
  allHoldings,
  allOrders,
  allPositions,
  newOrder,
} from "../controllers/common.controller.js";

const router = express.Router();

router.get("/holdings", allHoldings);
router.get("/positions", allPositions);
router.get("/orders", allOrders);
router.post("/newOrder", newOrder);

export default router;
