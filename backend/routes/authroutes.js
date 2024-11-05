// backend/routes/authRoutes.js
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();

// Sign up route
// backend/routes/authRoutes.js
// backend/routes/authRoutes.js
router.post("/signup", async (req, res) => {
  const { username, password, email, fullName, phoneNumber } = req.body;

  try {
    // Check for existing username
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      fullName,
      phoneNumber,
    });
    await newUser.save();
    res.status(201).send("User created");
  } catch (err) {
    res.status(400).send("Error creating user");
  }
});

// Sign in route
// backend/routes/authRoutes.js
router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).send("Sign in successful"); // You can return a token here for authentication
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (err) {
    res.status(500).send("Error signing in");
  }
});

module.exports = router;
