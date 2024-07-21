const mongoose = require('mongoose');
const Latest =require('../model/product');
const Featured =require('../model/featuredmobile');

const CardSchema = new mongoose.Schema({
  userId: {
    // type: String,
    type:mongoose.Schema.Types.ObjectId,
    ref:'Latest',
    required: true ,
    trim: true
  },
  productId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Featured',
    required: true,
    trim: true
  },
  type:{
    type: String,
    required: true,
    trim: true
  },
  quantity: {
    type: Number,
    default: 1 
  }
});

const Cart = mongoose.model("Cart", CardSchema);
module.exports = Cart;
