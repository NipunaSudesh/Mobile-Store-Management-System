//require("../db/mongoos");
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const bcrypt =require("bcryptjs")
const jwd=require("jsonwebtoken");

const usersSchema =new Schema({
    name :{
        type :String,
        required :true
    },
    email :{
        type:String,
        required:true,
        unique:true,   
        trim:true  
  
    },

    password:{
        type:String,
        trim:true,
        required:true
    }
});
const user =mongoose.model("User",usersSchema);
module.exports=user;



