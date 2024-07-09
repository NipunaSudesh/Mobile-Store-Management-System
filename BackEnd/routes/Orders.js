const express =require("express");
const router =express.Router();
const Order =require('../model/orders');


router.post('/add',async(req,res)=>{
    const order =req.body;
    try {
        const newOrder = await new Order(order);
        const saveOrder =await newOrder.save();
        res.status(201).send(saveOrder);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add order', message: error.message });
    }
});

router.get('/get',async (req,res)=>{
    try {
        const orders = await Order.find();
        res.status(201).send(orders)
    } catch (error) {
        res.status(400).send({ error: 'Failed to get order', message: error.message });
    }
});

router.delete('/delete/:id',async(req,res)=>{
    const id =req.params.id;
try {
    const deleteOrder =await Order.findByIdAndDelete(id);
    res.status(201).send('deleted successful!');
} catch (error) {
    res.status(400).send({ error: 'Failed to delete order', message: error.message });
}
});

router.get('/count', async (req, res) => {
    try {
      const count = await Order.countDocuments();
      res.status(200).send({ count });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });

module.exports=router;