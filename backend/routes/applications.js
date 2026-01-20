const express = require("express");
const router = express.Router();
const pool = require("../utils/db");
const ExcelJS = require("exceljs");

/* ---------------- POST: Save application ---------------- */
router.post("/apply", async (req, res) => {
  try {
    const { role, name, mobile, email, insta_id } = req.body;

    if (!role || !name || !mobile || !email) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    await pool.query(
      `INSERT INTO applications (role, name, mobile, email, insta_id)
       VALUES ($1, $2, $3, $4, $5)`,
      [role, name, mobile, email, insta_id || null]
    );

    res.json({ message: "Application saved successfully" });
  } catch (err) {
    console.error("Apply error:", err.message);
    res.status(500).json({ message: "Database error" });
  }
});

/* ---------------- GET: Fetch all applications ---------------- */
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

/* ---------------- ✅ GET: Export to Excel ---------------- */
router.get("/export", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, role, name, mobile, email, insta_id, created_at FROM applications ORDER BY id DESC"
    );

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Applications");

    sheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Role", key: "role", width: 15 },
      { header: "Name", key: "name", width: 20 },
      { header: "Mobile", key: "mobile", width: 15 },
      { header: "Email", key: "email", width: 30 },
      { header: "Instagram ID", key: "insta_id", width: 20 },
      { header: "Applied At", key: "created_at", width: 20 }
    ];

    sheet.addRows(result.rows);

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
    console.error("Export error:", err.message);
    res.status(500).json({ message: "Export failed" });
  }
});

module.exports = router;
