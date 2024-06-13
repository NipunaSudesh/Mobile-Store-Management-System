const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post("/users", async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = router;
