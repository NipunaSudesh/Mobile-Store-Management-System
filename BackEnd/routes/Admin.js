const express =require("express");
const router =express.Router();
const User =require("../model/admin");
const auth = require("../middleware/auth");



router.post("/register", async (req,res)=>{
    const { email, name, password } = req.body;

    try{
        const dbUser = await User.findOne({ email });
        if(dbUser){
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = new User({ email, name, password });
        await user.save()
        //const token = await user.generateAuthToken();
        res.status(201).send(user)
    }catch(error){
        console.error('Error during registration:', error);
        res.status(500).send({error:error.massage || 'Server error' })
    }
});