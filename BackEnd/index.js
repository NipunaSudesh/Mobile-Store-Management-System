const express=require("express");
const bodyPaeser=require("body-parser");
require('./db/mongoos');
const cors=require("cors");
const userRouter =require('./Routes/User');

const app =express();
app.use(express.json());
app.use(cors());
app.use(bodyPaeser.json());
app.use(userRouter);
const port=5000

app.listen(port,()=>{
    console.log("server is up and running on port "+port)
});


