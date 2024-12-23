import React from "react";
// import "./MedicationTable.css"; // Keep your custom styles if needed

const MedicationTable = ({ medications, onEdit, onDelete }) => {
  return (
    <div className="table-responsive mt-3">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Dosage</th>
            <th scope="col">Quantity</th>
            <th scope="col">Actions</th>
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
                  className="btn btn-warning btn-sm mr-2"
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
    </div>
  );
};

export default MedicationTable;
