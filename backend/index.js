require("dotenv").config(); // Load .env variables
const express = require("express");
const cors = require("cors"); // Enable cross-origin requests

const app = express();
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Allow frontend to make requests

// Root API response
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Import routes
const helloRoutes = require("./routes/helloRoutes");
app.use("/api/hello", helloRoutes); // Attach Hello API

// Start server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
