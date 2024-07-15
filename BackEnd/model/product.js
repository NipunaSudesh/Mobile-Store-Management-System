const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt =require("jsonwebtoken");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim: true
    },
    price:{
        type:Number,
        require:true,
        min: 0
    },
    quantity:{
        type:Number,
        require:true,
        min: 0,
    },
    year:{
        type:Number,
        require:true,
        min: 1990,
    },
    type: { type: String, default: 'latest' },
    brand:{
        type:String,
        require:true,
        trim: true     
    },
    details:{
        type:String,
        require:true,
        trim: true 
    },
    imgURL:{
        type:String,
        require:true,
        validate: {
            validator: function(v) {
                return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
        }   
    },
    description:{
        type:String,
        require:true ,
        trim: true
    },
    tokens: [
        {
            token: {
                type: String
                 
            }
        }
    ]
})

productSchema.methods.generateAuthTokenMobile =async function (){
    const mobile =this;
   
    const payload = {
       _id: mobile._id.toString(),
       name: mobile.name, 
       price: mobile.price,
       quantity: mobile.quantity,
       year: mobile.year,
       brand: mobile.brand,
       details: mobile.details,
       imgURL: mobile.imgURL,
       description: mobile.description,
       type:mobile.type
   };
   
    const token=jwt.sign(payload,"mysecret");
    mobile.tokens = mobile.tokens.concat({token});
   
    await mobile.save();
   
    return token;
   }

const Product = mongoose.model("Product", productSchema);
module.exports = Product;