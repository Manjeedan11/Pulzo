import express from 'express';
import { productRouter } from './routes/product';

const app = express();
app.use(express.json());

app.use('/products', productRouter)


app.listen(8000, () => {
    console.log(`Server is running on port ${8000}`);
})

