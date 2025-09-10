// src/Frontend/CompanyDashboard.jsx
import React from "react";
import { FaUsers, FaTree, FaHandHoldingHeart, FaChartLine } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import "../css_folder/CompanyDashboard.css";

function CompanyDashboard() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get company data passed from registration
  const company = location.state?.company;

  const handleLogout = () => {
    navigate("/"); // redirect to login page
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <h1>🌍 Environment Conservation Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* Company Info Section */}
      {company && (
        <section className="company-info">
          <h2>🏢 Company Profile</h2>
          <ul>
            <li><strong>Company Name:</strong> {company.companyName}</li>
            <li><strong>Email:</strong> {company.email}</li>
            <li><strong>Contact:</strong> {company.contact}</li>
            <li><strong>Address:</strong> {company.address}</li>
          </ul>
        </section>
      )}

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="icon"><FaUsers /></div>
          <div>
            <p className="stat-label">Active Members</p>
            <h2 className="stat-value">1,240</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon"><FaTree /></div>
          <div>
            <p className="stat-label">Trees Planted</p>
            <h2 className="stat-value">5,300</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon"><FaHandHoldingHeart /></div>
          <div>
            <p className="stat-label">Communities Supported</p>
            <h2 className="stat-value">87</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="icon"><FaChartLine /></div>
          <div>
            <p className="stat-label">CO₂ Reduced (tons)</p>
            <h2 className="stat-value">12,450</h2>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="mission">
        <h2>🌱 Our Mission</h2>
        <p>
          Together, we are working towards building a greener planet by planting trees,
          supporting local communities, and reducing carbon emissions. 
          This dashboard helps track your company’s contributions to environmental conservation.  
        </p>
      </section>
    </div>
  );
}

export default CompanyDashboard;
