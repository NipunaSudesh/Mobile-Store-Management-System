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
    const { email, password } = req.body;

    if (password === 'password') {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Login failed. Invalid credentials.' });
    }
  });
  




module.exports =router;