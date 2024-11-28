const express = require("express");
const router = express.Router();
const { sayHello } = require("../controllers/helloController");

// Define the route for Hello API
router.get("/", sayHello);

module.exports = router;
