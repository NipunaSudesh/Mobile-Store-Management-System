const express = require("express");
const router = express.Router();
const Card = require('../model/card'); 
const Latest = require("../model/product"); 
const Featured = require("../model/featuredmobile"); 
const mongoose = require('mongoose');
const User = require('../model/user');

router.post('/add', async (req, res) => {
  const { userId, type,name,price,imgURL,details} = req.body;

  try {
  //   let product;

  //   switch (type) {
  //     case 'Latest':
  //       product = await Latest.findById(productId);
  //       break;
  //     case 'feature':
  //       product = await Featured.findById(productId);
  //       break;
  //     default:
  //       return res.status(400).json({ message: 'Invalid product type' });
  //   }

  //   if (!product) {
  //     return res.status(404).json({ message: 'Product not found' });
  //   }

    const cardItem = new Card({
      userId: new mongoose.Types.ObjectId(userId),
      name,
      price,
      details,
      imgURL,
      type,
    });

    await cardItem.save();

    res.status(201).json(cardItem);
  } catch (error) {
    console.error('Error adding item to card:', error);
    res.status(500).json({ message: 'Error adding item to card', error });
  }
});

router.get('/get/:UesrId',async(req,res)=>{
  const UserId = req.params.UesrId;
  try {
    const cardItem =await Card.find({UserId:UserId});
    if(!cardItem){
      console.log('Not found!');
    }
    res.status(200).send(cardItem);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred', message: error.message });
  }
});

router.get('/get/:ProductId',async(req,res)=>{
  const productId = req.params.ProductId;
  try {
    const cardItem =await Card.Featured({productId:productId});
    if(!cardItem){
      console.log('Not found!');
    }
    res.status(200).send(cardItem);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred', message: error.message });
  }
});





// Delete item from cart
router.delete('/delete/:id', async (req, res) => {
  const _id = decodeURIComponent(req.params.id);
  try {
    const deleteProduct = await Card.findByIdAndDelete(_id);
    if (!deleteProduct) {
      return res.status(404).json({ message: 'Product not found in cart' });
    }
    res.status(200).json({ message: 'Deleted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product', message: error.message });
  }
});

module.exports = router;
