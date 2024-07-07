const mongoose=require("mongoose");
const mongodbUrl ="mongodb+srv://nipuna:pass123@cluster0.lvhm2yt.mongodb.net/smartMobile?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongodbUrl,
{useNewUrlParser:true,
useUnifiedTopology:true }
);




const connection =mongoose.connection
mongoose.set('strictQuery',true);

connection.once("open",()=>{
    console.log("mongoDB connected!")
});
