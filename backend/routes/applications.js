const express = require("express");
const router = express.Router();
const pool = require("../utils/db");
const ExcelJS = require("exceljs");
const path = require("path");
const fs = require("fs");

/**
 * POST: apply
 * Saves data to PostgreSQL + Excel
 */
router.post("/apply", async (req, res) => {
  try {
    const { role, name, dob, mobile, email, insta_id } = req.body;

    // 1️⃣ Insert into PostgreSQL
    await pool.query(
      `
      INSERT INTO applications (role, name, dob, mobile, email, insta_id)
      VALUES ($1, $2, $3, $4, $5, $6)
      `,
      [role, name, dob, mobile, email, insta_id]
    );

    // 2️⃣ Excel file path
    const filePath = path.join(__dirname, "../applications.xlsx");

    const workbook = new ExcelJS.Workbook();
    let worksheet;

    if (fs.existsSync(filePath)) {
      await workbook.xlsx.readFile(filePath);
      worksheet = workbook.getWorksheet("Applications");
    } else {
      worksheet = workbook.addWorksheet("Applications");

      worksheet.columns = [
        { header: "Role", key: "role", width: 15 },
        { header: "Name", key: "name", width: 20 },
        { header: "DOB", key: "dob", width: 15 },
        { header: "Instagram ID", key: "insta_id", width: 25 },
        { header: "Mobile", key: "mobile", width: 15 },
        { header: "Email", key: "email", width: 30 },
        { header: "Applied At", key: "created_at", width: 20 }
      ];
    }

    // 3️⃣ Add row (DOB FIXED ✅)
    worksheet.addRow({
      role,
      name,
      dob: dob ? new Date(dob).toLocaleDateString("en-GB") : "",
      insta_id,
      mobile,
      email,
      created_at: new Date().toLocaleString()
    });

    await workbook.xlsx.writeFile(filePath);

    res.json({ message: "Application saved successfully ✅" });
  } catch (err) {
    console.error("Apply error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * GET: fetch all applications
 */
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM applications ORDER BY id DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
