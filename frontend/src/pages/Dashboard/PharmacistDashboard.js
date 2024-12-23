import React, { useEffect, useState } from "react";
import MedicationTable from "../../components/Dashboard/MedicationTable";
import MedicationForm from "../../components/Dashboard/MedicationForm";
import {
  getMedications,
  addMedication,
  deleteMedication,
  updateMedication,
} from "../../services/medicationService";
import "./PharmacistDashboard.css";

const PharmacistDashboard = () => {
  const [medications, setMedications] = useState([]);
  const [editingMedication, setEditingMedication] = useState(null); // Track the medication being edited

  // Fetch medications on component mount
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

  // Handle form submission (Add or Update)
  const handleFormSubmit = async (medication) => {
    try {
      if (editingMedication) {
        // Update existing medication
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

  // Handle delete medication
  const handleDelete = async (id) => {
    try {
      await deleteMedication(id);
      setMedications(medications.filter((med) => med._id !== id));
    } catch (error) {
      console.error("Error deleting medication:", error);
    }
  };

  // Handle edit medication
  const handleEdit = (medication) => {
    setEditingMedication(medication); // Set the medication to edit
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
        onSubmit={handleFormSubmit}
        initialData={editingMedication || {}} // Pass initial data for edit
      />
    </div>
  );
};

export default PharmacistDashboard;
