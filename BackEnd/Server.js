const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const port=5000;

app.listen(port,()=>{
    console.log("Server is up and runing on port "+port);
});
