const jwt = require("jsonwebtoken");
const Latest =require("../model/product");
const Featured = require("../model/featuredmobile");
require('dotenv').config(); // Load environment variables from .env file

const auth = async (req, res, next) => {

  try {
    const token = req.header("Authorization").replace("Bearer ", "").trim();

    if (!token) {
      throw new Error("Token not provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const latest = await Latest.findOne({ _id: decoded._id, 'tokens.token': token });
    if (latest) {
      req.latest = latest;
      req.token = token;
      return next();
    }

    const featured = await Featured.findOne({ _id: decoded._id, 'tokens.token': token });
    if (featured) {
      req.featured = featured;
      req.token = token;
      return next();
    }
        if (!featured && !latest) {
      return res.status(401).send({ error: "featured mobile not found" });
    }

    throw new Error('Authentication failed');

  } catch (error) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
