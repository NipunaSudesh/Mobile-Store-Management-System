const express = require("express");
const router = express.Router();
const Card =require('../model/card');
const Latest =require("../model/product");
const Featured =require("../model/featuredmobile");

router.post('/cart', async (req, res) => {
    const { userId, productId, productType } = req.body;
  
    try {
      let product;
  
      if (productType === 'latest') {
        product = await Latest.findById(productId);
      } else if (productType === 'feature') {
        product = await Featured.findById(productId);
      } else {
        return res.status(400).json({ message: 'Invalid product type' });
      }
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      const cartItem = new Cart({
        userId,
        productId,
        productType
      });
  
      await cartItem.save();
      res.status(201).json(cartItem);
    } catch (error) {
      res.status(500).json({ message: 'Error adding item to cart', error });
    }
  });


module.exports = router;