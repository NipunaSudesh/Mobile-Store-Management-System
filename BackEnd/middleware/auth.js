const jwt = require("jsonwebtoken");
const User = require("../model/user");
const Admin = require("../model/admin");
require('dotenv').config(); // Load environment variables from .env file

const auth = async (req, res, next) => {

  try {
    const token = req.header("Authorization").replace("Bearer ", "").trim();
   
    if (!token) {
      throw new Error("Token not provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const admin = await Admin.findOne({ _id: decoded._id, 'tokens.token': token });
    if (admin) {
      req.admin = admin;
      req.token = token;
      return next();
    }

    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
    if (user) {
      req.user = user;
      req.token = token;
      return next();
    }
        if (!user && !admin) {
      return res.status(401).send({ error: "User not found" });
    }

    throw new Error('Authentication failed');

  } catch (error) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
