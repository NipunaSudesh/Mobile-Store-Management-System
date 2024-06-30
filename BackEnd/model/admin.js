const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt =require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    tokens: [
        {
            token: {
                type: String
                 
            }
        }
    ]
});

adminSchema.pre("save", async function(next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});


adminSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    return user;
};

adminSchema.methods.generateAuthToken =async function (){
    const user =this;
   
    const payload = {
       _id: user._id.toString(),
       name: user.name, 
       email: user.email 
   };
   
    const token=jwt.sign(payload,"mysecret");
    user.tokens = user.tokens.concat({token});
   
    await user.save();
   
    return token;
   }

// userSchema.methods.generateAuthToken = async function() {
//     const user = this;
//     const token = jwt.sign({ _id: user._id.toString() }, "mysecret");
//     console.log("Generated token:", token); 
//     user.tokens.push({ token });
//     await user.save();
//     return token;
//   };
  


const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
