import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  deleteProductById,
  updateProductById,
} from "../applications/product.js";

export const productRouter = express.Router();

productRouter.route("/").get(getProducts).post(createProduct);
productRouter
  .route("/:id")
  .get(getProductById)
  .delete(deleteProductById)
  .patch(updateProductById);
