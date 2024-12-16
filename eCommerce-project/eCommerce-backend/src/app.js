import express from "express";
import { productRouter } from "./api/product.js";
import { categoriesRouter } from "./api/categories.js";
import globalErrorHandlingMiddleware from "./api/middleware/global-error-handling-middleware.js";
import { connectDB } from "./infrastructure/db.js";

const app = express();
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/categories", categoriesRouter);
app.use(globalErrorHandlingMiddleware);

connectDB();
app.listen(8000, () => {
  console.log(`Server is running on port ${8000}`);
});
