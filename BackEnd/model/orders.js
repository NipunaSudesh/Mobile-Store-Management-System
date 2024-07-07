const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim: true
    },
    address:{
     type:String,
    require:true,
    trim: true
    },
    ZipCode:{
        type:String,
       require:true,
       trim: true
       },
       Number:{
        type:String,
       require:true,
       trim: true
       },

})

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;