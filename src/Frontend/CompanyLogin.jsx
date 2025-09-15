import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../css_folder/Login.css";

function CompanyLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/company-dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMsg(""); // clear error when typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setErrorMsg("Both email and password are required.");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/companies/login",
        formData
      );

      // Save token + company data
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("company", JSON.stringify(res.data.company));

      navigate("/company-dashboard", { state: { company: res.data.company } });
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Login failed! Please try again.";
      setErrorMsg(message);
    } finally {
      setLoading(false);
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

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? " Hide" : "👁 Show"}
            </button>
          </div>

          {errorMsg && <p className="error-text">{errorMsg}</p>}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="login-links">
          <p>
            Don’t have an account?{" "}
            <Link to="/company-register" className="link">
              Register
            </Link>
          </p>
          <p>
            Are you an Admin?{" "}
            <Link to="/admin-login" className="link">
              Admin Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyLogin;
