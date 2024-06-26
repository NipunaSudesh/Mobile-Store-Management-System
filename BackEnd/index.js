const express=require("express");
const bodyParser = require("body-parser");
require('./db/mongoos');
const cors=require("cors");
const userRouter =require('./Routes/User');
const productRouter =require('./Routes/Product');
const FeatureMobile =require('./Routes/FeatureMobile');

const app =express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json()); 
app.use('/user', userRouter); 
app.use('/product', productRouter);
app.use('/feature-mobile', FeatureMobile);
const port=5000;

app.listen(port,()=>{
    console.log("server is up and running on port "+port)
});


