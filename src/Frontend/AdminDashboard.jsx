import React from "react";
import { FaBuilding, FaUsersCog, FaClipboardList, FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // 👈 import navigation
//import "./AdminDashboard.css";
import "../css_folder/AdminDashboard.css";


function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // remove stored token/session
    localStorage.removeItem("adminToken"); 
    sessionStorage.clear();

    // navigate to admin login page
    navigate("/admin-login");
  };

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
            <h2 className="stat-value">120</h2>
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
              <th>Sector</th>
              <th>Location</th>
              <th>Contribution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EcoBuild Pvt. Ltd.</td>
              <td>info@ecobuild.com</td>
              <td>Construction</td>
              <td>Bhopal</td>
              <td>Planted 1,200 Trees</td>
            </tr>
            <tr>
              <td>GreenTech Solutions</td>
              <td>contact@greentech.com</td>
              <td>IT</td>
              <td>Delhi</td>
              <td>Reduced 500 tons CO₂</td>
            </tr>
            <tr>
              <td>Solaris Energy</td>
              <td>hello@solaris.com</td>
              <td>Energy</td>
              <td>Mumbai</td>
              <td>Installed 200 Solar Panels</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default AdminDashboard;
