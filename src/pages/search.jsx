import React, { useState } from "react";
import axios from "axios";

export default function GetEmployee() {
  const [employeeId, setEmployeeId] = useState("");
  const [employee, setEmployee] = useState(null);

  const handleFetch = async () => {
    const response = await axios.get(
      `http://localhost:8081/getEmployee?id=${employeeId}`
    );
    setEmployee(response.data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <button onClick={handleFetch}>Get Employee</button>

      {employee && (
        <div>
          <h3>{employee.name}</h3>
          <p>Salary: {employee.salary}</p>
          <p>Assets: {employee.assets.join(", ")}</p>
        </div>
      )}
    </div>
  );
}
