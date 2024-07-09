const express =require("express");
const router =express.Router();
const Product =require("../model/product");
// const FeaturedMobile =require("../model/featuredmobile");

// --------------------latest mobile--------------------------------- 

router.post('/add', async (req, res) => {
    const productData = req.body;
    try {
        const newProduct = new Product(productData);
      //  const newFeaturedMobile = new FeaturedMobile(productData);

        const savedProduct = await newProduct.save();
      //  const savedFeaturedMobile = await newFeaturedMobile.save();

        res.status(201).json({
            product: savedProduct
          //  featuredMobile: savedFeaturedMobile
        });
    } catch (error) {
        res.status(400).send({ error: 'Failed to add products', message: error.message });
    }
});

router.get('/get' ,async (req,res) =>{
    try {
        const products= await Product.find();
        res.status(201).send(products);
    } catch (error) {
        res.status(400).send({ error: 'Failed to get products', message: error.message })
    }
});

router.get('/get/:id' ,async (req,res) =>{
    // const _id =req.params.id;
    const _id = decodeURIComponent(req.params.id);
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

router.patch('/update/:id', async (req, res) => {
    const _id = decodeURIComponent(req.params.id);
    try {
        const updatedProduct = await Product.findByIdAndUpdate(_id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).send('Product not found');
        }
        res.status(200).send(updatedProduct);
        console.log('Product updated successfully');
    } catch (error) {
        res.status(400).send({ error: 'Failed to update product', message: error.message });
    }
});

 router.delete('/delete/:id', async (req,res) =>{
    // const _id=req.params.id;
    const _id = decodeURIComponent(req.params.id);
    try {
        const deleteProduct = await Product.findByIdAndDelete(_id);
        res.status(201).send('deleted successful!');
    } catch (error) {
        res.status(400).send({ error: 'Failed to delete product', message: error.message })
    }
 });
 router.get("/count",async (res,req)=>{
    try {
      const count = await Product.countDocuments();
      res.json({ count });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });

module.exports=router;