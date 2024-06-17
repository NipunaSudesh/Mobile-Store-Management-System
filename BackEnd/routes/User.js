const express =require("express");
const router =express.Router();
const User =require("../model/user");



router.post("/register",async (req,res)=>{
    const user =new User(req.body);
    try{
        await user.save()
        res.status(201).send(user)
    }catch(error){
        res.status(400).send(error)
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
        res.status(401).json({ message: 'Invalid credentials' });
    }
});


module.exports =router;