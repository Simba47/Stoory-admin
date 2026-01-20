const express = require("express");
const router = express.Router();
const pool = require("../utils/db");
const ExcelJS = require("exceljs");

/* =================================================
   POST: Apply (Influencer / Brand)
   URL: /api/applications/apply
================================================= */
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

    // Common validation
    if (!role || !name || !mobile || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Role-based validation
    if (role === "Influencer") {
      if (!insta_id || !location || !price) {
        return res.status(400).json({
          message: "Influencer fields missing",
        });
      }
    }

    if (role === "Brand") {
      if (!company_name || !location || !price) {
        return res.status(400).json({
          message: "Brand fields missing",
        });
      }
    }

    const query = `
      INSERT INTO applications (
        role,
        name,
        mobile,
        email,
        insta_id,
        company_name,
        location,
        price
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
    `;

    const values = [
      role,
      name,
      mobile,
      email,
      insta_id || null,
      company_name || null,
      location,
      price,
    ];

    await pool.query(query, values);

    res.status(200).json({
      message: "Application saved successfully ✅",
    });
  } catch (err) {
    console.error("❌ Apply error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* =================================================
   GET: All applications
   URL: /api/applications
================================================= */
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        role,
        name,
        mobile,
        email,
        insta_id,
        company_name,
        location,
        price,
        created_at
      FROM applications
      ORDER BY created_at DESC
    `);

    res.json(result.rows);
  } catch (err) {
    console.error("❌ Fetch error:", err);
    res.status(500).json({ message: "Failed to fetch applications" });
  }
});

/* =================================================
   GET: Export Excel
   URL: /api/applications/export
================================================= */
router.get("/export", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        id,
        role,
        name,
        mobile,
        email,
        insta_id,
        company_name,
        location,
        price,
        created_at
      FROM applications
      ORDER BY created_at DESC
    `);

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Applications");

    sheet.columns = [
      { header: "ID", key: "id", width: 8 },
      { header: "Role", key: "role", width: 15 },
      { header: "Name", key: "name", width: 25 },
      { header: "Mobile", key: "mobile", width: 18 },
      { header: "Email", key: "email", width: 30 },
      { header: "Instagram ID", key: "insta_id", width: 25 },
      { header: "Company Name", key: "company_name", width: 25 },
      { header: "Location", key: "location", width: 20 },
      { header: "Price", key: "price", width: 15 },
      { header: "Applied At", key: "created_at", width: 22 },
    ];

    result.rows.forEach(row => sheet.addRow(row));

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=applications.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    console.error("❌ Export error:", err);
    res.status(500).json({ message: "Export failed" });
  }
});

module.exports = router;
