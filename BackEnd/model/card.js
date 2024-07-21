const mongoose = require('mongoose');
const { Schema } = mongoose;

const CardSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    trim: true,
  },
  // productId: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   trim: true,
  //   refPath: 'type', 
  // },
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
});

const Card = mongoose.model('Card', CardSchema);
module.exports = Card;
