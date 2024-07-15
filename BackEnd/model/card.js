const mongoose = require("mongoose");

const CardSchema =new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        require:true
    },
    name: {
         type: String,
          required: true },
    price: { type: Number,
         required: true 
        },
    quantity: {
         type: Number,
          default: 1 
        },
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
        },
});

module.exports = mongoose.model('Cart', CardSchema);