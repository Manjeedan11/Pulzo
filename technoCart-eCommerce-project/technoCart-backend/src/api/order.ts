import express from "express";
import { createOrder, getOrder, getOrdersByUser } from "../applications/order";
import { isAuthenticated } from "./middleware/authentication-middleware";

export const orderRouter = express.Router();

orderRouter
  .route("/")
  .post(isAuthenticated, createOrder)
  .get(isAuthenticated, getOrdersByUser);

orderRouter.route("/:id").get(isAuthenticated, getOrder);
