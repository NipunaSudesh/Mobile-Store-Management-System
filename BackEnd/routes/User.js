const express =require("express");
const router =express.Router();
const User =require("../model/user");
const auth = require("../middleware/auth");



router.post("/register",auth, async (req,res)=>{
    const user =new User(req.body);
    try{
        await user.save()
        res.status(201).send(user)
    }catch(error){
        res.status(400).send({ error: 'Server error' })
    }
});


router.post("/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);

        const token = await user.generateAuthToken()

        res.status(200).json({ 
            message: 'Login successful',
            user: user 
        });
    } catch (error) {
        res.status(401).json({ error: 'Server error' });
    }
});

router.get("/users",async (req,res)=>{

    try{
        const users=await User.find({});
        res.status(200).send(users)
    }catch(error){
        res.status(400).send({ error: 'Server error' })
    }
});

router.get("/user/me",auth, async (req, res) => {
    // const _id = req.params.id.trim(); 
    const _id =req.user._id;
    try {
        const user = await User.findById(_id);

        if (!user) {
            return res.status(404).send({ message: 'Invalid credentials' }); 
        }

        res.status(200).send(user); 

    } catch (error) {
        res.status(400).send({ error: 'Server error' });
    }
});

router.patch("/update/me",auth,async (req,res) =>{
    const _id =req.user._id;
    // const _id=req.params.id.trim()
    try {
        const udpateUser =await User.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        if(!udpateUser){
            return res.status(404).send({ message: 'Invalid credentials' });
        }
        return res.status(200).send({ message: 'updated successful' });
    } catch (error) {
        return res.status(400).send({ error: 'Server error' });
    }
});
 router.delete("/delete/me",auth,async (req,res) =>{
    const _id =req.user._id;
    try {
        const deleteUser = await User.findByIdAndDelete(_id);
        if(!deleteUser){
            return res.status(404).send({massage:'Invalid credentials'});
        }
        return res.status(200).send({massage:'deleted successful'});
    } catch (error) {
        return res.status(400).send({massage:'Server error'});
    }
 });


module.exports =router;