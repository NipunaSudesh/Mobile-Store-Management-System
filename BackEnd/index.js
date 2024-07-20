const express = require('express');
const bodyParser = require('body-parser');
require('./db/mongoose');
const cors = require('cors');
const userRouter = require('./Routes/User');
const productRouter = require('./Routes/Product');
const featureMobileRouter = require('./Routes/FeatureMobile');
const adminRouter = require('./Routes/Admin');
const orderRouter = require('./Routes/Orders');
const cartRouter = require('./Routes/Cart');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/feature-mobile', featureMobileRouter);
app.use('/admin', adminRouter);
app.use('/order', orderRouter);
app.use('/cart', cartRouter);

const port = 5000;

app.listen(port, () => {
  console.log("Server is up and running on port " + port);
});
