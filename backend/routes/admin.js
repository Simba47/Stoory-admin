const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

// GET all applications
router.get("/applications", async (req, res) => {
  try {
    const apps = await Application.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
