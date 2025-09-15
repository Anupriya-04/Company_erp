// routes/companyRoutes.js
const express = require("express");
const Company = require("../models/Company");

const router = express.Router();


// ✅ Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const company = await Company.findOne({ email });
    if (!company) {
      return res.status(400).json({ message: "Company not found" });
    }

    if (company.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({
      token: "dummy-jwt-token",
      company,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Register Company
router.post("/register", async (req, res) => {
  try {
    const { companyName, email, contact, address, password } = req.body;

    // check duplicate email
    const existingCompany = await Company.findOne({ email });
    if (existingCompany) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newCompany = new Company({
      companyName,
      email,
      contact,
      address,
      password,
    });

    await newCompany.save(); // ✅ Save to database

    res.status(201).json({
      message: "Company registered successfully",
      company: newCompany,
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: "Error fetching companies", error: err.message });
  }
});


module.exports = router;
