const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt =require("jsonwebtoken");

const featuredmobileSchema = new mongoose.Schema({
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
    brand:{
        type:String,
        require:true,
        trim: true     
    },
    type: {
         type: String,
          default: 'feature'
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

featuredmobileSchema.methods.generateAuthTokenMobile =async function (){
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

const FeaturedMobile = mongoose.model("FeaturedMobile", featuredmobileSchema);
module.exports = FeaturedMobile;