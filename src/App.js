// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CompanyLogin from "./Frontend/CompanyLogin";
import CompanyRegister from "./Frontend/CompanyRegister";
import CompanyDashboard from "./Frontend/CompanyDashboard";
import AdminLogin from "./Frontend/AdminLogin";
import AdminDashboard from "./Frontend/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompanyLogin />} />
        <Route path="/company-register" element={<CompanyRegister />} />
        <Route path="/company-dashboard" element={<CompanyDashboard />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
