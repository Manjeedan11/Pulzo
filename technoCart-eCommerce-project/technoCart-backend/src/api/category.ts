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

categoriesRouter.route("/").get(getCategories).post(createCategory);
categoriesRouter
  .route("/:id")
  .get(getCategoriesById)
  .delete(deleteCategoriesById)
  .patch(updateCategoryById);
