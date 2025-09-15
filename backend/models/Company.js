// models/Company.js
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: String, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Company", companySchema);
