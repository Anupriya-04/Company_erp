import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css_folder/CompanyRegister.css";

function CompanyRegister() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    contact: "",
    address: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg(""); // clear error when typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Send registration request
      const res = await axios.post("http://localhost:5000/api/companies/register", {
        companyName: formData.companyName,
        email: formData.email,
        contact: formData.contact,
        address: formData.address,
        password: formData.password,
      });

      // ✅ Save token & company in localStorage (backend must send them)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("company", JSON.stringify(res.data.company));

      // ✅ Navigate directly to dashboard
      navigate("/company-dashboard", { state: { company: res.data.company } });
    } catch (err) {
      console.error("Error:", err);
      setErrorMsg(err.response?.data?.message || "Registration failed, please try again.");
    } finally {
      setLoading(false);
    }
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

          {errorMsg && <p className="error-text">{errorMsg}</p>}

          <button type="submit" className="register-btn" disabled={loading}>
            {loading ? "Registering..." : "Register & Go Green 🌿"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompanyRegister;
