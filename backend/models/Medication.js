// backend/models/Medication.js
const mongoose = require("mongoose");

const MedicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dosage: { type: String, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model("Medication", MedicationSchema);
