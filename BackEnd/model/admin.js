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
    role: { type: String, default: 'admin' },
    tokens: [
        {
            token: {
                type: String
                 
            }
        }
    ]
});

adminSchema.pre("save", async function(next) {
    const admin = this;
    if (admin.isModified("password")) {
        admin.password = await bcrypt.hash(admin.password, 8);
    }
    next();
});

adminSchema.statics.findByCredentials = async (email, password) => {
    const admin = await Admin.findOne({ email });

    if (!admin) {
        throw new Error('admin not found');
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    return admin;
};

adminSchema.methods.generateAuthToken =async function (){
    const admin =this;
   
    const payload = {
       _id: admin._id.toString(),
       name: admin.name, 
       email: admin.email ,
       role: admin.role
   };
   
    const token=jwt.sign(payload,"mysecret");
    admin.tokens = admin.tokens.concat({token});
   
    await admin.save();
   
    return token;
   }

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
