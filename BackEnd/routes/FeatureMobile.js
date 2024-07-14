const express = require("express");
const router = express.Router();
const FeaturedMobile = require("../model/featuredmobile");
const LatestMobile= require("../model/product");
const auth = require("../middleware/authMobile");

//---------------------Featured Mobile-------------------

router.post('/add', async (req, res) => {
    const product = new FeaturedMobile(req.body);
    try {
        const savedProduct = await product.save();
        const token =await product.generateAuthTokenMobile();
        res.status(201).send({savedProduct,token});
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

// router.get('/get/:id',auth ,async (req,res) =>{
//     try {
//         if (req.featured) { 
//             const mobile = await FeaturedMobile.findById(req.featured._id);
//             if (!mobile) {
//               return res.status(404).send({ message: 'not found!' });
//             }
//             console.log(mobile);
//             return res.status(200).send(mobile);
//         }else if(req.latest){
//             const mobile = await LatestMobile.findById(req.latest._id);
//             if (!mobile) {
//               return res.status(404).send({ message: 'not found!' });
//             }
//             console.log(mobile);
//             return res.status(200).send(mobile);
//         }else {
//             return res.status(403).send({ error: 'Access denied' });
//           }
//     } catch (error) {
//         res.status(400).send({ error: 'Failed to get product', message: error.message })
//     }


// });

// router.get('/check/:id', async (req, res) => {
//     try {
//       const mobile = await FeaturedMobile.findById(req.params.id) ;
  
//       if (mobile) {
//         return res.status(200).send({ exists: true });
//       } else {
//         return res.status(404).send({ exists: false });
//       }
//     } catch (error) {
//       res.status(400).send({ error: 'Failed to check ID', message: error.message });
//     }
//   });
  
router.get('/get/:id' ,async (req,res) =>{
    // const _id =req.params.id;
    const _id = decodeURIComponent(req.params.id);
    try {
        const product = await FeaturedMobile.findById(_id);
        if(!product){
            res.status(404).send('product not found');
        }
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send({ error: 'Failed to get product', message: error.message })
    }
});

router.get('/get/brand/:brand',async(req,res)=>{
    const brand =decodeURIComponent(req.params.brand);
    try {
        const brandItems = await FeaturedMobile.find({brand:brand});
        if(brandItems.length===0){
            return res.status(404).send('No items found for the specified brand');
        }
        res.status(200).send(brandItems);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred', message: error.message });
    }
    
});

router.patch('/update/:id', async (req, res) => {
    const _id = decodeURIComponent(req.params.id);
    try {
        const updatedProduct = await FeaturedMobile.findByIdAndUpdate(_id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).send('Product not found');
        }
        res.status(200).send(updatedProduct);
        console.log('Product updated successfully');
    } catch (error) {
        res.status(400).send({ error: 'Failed to update product', message: error.message });
    }
});


router.delete('/delete/:id', async (req, res) => {
    const _id = decodeURIComponent(req.params.id);
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

router.get("/count",async (req,res)=>{
    try {
      const count = await FeaturedMobile.countDocuments();
      res.json({ count });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });
module.exports = router;
