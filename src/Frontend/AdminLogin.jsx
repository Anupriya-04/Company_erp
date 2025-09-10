import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../css_folder/AdminLogin.css";

function AdminLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded admin login (you can replace with API later)
    if (formData.username === "admin1234@gmail.com" && formData.password === "password") {
      navigate("/admin-dashboard");
    } else {
      alert("Invalid Admin Credentials!");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <h1 className="admin-login-title">🔐 Admin Portal</h1>
        <p className="admin-login-subtitle">Secure Access for Administrators</p>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <input
            type="text"
            name="username"
            placeholder="Admin Username"
            value={formData.username}
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
          <button type="submit" className="admin-login-btn">
            Login
          </button>
        </form>

        <div className="admin-login-links">
          <p>
            Back to{" "}
            <Link to="/" className="link">
              Company Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
