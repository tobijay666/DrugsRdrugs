import React from "react";

const MedicationTable = ({ medications, onEdit, onDelete }) => {
  return (
    <table className="table mt-3">
      <thead>
        <tr>
          <th>Name</th>
          <th>Dosage</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {medications.map((med) => (
          <tr key={med._id}>
            <td>{med.name}</td>
            <td>{med.dosage}</td>
            <td>{med.quantity}</td>
            <td>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => onEdit(med)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(med._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MedicationTable;
