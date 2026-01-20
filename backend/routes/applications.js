const express = require("express");
const router = express.Router();
const pool = require("../db"); // postgres connection
const ExcelJS = require("exceljs");

/**
 * POST /api/applications/apply
 */
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

    const result = await pool.query(
      `
      INSERT INTO applications
      (role, name, mobile, email, insta_id, company_name, location, price)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
      RETURNING *
      `,
      [
        role,
        name,
        mobile,
        email,
        insta_id || null,
        company_name || null,
        location,
        price,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Apply error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * GET /api/applications
 */
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM applications ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * GET /api/applications/export
 */
router.get("/export", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM applications ORDER BY created_at DESC"
    );

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Applications");

    sheet.columns = [
      { header: "ID", key: "id", width: 5 },
      { header: "Role", key: "role", width: 12 },
      { header: "Name", key: "name", width: 20 },
      { header: "Mobile", key: "mobile", width: 15 },
      { header: "Email", key: "email", width: 25 },
      { header: "Instagram ID", key: "insta_id", width: 20 },
      { header: "Company Name", key: "company_name", width: 20 },
      { header: "Location", key: "location", width: 20 },
      { header: "Price", key: "price", width: 10 },
      { header: "Created At", key: "created_at", width: 20 },
    ];

    result.rows.forEach((row) => sheet.addRow(row));

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
    console.error("Export error:", err);
    res.status(500).json({ message: "Export failed" });
  }
});

module.exports = router;
