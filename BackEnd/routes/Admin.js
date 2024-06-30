const express = require("express");
const router = express.Router();
const Admin = require("../model/admin");
const auth = require("../middleware/authAdmin");

router.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const dbAdmin = await Admin.findOne({ email });
    if (dbAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }
    const newAdmin = new Admin({ email, name, password });
    await newAdmin.save();
    //const token = await newAdmin.generateAuthToken();
    res.status(201).send(newAdmin);
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send({ error: error.message || 'Server error' });
  }
});

router.post("/login", async (req, res) => {
  try {
    const admin = await Admin.findByCredentials(req.body.email, req.body.password);
    const token = await admin.generateAuthToken();
    if (!admin) {
        return res.status(404).send({ message: 'Invalid credentials' });
      }
    console.log(admin)
    res.send({ admin, token });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Server error' });
  }
});

router.get("/Admins", async (req, res) => {
  try {
    const admins = await Admin.find({});
    res.status(200).send(admins);
  } catch (error) {
    res.status(500).send({ error: 'Server error' });
  }
});

router.get("/me", auth, async (req, res) => {
  const _id = req.admin._id;
  try {
    const admin = await Admin.findById(_id);

    if (!admin) {
      return res.status(404).send({ message: 'Invalid credentials' });
    }
    console.log(admin);
    res.status(200).send(admin);
  } catch (error) {
    console.error('Error fetching admin:', error);
    res.status(500).send({ error: 'Server error' });
  }
});

router.patch("/update/me", auth, async (req, res) => {
    const _id = req.admin._id;
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    if (!updatedAdmin) {
      return res.status(404).send({ message: 'Invalid credentials' });
    }
    return res.status(200).send({ message: 'Update successful' });
  } catch (error) {
    return res.status(500).send({ error: 'Server error' });
  }
});

// logout implementation

module.exports = router;
