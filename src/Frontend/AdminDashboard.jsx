// src/Frontend/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { FaBuilding, FaUsersCog, FaClipboardList, FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css_folder/AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    sessionStorage.clear();
    navigate("/admin-login");
  };

  // Fetch registered companies
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/companies");
        setCompanies(res.data);
      } catch (err) {
        console.error("Error fetching companies:", err);
      }
    };
    fetchCompanies();
  }, []);

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="admin-header">
        <h1>🌿 Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* Stats Section */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="icon"><FaBuilding /></div>
          <div>
            <p className="stat-label">Registered Companies</p>
            <h2 className="stat-value">{companies.length}</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon"><FaUsersCog /></div>
          <div>
            <p className="stat-label">Active Users</p>
            <h2 className="stat-value">3,450</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon"><FaClipboardList /></div>
          <div>
            <p className="stat-label">Projects Ongoing</p>
            <h2 className="stat-value">56</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon"><FaLeaf /></div>
          <div>
            <p className="stat-label">CO₂ Reduced</p>
            <h2 className="stat-value">25,000 tons</h2>
          </div>
        </div>
      </div>

      {/* Company List Section */}
      <section className="company-list">
        <h2>🏢 Registered Companies</h2>
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {companies.length > 0 ? (
              companies.map((company) => (
                <tr key={company._id}>
                  <td>{company.companyName}</td>
                  <td>{company.email}</td>
                  <td>{company.contact}</td>
                  <td>{company.address}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No companies registered yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default AdminDashboard;
