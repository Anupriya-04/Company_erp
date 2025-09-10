import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css_folder/Login.css";

function CompanyLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get companies from localStorage
    const companies = JSON.parse(localStorage.getItem("companies")) || [];

    // Check login
    const found = companies.find(
      (c) => c.email === formData.email && c.password === formData.password
    );

    if (found) {
      navigate("/company-dashboard", { state: { company: found } });
    } else {
      alert("Invalid company credentials!");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">🌍 Company Portal</h1>
        <p className="login-subtitle">Connecting Business with Nature</p>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            placeholder="Company Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="login-links">
          <p>
            Don’t have an account?{" "}
            <Link to="/company-register" className="link">Register</Link>
          </p>
          <p>
            Are you an Admin?{" "}
            <Link to="/admin-login" className="link">Admin Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyLogin;
