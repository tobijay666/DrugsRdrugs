import React, { useEffect, useState } from "react";
import MedicationTable from "../../components/Dashboard/MedicationTable";
import MedicationForm from "../../components/Dashboard/MedicationForm";
import {
  getMedications,
  addMedication,
  deleteMedication,
  updateMedication,
} from "../../services/medicationService";
// import "./PharmacistDashboard.css";

const PharmacistDashboard = () => {
  const [medications, setMedications] = useState([]);
  const [editingMedication, setEditingMedication] = useState(null); // Track the medication being edited

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const data = await getMedications();
        setMedications(data);
      } catch (error) {
        console.error("Error fetching medications:", error);
      }
    };

    fetchMedications();
  }, []);

  const handleFormSubmit = async (medication) => {
    try {
      if (editingMedication) {
        // Update medication
        const updatedMedication = await updateMedication(
          editingMedication._id,
          medication
        );
        setMedications((prevMedications) =>
          prevMedications.map((med) =>
            med._id === editingMedication._id ? updatedMedication : med
          )
        );
        setEditingMedication(null); // Clear editing state
      } else {
        // Add new medication
        const newMedication = await addMedication(medication);
        setMedications([...medications, newMedication]);
      }
    } catch (error) {
      console.error("Error saving medication:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMedication(id);
      setMedications(medications.filter((med) => med._id !== id));
    } catch (error) {
      console.error("Error deleting medication:", error);
    }
  };

  const handleEdit = (medication) => {
    setEditingMedication(medication); // Pre-fill form with selected medication
  };

  const handleFormReset = () => {
    setEditingMedication(null); // Clear form fields after adding/updating
  };

  return (
    <div className="pharmacist-dashboard container">
      <h2 className="dashboard-title">Pharmacist Dashboard</h2>
      <MedicationTable
        medications={medications}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <MedicationForm
        initialData={editingMedication || {}} // Pre-fill with editingMedication or empty object
        onSubmit={handleFormSubmit}
        onReset={handleFormReset} // Clear the form fields
      />
    </div>
  );
};

export default PharmacistDashboard;
