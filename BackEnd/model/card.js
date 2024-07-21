const mongoose = require('mongoose');
const { Schema } = mongoose;

const CardSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    trim: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    trim: true,
    refPath: 'type', 
  },
  type: {
    type: String,
    required: true,
    trim: true,
    enum: ['feature', 'latest'],
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const Card = mongoose.model('Card', CardSchema);
module.exports = Card;
