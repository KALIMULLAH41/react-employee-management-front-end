import React, { useState } from "react";
import axios from "axios";

export default function UpdateEmployee() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [assets, setAssets] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedEmployee = {
      id: parseInt(id),
      name,
      salary: parseInt(salary),
      assets: assets.split(","), // Convert string to array
    };
    const response = await axios.post(
      "http://localhost:8081/updateEmployee",
      updatedEmployee
    );
    alert("Employee updated successfully");
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Employee</h2>
      <input
        type="number"
        placeholder="Employee ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Assets (comma separated)"
        value={assets}
        onChange={(e) => setAssets(e.target.value)}
        required
      />
      <button type="submit">Update Employee</button>
    </form>
  );
}
