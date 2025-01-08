import express from "express";
import "dotenv/config";
import { productRouter } from "./api/product.js";
import { categoriesRouter } from "./api/category.js";
import { userRouter } from "./api/user.js";
import globalErrorHandlingMiddleware from "./api/middleware/global-error-handling-middleware.js";
import { connectDB } from "./infrastructure/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/products", productRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/users", userRouter);
app.use(globalErrorHandlingMiddleware);

connectDB();
app.listen(8000, () => {
  console.log(`Server is running on port ${8000}`);
});
