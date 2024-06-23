const express =require("express");
const router =express.Router();
const User =require("../model/user");
const auth = require("../middleware/auth");



router.post("/user/register", async (req,res)=>{
    const user =new User(req.body);
    try{
        await user.save()
        const token = await user.generateAuthToken();
        res.status(201).send({user,token})
    }catch(error){
        console.error('Error during registration:', error);
        res.status(500).send({error:error.massage || 'Server error' })
    }
});


router.post("/user/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);

        const token = await user.generateAuthToken()
        res.send({ user, token });

    } catch (error) {
        res.status(500).json({error:error.massage|| 'Server error' });
    }
});

router.get("/users",async (req,res)=>{

    try{
        const users=await User.find({});
        res.status(200).send(users)
    }catch(error){
        res.status(500).send({ error: 'Server error' })
    }
});


router.get("/user/me",auth, async (req, res) => {
   // const _id = req.params._id;
    const _id =req.user._id;
    try {
        const user = await User.findById(_id);

        if (!user) {
            return res.status(404).send({ message: 'Invalid credentials' }); 
        }
        console.log(user);
        res.status(200).send(user); 

    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send({ error: 'Server error' })
    }
});

router.patch("/user/update/:id",auth,async (req,res) =>{
   //const _id =req.user._id;
     const _id=req.params.id.trim()
    try {
        const udpateUser =await User.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        if(!udpateUser){
            return res.status(404).send({ message: 'Invalid credentials' });
        }
        return res.status(200).send({ message: 'updated successful' });
    } catch (error) {
        return res.status(500).send({ error: 'Server error' });
    }
});
 router.delete("/user/delete/:id",auth,async (req,res) =>{
    // const _id =req.user._id;
    const _id=req.params.id.trim()
    try {
        const deleteUser = await User.findByIdAndDelete(_id);
        if(!deleteUser){
            return res.status(404).send({massage:'Invalid credentials'});
        }
        return res.status(200).send({massage:'deleted successful'});
    } catch (error) {
        return res.status(500).send({massage:'Server error'});
    }
 });

// logout eka hdnn oni antim video eke 1.30 idn tiye
module.exports =router;