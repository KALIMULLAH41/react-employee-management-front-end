import React, { useState } from "react";
import axios from "axios";

export default function Add() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [assets, setAssets] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const assetList = assets.split(",").map((asset) => asset.trim());
    const employeeData = { name, salary: parseInt(salary), assets: assetList };

    const response = await axios.post(
      "http://localhost:8081/addEmployee",
      employeeData
    );
    alert("Employee added successfully!");
    console.log(response.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <label>Salary:</label>
      <input
        type="number"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        required
      />
      <br />
      <label>Assets (comma separated):</label>
      <input
        type="text"
        value={assets}
        onChange={(e) => setAssets(e.target.value)}
      />
      <br />
      <button type="submit">Add Employee</button>
    </form>
  );
}
