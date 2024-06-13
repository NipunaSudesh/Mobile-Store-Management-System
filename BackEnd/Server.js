const express = require('express');
require('./db/mongoose');
const userRoute=require('./models/User');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(userRoute)
const port=5000;

app.listen(port,()=>{
    console.log("Server is up and runing on port "+port);
});

