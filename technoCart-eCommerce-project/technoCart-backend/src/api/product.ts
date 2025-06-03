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

productRouter.route("/").get(getProducts).post(isAdmin, createProduct);
productRouter
  .route("/:id")
  .get(getProductById)
  .delete(isAdmin, deleteProductById)
  .patch(isAdmin, updateProductById);
