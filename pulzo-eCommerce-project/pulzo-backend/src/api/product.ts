import express from "express";
import {
  getProducts,
  createProduct,
  getProductById,
  deleteProductById,
  updateProductById,
} from "../applications/product";
import { isAuthenticated } from "./middleware/authentication-middleware";
import { isAdmin } from "./middleware/authorization-middleware";

export const productRouter = express.Router();

productRouter
  .route("/")
  .get(isAuthenticated, getProducts)
  .post(isAuthenticated, isAdmin, createProduct);
productRouter
  .route("/:id")
  .get(isAuthenticated, getProductById)
  .delete(isAuthenticated, isAdmin, deleteProductById)
  .patch(isAuthenticated, isAdmin, updateProductById);
