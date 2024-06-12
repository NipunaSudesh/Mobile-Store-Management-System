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

const url ="mongodb+srv://nipuna:pass123@cluster0.lvhm2yt.mongodb.net/smartMobile?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const connection =mongoose.connection

connection.once("open",()=>{
    console.log("mongoDB Connected!")
});