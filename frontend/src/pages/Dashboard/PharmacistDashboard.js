import React, { useEffect, useState } from "react";
import MedicationTable from "../../components/Dashboard/MedicationTable";
import MedicationForm from "../../components/Dashboard/MedicationForm";
import "./PharmacistDashboard.css";

const PharmacistDashboard = () => {
  const [medications, setMedications] = useState([]);

  // Fetch medications
  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const response = await fetch("http://localhost:82/api/medications");
        const data = await response.json();
        setMedications(data);
      } catch (error) {
        console.error("Error fetching medications:", error);
      }
    };

    fetchMedications();
  }, []);

  const handleFormSubmit = async (medication) => {
    try {
      const response = await fetch("http://localhost:82/api/medications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(medication),
      });
      const newMed = await response.json();
      setMedications([...medications, newMed]);
    } catch (error) {
      console.error("Error adding medication:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:82/api/medications/${id}`, {
        method: "DELETE",
      });
      setMedications(medications.filter((med) => med._id !== id));
    } catch (error) {
      console.error("Error deleting medication:", error);
    }
  };

  return (
    <div className="pharmacist-dashboard container">
      <h2 className="dashboard-title">Pharmacist Dashboard</h2>
      <MedicationTable
        medications={medications}
        onEdit={(med) => console.log("Edit:", med)}
        onDelete={handleDelete}
      />
      <MedicationForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default PharmacistDashboard;
