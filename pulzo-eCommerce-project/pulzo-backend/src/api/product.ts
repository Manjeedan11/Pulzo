import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  deleteProductById,
  updateProductById,
} from "../applications/product";
import { isAuthenticated } from "./middleware/authentication-middleware";

export const productRouter = express.Router();

productRouter
  .route("/")
  .get(isAuthenticated, getProducts)
  .post(isAuthenticated, createProduct);
productRouter
  .route("/:id")
  .get(isAuthenticated, getProductById)
  .delete(isAuthenticated, deleteProductById)
  .patch(isAuthenticated, updateProductById);
