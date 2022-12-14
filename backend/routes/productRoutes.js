import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMidlleware.js";

router.route("/").get(getProducts).post(protect, admin,createProduct);
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct);

export default router;
