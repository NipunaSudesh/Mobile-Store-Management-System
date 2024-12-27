const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load .env variables
require('./db/mongoose');
const cors = require('cors');
const userRouter = require('./Routes/User');
const productRouter = require('./Routes/Product');
const featureMobileRouter = require('./Routes/FeatureMobile');
const adminRouter = require('./Routes/Admin');
const orderRouter = require('./Routes/Orders');
const cardRouter = require('./Routes/Card');

const app = express();

app.use(express.json());

// Configure CORS to allow requests only from http://localhost:3000
app.use(
  cors({
    origin: 'http://localhost:3000', // Allow only this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed HTTP methods
    credentials: true, // Allow cookies to be sent with requests
  })
);

app.use(bodyParser.json());

// Routers
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/feature-mobile', featureMobileRouter);
app.use('/admin', adminRouter);
app.use('/order', orderRouter);
app.use('/card', cardRouter);

// Use PORT from .env
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
