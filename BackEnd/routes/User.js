const express =require("express");
const router =express.Router();
const User =require("../model/user");
const auth = require("../middleware/auth");
const Admin = require("../model/admin");



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


router.post("/login", async (req, res) => {
    const {email,password} =req.body;
try {
    const user =await User.findByCredentials(email, password);
    const token =await user.generateAuthToken();
    res.send({message: 'login as a user', user, token, role: 'user' });
} catch (error) {
    const admin =await Admin.findByCredentials(email, password);
    if (admin) {
        const token = await admin.generateAuthToken();
        res.send({message: 'login as a admin', admin, token, role: 'admin' });
    }else{
        res.status(400).send({ error: 'Login failed! Check authentication credentials' });
    }
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
// router.get("/users", auth, async (req, res) => {
//     try {
//       if (req.admin) {  
//         const admins = await Admin.find({});
//         return res.status(200).send({ message: 'Admin users fetched successfully', admins });
//       } else if (req.user) {  
//         const users = await User.find({});
//         return res.status(200).send({ message: 'Regular users fetched successfully', users });
//       } else {
//         return res.status(403).send({ error: 'Access denied' });
//       }
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       res.status(500).send({ error: 'Server error' });
//     }
//   });
  

// router.get("/me",auth, async (req, res) => {
//    // const _id = req.params._id;
//     const _id =req.user._id;
//     try {
//         const user = await User.findById(_id);

//         if (!user) {
//             return res.status(404).send({ message: 'Invalid credentials' }); 
//         }
//         console.log(user);
//         res.status(200).send(user); 

//     } catch (error) {
//         console.error('Error fetching user:', error);
//         res.status(500).send({ error: 'Server error' })
//     }
// });
router.get("/me", auth, async (req, res) => {
    try {
      if (req.admin) { 
        const admin = await Admin.findById(req.admin._id);
        if (!admin) {
          return res.status(404).send({ message: 'Invalid credentials for admin' });
        }
        console.log(admin);
        return res.status(200).send(admin);
      } else if (req.user) {
        if (!user) {
          return res.status(404).send({ message: 'Invalid credentials for user' });
        }
        console.log(user);
        return res.status(200).send(user);
      } else {
        return res.status(403).send({ error: 'Access denied' });
      }
    } catch (error) {
      console.error('Error fetching user or admin:', error);
      res.status(500).send({ error: 'Server error' });
    }
  });

  router.patch("/update/me", auth, async (req, res) => {
    try {
      if (req.admin) {
        const updatedAdmin = await Admin.findByIdAndUpdate(req.admin._id, req.body, { new: true });
        if (!updatedAdmin) {
          return res.status(404).send({ message: 'Invalid credentials for admin' });
        }
        return res.status(200).send({ message: 'Admin updated successfully' });
      } else if (req.user) { 
        const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, { new: true });
        if (!updatedUser) {
          return res.status(404).send({ message: 'Invalid credentials for user' });
        }
        return res.status(200).send({ message: 'User updated successfully' });
      } else {
        return res.status(403).send({ error: 'Access denied' });
      }
    } catch (error) {
      return res.status(500).send({ error: 'Server error' });
    }
  });

  router.delete("/delete/:id", auth, async (req, res) => {
    const _id = req.params.id.trim();
    try {
      if (req.admin) {
        const deleteAdmin = await Admin.findByIdAndDelete(_id);
        if (!deleteAdmin) {
          return res.status(404).send({ message: 'Admin not found' });
        }
        return res.status(200).send({ message: 'Admin deleted successfully' });
      } else if (req.user) { 
        const deleteUser = await User.findByIdAndDelete(_id);
        if (!deleteUser) {
          return res.status(404).send({ message: 'User not found' });
        }
        return res.status(200).send({ message: 'User deleted successfully' });
      } else {
        return res.status(403).send({ error: 'Access denied' });
      }
    } catch (error) {
      return res.status(500).send({ error: 'Server error' });
    }
  });
  
  router.post("/logout", auth, async (req, res) => {
    try {
      if (req.admin) { 
        req.admin.tokens = req.admin.tokens.filter((token) => token.token !== req.token);
        await req.admin.save();
        res.status(200).send({ message: "Admin logged out successfully." });
      } else if (req.user) {
        req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
        await req.user.save();
        res.status(200).send({ message: "User logged out successfully." });
      } else {
        return res.status(403).send({ error: 'Access denied' });
      }
    } catch (error) {
      console.error("Error during logout:", error);
      res.status(500).send({ error: "Server error" });
    }
  });
  

// router.patch("/update/me",auth,async (req,res) =>{
//    const _id =req.user._id;
//      //const _id=req.params.id.trim()
//     try {
//         const udpateUser =await User.findByIdAndUpdate(_id,req.body,{
//             new:true
//         });
//         if(!udpateUser){
//             return res.status(404).send({ message: 'Invalid credentials' });
//         }
//         return res.status(200).send({ message: 'updated successful' });
//     } catch (error) {
//         return res.status(500).send({ error: 'Server error' });
//     }
// });
//  router.delete("/delete/:id",auth,async (req,res) =>{
//     // const _id =req.user._id;
//     const _id=req.params.id.trim()
//     try {
//         const deleteUser = await User.findByIdAndDelete(_id);
//         if(!deleteUser){
//             return res.status(404).send({massage:'Invalid credentials'});
//         }
//         return res.status(200).send({massage:'deleted successful'});
//     } catch (error) {
//         return res.status(500).send({massage:'Server error'});
//     }
//  });

//  router.post("/logout", auth, async (req, res) => {
//     try {
//       req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
//       await req.user.save();
//       res.status(200).send({ message: "Logged out successfully." });
//     } catch (error) {
//       console.error("Error during logout:", error);
//       res.status(500).send({ error: "Server error" });
//     }
//   });


module.exports =router;