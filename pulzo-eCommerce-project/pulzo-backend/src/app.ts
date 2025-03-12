import express from "express";
import "dotenv/config";
import { productRouter } from "./api/product";
import { categoriesRouter } from "./api/category";
import globalErrorHandlingMiddleware from "./api/middleware/global-error-handling-middleware";
import { connectDB } from "./infrastructure/db";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { orderRouter } from "./api/order";
import { paymentsRouter } from "./api/payment";
import { enquiryRouter } from "./api/enquiry";
import { stripeRouter } from "./api/stripePayment";

const app = express();
app.use(express.json());
app.use(cors({ origin: "https://fed-pulzo-frontend-manjeedan.netlify.app" }));
app.use(clerkMiddleware());

app.use("/api/products", productRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/orders", orderRouter);
app.use("/api/payments", paymentsRouter);
app.use("/api/enquires", enquiryRouter);
app.use("/api/stripePayments", stripeRouter);

app.use(globalErrorHandlingMiddleware as any);

connectDB();
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

///api/create-payment-intent
//https://fed-pulzo-frontend-manjeedan.netlify.app
//http://localhost:5173
