import React, { useEffect, useState } from "react";
// import "./MedicationForm.css"; // Keep your custom styles if needed

const MedicationForm = ({ initialData = {}, onSubmit, onReset }) => {
  const [medication, setMedication] = useState(initialData);

  useEffect(() => {
    setMedication(initialData); // Populate form fields when editing
  }, [initialData]);

  const handleChange = (e) => {
    setMedication({ ...medication, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(medication);
    setMedication({}); // Clear form fields after submission
    if (onReset) onReset(); // Notify parent to reset editing state
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="form-group mb-3">
        <label htmlFor="formName">Name</label>
        <input
          type="text"
          id="formName"
          name="name"
          className="form-control"
          placeholder="Enter name"
          value={medication.name || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="formDosage">Dosage</label>
        <input
          type="text"
          id="formDosage"
          name="dosage"
          className="form-control"
          placeholder="Enter dosage"
          value={medication.dosage || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="formQuantity">Quantity</label>
        <input
          type="number"
          id="formQuantity"
          name="quantity"
          className="form-control"
          placeholder="Enter quantity"
          value={medication.quantity || ""}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {initialData._id ? "Update Medication" : "Add Medication"}
      </button>
    </form>
  );
};

export default MedicationForm;
