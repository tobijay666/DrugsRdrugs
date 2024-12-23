const BASE_URL = "http://localhost:82/api/medications";

export const getMedications = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch medications");
  return response.json();
};
// Update a medication
export const updateMedication = async (id, medication) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(medication),
  });
  if (!response.ok) throw new Error("Failed to update medication");
  return response.json();
};

export const addMedication = async (medication) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(medication),
  });
  if (!response.ok) throw new Error("Failed to add medication");
  return response.json();
};

export const deleteMedication = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) throw new Error("Failed to delete medication");
};
