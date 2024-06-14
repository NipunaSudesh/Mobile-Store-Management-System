const express =require("express");
const router =express.Router();
const User =require("../model/user");



router.post("/users",async (req,res)=>{
    const user =new User(req.body);
    console.log(req.body);
    try{
        await user.save()
        res.status(201).send(user)
    }catch(error){
        res.status(400).send(error)
    }
});




module.exports =router;