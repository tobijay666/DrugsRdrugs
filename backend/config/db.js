const mongoose = require("mongoose");

// Load environment variables
const DB_URI = process.env.MONGO_URI || "mongodb://localhost:27017/DrD";

const dbConnect = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = dbConnect;
