import express from 'express';
import { productRouter } from './routes/product';
import globalErrorHandlingMiddleware from './api/middleware/global-error-handling-middleware.js';

const app = express();
app.use(express.json());

app.use('/api/products', productRouter)
app.use(globalErrorHandlingMiddleware);

app.listen(8000, () => {
    console.log(`Server is running on port ${8000}`);
})

