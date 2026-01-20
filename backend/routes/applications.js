const express = require("express");
const router = express.Router();
const pool = require("../utils/db");

router.post("/apply", async (req, res) => {
  try {
    const { role, name, mobile, email } = req.body;

    if (!role || !name || !mobile || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    await pool.query(
      `INSERT INTO applications (role, name, mobile, email)
       VALUES ($1, $2, $3, $4)`,
      [role, name, mobile, email]
    );

    res.json({ message: "Application saved successfully" });
  } catch (err) {
    console.error("Apply error:", err.message);
    res.status(500).json({ message: "Database error" });
  }
});

module.exports = router;
