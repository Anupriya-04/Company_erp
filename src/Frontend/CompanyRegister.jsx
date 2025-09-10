// src/Frontend/CompanyRegister.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css_folder/CompanyRegister.css";

function CompanyRegister() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    contact: "",
    address: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just redirect to dashboard
    navigate("/company-dashboard", { state: { company: formData } });
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h1 className="register-title">🌍 Register Your Company</h1>
        <p className="register-subtitle">
          Join us in conserving the environment and making a difference 🌱
        </p>

        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Company Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Company Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Set Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="register-btn">
            Register & Go Green 🌿
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompanyRegister;
