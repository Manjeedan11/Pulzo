import express from "express";
import "dotenv/config";
import { productRouter } from "./api/product";
import { categoriesRouter } from "./api/category";
import { userRouter } from "./api/user";
import globalErrorHandlingMiddleware from "./api/middleware/global-error-handling-middleware";
import { connectDB } from "./infrastructure/db";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { orderRouter } from "./api/order";
import Stripe from "stripe";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(clerkMiddleware());

app.use("/api/products", productRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/orders", orderRouter);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

app.post("/api/create-payment-intent", clerkMiddleware(), async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert dollars to cents
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
});

app.use(globalErrorHandlingMiddleware as any);

connectDB();
app.listen(8000, () => {
  console.log(`Server is running on port ${8000}`);
});
