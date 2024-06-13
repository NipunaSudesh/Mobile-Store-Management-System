const mongoose = require('mongoose');

const url ="mongodb+srv://nipuna:pass123@cluster0.lvhm2yt.mongodb.net/smartMobile?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url,
    {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    }
);

const connection =mongoose.connection

connection.once("open",()=>{
    console.log("mongoDB Connected!")
});