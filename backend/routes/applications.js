const express = require("express");
const ExcelJS = require("exceljs");
const pool = require("../utils/db");

const router = express.Router();

// POST: apply
router.post("/apply", async (req, res) => {
  try {
    const { role, name, dob, mobile, email, insta_id } = req.body;

    await pool.query(
      `INSERT INTO applications (role, name, dob, mobile, email, insta_id)
       VALUES ($1,$2,$3,$4,$5,$6)`,
      [role, name, dob, mobile, email, insta_id]
    );

    res.json({ message: "Application saved successfully ✅" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving application" });
  }
});

// GET: all applications
router.get("/", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM applications ORDER BY id DESC"
  );
  res.json(result.rows);
});

// GET: export Excel
router.get("/export", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM applications ORDER BY created_at DESC"
  );

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Applications");

  sheet.columns = [
  { header: "ID", key: "id", width: 8 },
  { header: "Role", key: "role", width: 15 },
  { header: "Name", key: "name", width: 20 },
  { header: "DOB", key: "dob", width: 15 },
  { header: "Instagram ID", key: "insta_id", width: 20 },
  { header: "Mobile", key: "mobile", width: 15 },
  { header: "Email", key: "email", width: 30 },
  { header: "Applied At", key: "created_at", width: 20 }
];

sheet.getColumn("dob").numFmt = "yyyy-mm-dd";

rows.forEach(row => {
  sheet.addRow({
    ...row,
    dob: row.dob
      ? new Date(row.dob).toISOString().split("T")[0]
      : ""
  });
});


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
});

module.exports = router;
