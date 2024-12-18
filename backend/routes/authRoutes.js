const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator"); // For validation
const User = require("../models/User"); // Import the User model
const router = express.Router();

// Environment variables
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Registration endpoint
router.post(
  "/register",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const { username, email, password, role } = req.body;

    try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create and save the user
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        role: role || "user",
      });
      await newUser.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

// Login endpoint
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const { email, password } = req.body;

    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ message: "Invalid credentials: Check Email" });
      }

      // Compare the provided password with the hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Generate a JWT
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
  }
);

module.exports = router;
