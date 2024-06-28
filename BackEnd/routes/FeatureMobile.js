const express = require("express");
const router = express.Router();
const FeaturedMobile = require("../model/featuredmobile");

//---------------------Featured Mobile-------------------

router.post('/add', async (req, res) => {
    const product = new FeaturedMobile(req.body);
    try {
        const savedProduct = await product.save();
        res.status(201).send(savedProduct);
    } catch (error) {
        res.status(400).send({ error: 'Failed to add product', message: error.message });
    }
});

router.get('/get', async (req, res) => {
    try {
        const products = await FeaturedMobile.find();
        res.status(200).send(products); 
    } catch (error) {
        res.status(400).send({ error: 'Failed to get products', message: error.message });
    }
});

router.get('/get/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const product = await FeaturedMobile.findById(_id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.status(200).send(product); 
    } catch (error) {
        res.status(400).send({ error: 'Failed to get product', message: error.message });
    }
});

router.patch('/update/:id', async (req, res) => {
    const _id = req.params.id;
    const updates = req.body;
    try {
        const product = await FeaturedMobile.findByIdAndUpdate(_id, updates, { new: true });
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.status(200).send(product); 
    } catch (error) {
        res.status(400).send({ error: 'Failed to update product', message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const deleteProduct = await FeaturedMobile.findByIdAndDelete(_id);
        if (!deleteProduct) {
            return res.status(404).send('Product not found');
        }
        res.status(200).send('Deleted successfully');
    } catch (error) {
        res.status(400).send({ error: 'Failed to delete product', message: error.message });
    }
});

module.exports = router;
