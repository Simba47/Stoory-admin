const express = require("express");
const router = express.Router();
const pool = require("../utils/db"); // your PostgreSQL connection

// GET all applications (Admin)
router.get("/applications", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT *
       FROM applications
       ORDER BY created_at DESC`
    );

    res.json(result.rows);
  } catch (err) {
    console.error("Admin fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
