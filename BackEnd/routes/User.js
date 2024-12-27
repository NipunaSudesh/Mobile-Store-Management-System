const express = require("express");
const router = express.Router();
const User = require("../model/user");
const Admin = require("../model/admin");
const auth = require("../middleware/auth");

// User Registration
router.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ email, name, password });
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send({ error: error.message || "Server error" });
  }
});

// User/Admin Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    return res.send({ message: "Logged in as user", user, token, role: "user" });
  } catch (userError) {
    try {
      const admin = await Admin.findByCredentials(email, password);
      const token = await admin.generateAuthToken();
      return res.send({ message: "Logged in as admin", admin, token, role: "admin" });
    } catch (adminError) {
      return res.status(400).send({ error: "Login failed! Check authentication credentials" });
    }
  }
});

// Get All Users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ error: "Server error" });
  }
});

// Get Current User/Admin Info
router.get("/me", auth, async (req, res) => {
  try {
    if (req.admin) {
      const admin = await Admin.findById(req.admin._id);
      if (!admin) {
        return res.status(404).send({ message: "Invalid admin credentials" });
      }
      return res.status(200).send(admin);
    }

    if (req.user) {
      const user = await User.findById(req.user._id);
      if (!user) {
        return res.status(404).send({ message: "Invalid user credentials" });
      }
      return res.status(200).send(user);
    }

    res.status(403).send({ error: "Access denied" });
  } catch (error) {
    console.error("Error fetching user or admin:", error);
    res.status(500).send({ error: "Server error" });
  }
});

// Update Current User/Admin Info
router.patch("/update/me", auth, async (req, res) => {
  try {
    if (req.admin) {
      const updatedAdmin = await Admin.findByIdAndUpdate(req.admin._id, req.body, { new: true });
      if (!updatedAdmin) {
        return res.status(404).send({ message: "Invalid admin credentials" });
      }
      return res.status(200).send({ message: "Admin updated successfully" });
    }

    if (req.user) {
      const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).send({ message: "Invalid user credentials" });
      }
      return res.status(200).send({ message: "User updated successfully" });
    }

    res.status(403).send({ error: "Access denied" });
  } catch (error) {
    console.error("Error updating user/admin:", error);
    res.status(500).send({ error: "Server error" });
  }
});

// Delete User by ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id.trim());
    res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error during deletion:", error);
    res.status(500).send({ error: "Server error" });
  }
});

// Logout Current User/Admin
router.post("/logout", auth, async (req, res) => {
  try {
    if (req.admin) {
      req.admin.tokens = req.admin.tokens.filter((token) => token.token !== req.token);
      await req.admin.save();
      return res.status(200).send({ message: "Admin logged out successfully" });
    }

    if (req.user) {
      req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
      await req.user.save();
      return res.status(200).send({ message: "User logged out successfully" });
    }

    res.status(403).send({ error: "Access denied" });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).send({ error: "Server error" });
  }
});

// Get User Count
router.get("/count", async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.status(200).send({ count });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

module.exports = router;
