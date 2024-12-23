// backend/controllers/medicationController.js
const Medication = require("../models/Medication");

// Get all medications
const getMedications = async (req, res) => {
  try {
    const medications = await Medication.find();
    res.json(medications);
  } catch (error) {
    res.status(500).json({ error: "Error fetching medications" });
  }
};

// Add new medication
const addMedication = async (req, res) => {
  const { name, dosage, quantity } = req.body;
  try {
    const medication = new Medication({ name, dosage, quantity });
    await medication.save();
    res.status(201).json(medication);
  } catch (error) {
    res.status(400).json({ error: "Error adding medication" });
  }
};

// Update medication
const updateMedication = async (req, res) => {
  const { id } = req.params;
  const { name, dosage, quantity } = req.body;
  try {
    const medication = await Medication.findByIdAndUpdate(
      id,
      { name, dosage, quantity },
      { new: true }
    );
    res.json(medication);
  } catch (error) {
    res.status(400).json({ error: "Error updating medication" });
  }
};

// Delete medication
const deleteMedication = async (req, res) => {
  const { id } = req.params;
  try {
    await Medication.findByIdAndDelete(id);
    res.json({ message: "Medication deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting medication" });
  }
};

module.exports = {
  getMedications,
  addMedication,
  updateMedication,
  deleteMedication,
};
