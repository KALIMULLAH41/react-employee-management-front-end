import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Add from "./pages/add";
import Update from "./pages/update";
import Search from "./pages/search";
import Employees from "./pages/employees";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="add" element={<Add />} />
      <Route path="update" element={<Update />} />
      <Route path="search" element={<Search />} />
      <Route path="employees" element={<Employees />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
