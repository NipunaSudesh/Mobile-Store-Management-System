const express =require("express");
const router =express.Router();
const Product =require("../model/product");

router.post('/product/add',async (req,res) =>{
    const product = new Product(req.body);
    try {
        const saveProduct=await product.save();
        res.status(201).send(saveProduct);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add product', message: error.message });

    }
});

module.exports=router;