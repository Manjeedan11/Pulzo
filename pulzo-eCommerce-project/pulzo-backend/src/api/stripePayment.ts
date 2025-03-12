import express from "express";
import { clerkMiddleware } from "@clerk/express";
import { createPaymentIntent } from "../applications/stripePayment";

export const stripeRouter = express.Router();

stripeRouter.post(
  "/create-payment-intent",
  clerkMiddleware(),
  async (req, res) => {
    try {
      const { amount } = req.body;
      const paymentIntent = await createPaymentIntent(amount);
      res.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }
);
