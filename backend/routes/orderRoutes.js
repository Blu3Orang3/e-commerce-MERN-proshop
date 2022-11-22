import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMidlleware.js";
import {
  addOrderItems,
  getOrderById,
  updateOrderToPay,
  getMyOrders
} from "../controllers/orderController.js";

router.route("/").post(protect, addOrderItems);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPay);

export default router;
