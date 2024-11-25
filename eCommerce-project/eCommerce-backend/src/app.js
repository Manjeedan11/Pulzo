import express from 'express';
import {getProducts, createProduct, getProductById, deleteProductById, updateProductById} from './applications/product.js'

const app = express();
//Dynamic routing import

app.use(express.json());
//Dynamic routing called
app.get('/products', getProducts);
app.post('/products', createProduct);
app.get('/products/:id', getProductById);
app.delete('/products/:id', deleteProductById);
app.put('/products/:id', updateProductById);


app.listen(8000, () => {
    console.log(`Server is running on port ${8000}`);
})

