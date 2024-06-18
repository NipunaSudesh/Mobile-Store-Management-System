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

router.get("/users",async (req,res)=>{

    try{
        const users=await User.find({});
        res.status(200).send(users)
    }catch(error){
        res.status(400).send(error)
    }
});

 router.get("/user/:id" ,async (req,res) =>{
    const _id= req.params.id;
    try {
        const user =await User.findById(_id);
        if(!user){
            return res.status(404).send();
        }
        return res.status(200).send();
    } catch (error) {
        return res.status(400).send();
    }
 });


module.exports =router;