import React from "react";
import MedicationTable from "../../components/Dashboard/MedicationTable";
import MedicationForm from "../../components/Dashboard/MedicationForm";
import "./PharmacistDashboard.css";

const PharmacistDashboard = () => {
  return (
    <div className="pharmacist-dashboard container">
      <h2 className="dashboard-title">Pharmacist Dashboard</h2>
      <MedicationTable />
      <MedicationForm />
    </div>
  );
};

export default PharmacistDashboard;
