import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h3>Employee Management System</h3>
      <NavLink to="add">Add Employee</NavLink>
      <br></br>

      <NavLink to="update">Update Employee</NavLink>
      <br></br>

      <NavLink to="search">Search Employee</NavLink>
      <br></br>

      <NavLink to="employees">Get all Employees</NavLink>
      <br></br>
    </>
  );
}
