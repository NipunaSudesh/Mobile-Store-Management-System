const express =require("express");
const router =express.Router();
const Product =require("../model/product");

router.post('/featuredmobile/add',async (req,res) =>{
    const product = new Product(req.body);
    try {
        const saveProduct=await product.save();
        res.status(201).send(saveProduct);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add product', message: error.message });

    }
});

router.get('/featuredmobile/get' ,async (req,res) =>{
    try {
        const products= await Product.find();
        res.status(201).send(products);
    } catch (error) {
        res.status(400).send({ error: 'Failed to get products', message: error.message })
    }
});

router.get('/featuredmobile/get/:id' ,async (req,res) =>{
    const _id =req.params.id;
    try {
        const product = await Product.findById(_id);
        if(!product){
            res.status(404).send('product not found');
        }
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send({ error: 'Failed to get product', message: error.message })
    }
});

router.patch('/featuredmobile/update/:id' ,async (req,res) =>{
    const _id =req.params.id;
    try {
        const product = await Product.findByIdAndUpdate(_id);
        if(!product){
            res.status(404).send('product not found');
        }
        res.status(201).send();
    } catch (error) {
        res.status(400).send({ error: 'Failed to update product', message: error.message })
    }
});
 router.delete('/featuredmobile/delete/:id', async (req,res) =>{
    const _id=req.params.id;
    try {
        const deleteProduct = await Product.findByIdAndDelete(_id);
        res.status(201).send('deleted successful!');
    } catch (error) {
        res.status(400).send({ error: 'Failed to delete product', message: error.message })
    }
 });


module.exports=router;