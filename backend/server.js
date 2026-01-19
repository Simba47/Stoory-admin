const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Application = require("./models/Application");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error", err));

// POST application
app.post("/api/apply", async (req, res) => {
  try {
    const appData = await Application.create(req.body);
    res.json({
      message: "Application saved successfully ✅",
      appData
    });
  } catch (err) {
    res.status(500).json({ message: "Error saving application" });
  }
});

// GET all applications
app.get("/api/applications", async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: "Error fetching applications" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend running on port", PORT);
});
