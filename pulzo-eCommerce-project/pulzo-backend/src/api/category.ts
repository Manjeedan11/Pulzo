import express from "express";
import {
  getCategories,
  createCategory,
  getCategoriesById,
  deleteCategoriesById,
  updateCategoryById,
} from "../applications/category";
import { isAuthenticated } from "./middleware/authentication-middleware";

export const categoriesRouter = express.Router();

categoriesRouter
  .route("/")
  .get(isAuthenticated, getCategories)
  .post(isAuthenticated, createCategory);
categoriesRouter
  .route("/:id")
  .get(isAuthenticated, getCategoriesById)
  .delete(isAuthenticated, deleteCategoriesById)
  .patch(isAuthenticated, updateCategoryById);
