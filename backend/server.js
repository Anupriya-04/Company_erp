const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const companyRoutes = require("./routes/companyRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/companies", companyRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/companyDB";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ DB Connection Error:", err));
