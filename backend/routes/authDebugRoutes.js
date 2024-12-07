const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Import the User model
const router = express.Router();

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

router.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;

  // Debugging: Check plain text password
  console.log("Plain password before hashing:", password);

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Debugging: Check hashed password
  console.log("Hashed password:", hashedPassword);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    role,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Debugging: Check plain text password
  console.log("Plain password during login:", password);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid credentials: Check Email" });
    }

    // Debugging: Check hashed password from database
    console.log("Hashed password from database:", user.password);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match result:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT and send response
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res
      .status(200)
      .json({ token, role: user.role, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
