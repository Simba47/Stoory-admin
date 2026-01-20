const express = require("express");
const router = express.Router();
const pool = require("../utils/db");

/* POST: save application */
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

/* ✅ GET: fetch all applications */
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM applications ORDER BY id DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Fetch error:", err.message);
    res.status(500).json({ message: "Database error" });
  }
});

module.exports = router;
