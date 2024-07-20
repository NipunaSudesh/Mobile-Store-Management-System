const express = require("express");
const router = express.Router();
const Cart = require('../model/cart'); 
const Latest = require("../model/product"); 
const Featured = require("../model/featuredmobile"); 

// Add item to cart


router.post('/add', async (req, res) => {
  const { userId, productId } = req.body;

  try {
    // Create a new cart item
    const cartItem = new Cart({
      userId: userId,
      productId: productId,
    });

    // Save the cart item to the database
    await cartItem.save();
    
    // Respond with the created cart item
    res.status(201).json(cartItem);
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Error adding item to cart', error });
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
