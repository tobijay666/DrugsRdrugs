const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/db"); // Import the DB connection
const authRoutes = require("./routes/authRoutes"); // Import the auth routes

dotenv.config(); // Load environment variables
dbConnect(); // Connect to the database

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use("/api/auth", authRoutes); // Authentication routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
