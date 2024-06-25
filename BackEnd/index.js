const express=require("express");
const bodyParser = require("body-parser");
require('./db/mongoos');
const cors=require("cors");
const userRouter =require('./Routes/User');
const productRouter =require('./Routes/Product');

const app =express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json()); 
app.use(userRouter);
app.use(productRouter);
const port=5000;

app.listen(port,()=>{
    console.log("server is up and running on port "+port)
});


