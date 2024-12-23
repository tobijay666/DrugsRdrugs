// backend/routes/medicationRoutes.js
const express = require("express");
const {
  getMedications,
  addMedication,
  updateMedication,
  deleteMedication,
} = require("../controllers/medicationController");

const router = express.Router();

router.get("/", getMedications);
router.post("/", addMedication);
router.put("/:id", updateMedication);
router.delete("/:id", deleteMedication);

module.exports = router;
