import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await axios.get("http://localhost:8081/getAllEmployee");
      setEmployees(response.data);
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h3>All Employees</h3>
      {employees.length === 0 ? (
        <p>No employees available.</p>
      ) : (
        employees.map((employee, index) => (
          <div key={index}>
            <h4>{employee.name}</h4>
            <p>Salary: {employee.salary}</p>
            <p>Assets: {employee.assets.join(", ")}</p>
          </div>
        ))
      )}
    </div>
  );
}
