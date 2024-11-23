const express = require('express');

const app = express();

const port = 3000;

app.use(express.json()); // For parsing JSON requests

app.get('/', (req, res) => res.send('Hello, World!'));

app.listen(port, () => console.log(`Server running on port ${port}`));