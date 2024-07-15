const mongoose = require("mongoose");

const CardSchema =new mongoose.Schema({
    userId: {
         type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
           required: true 
        },
    productId: {
         type: mongoose.Schema.Types.ObjectId,
          ref: 'FeaturedMobile',
           required: true
         },
         productType: {
             type: String,
              enum: ['FeaturedMobile', 'Product'],
              required: true 
            },
    quantity: {
         type: Number,
          default: 1 
        }

},{ timestamps: true });

module.exports = mongoose.model('Cart', CardSchema);