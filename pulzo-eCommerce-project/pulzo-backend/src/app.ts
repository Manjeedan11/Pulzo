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

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(clerkMiddleware());

app.use("/api/products", productRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/orders", orderRouter);
app.use(globalErrorHandlingMiddleware as any);

connectDB();
app.listen(8000, () => {
  console.log(`Server is running on port ${8000}`);
});
