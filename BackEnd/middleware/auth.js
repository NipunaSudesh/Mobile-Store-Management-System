const jwt = require("jsonwebtoken");
const User = require("../model/user");

const auth = async (req, res, next) => {

  try {
    const token = req.header("Authorization").replace("Bearer ", "").trim();
    console.log("Received token:", token);

    if (!token) {
      throw new Error("Token not provided");
    }

    const decoded = jwt.verify(token, "mysecret");
    console.log("Decoded token:", decoded);

    const user = await User.findOne({ _id: decoded._id, "tokens.token": token });
    console.log("Found user:", user);

    if (!user) {
      return res.status(401).send({ error: "User not found" });
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    console.error("Error in auth middleware:", error);
    res.status(401).send({ error: "Please authenticate." });
  }
};


module.exports = auth;
