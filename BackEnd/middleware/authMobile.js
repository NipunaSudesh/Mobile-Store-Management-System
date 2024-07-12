const jwt = require("jsonwebtoken");
const Latest =require("../model/product");
const Featured = require("../model/featuredmobile");

const auth = async (req, res, next) => {

  try {
    const token = req.header("Authorization").replace("Bearer ", "").trim();
    console.log("Received token:", token);

    if (!token) {
      throw new Error("Token not provided");
    }

    const decoded = jwt.verify(token, "mysecret");
    console.log("Decoded token:", decoded);

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
    console.error("Error in auth middleware:", error);
    res.status(401).send({ error: "Please authenticate." });
  }
};


module.exports = auth;
