const express = require("express");
const router = express.Router();
const pool = require("../db"); // make sure db.js exports Pool

/* -------------------------------------------------
   APPLY FORM (Influencer + Brand)
--------------------------------------------------*/
router.post("/apply", async (req, res) => {
  try {
    const {
      role,
      name,
      mobile,
      email,
      insta_id,
      company_name,
      location,
      price,
    } = req.body;

    // Basic validation
    if (!role || !name || !mobile || !email) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const query = `
      INSERT INTO applications
      (role, name, mobile, email, insta_id, company_name, location, price)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    `;

    const values = [
      role,
      name,
      mobile,
      email,
      insta_id || null,
      company_name || null,
      location || null,
      price || null,
    ];

    await pool.query(query, values);

    res.status(200).json({
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error("❌ APPLY ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/* -------------------------------------------------
   GET ALL APPLICATIONS (Admin / Excel)
--------------------------------------------------*/
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM applications ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("❌ FETCH ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
