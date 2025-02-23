import express from "express";
import {
  createOrder,
  getOrder,
  getOrdersByUser,
  updatePaymentStatus,
} from "../applications/order";
import { isAuthenticated } from "./middleware/authentication-middleware";

export const orderRouter = express.Router();

orderRouter
  .route("/")
  .post(isAuthenticated, createOrder)
  .get(isAuthenticated, getOrdersByUser);

orderRouter.route("/:id").get(isAuthenticated, getOrder);

orderRouter
  .route("/:id/payment-status")
  .put(isAuthenticated, async (req, res, next) => {
    try {
      await updatePaymentStatus(req, res, next); // Ensure async handling
    } catch (error) {
      next(error); // Pass errors to the next middleware
    }
  });
