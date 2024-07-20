const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true ,
    trim: true
  },
  productId: {
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
