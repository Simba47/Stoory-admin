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
    // Log incoming payload (VERY IMPORTANT for debugging)
    console.log("📩 APPLY REQUEST BODY:", req.body);

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

    // Basic required fields
    if (!role || !name || !mobile || !email) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    // Role-based validation (safe)
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

    // BULLETPROOF INSERT
    await pool.query(
      `
      INSERT INTO applications
      (role, name, mobile, email, insta_id, company_name, location, price)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
      `,
      [
        String(role),
        String(name),
        String(mobile),
        String(email),
        insta_id ? String(insta_id) : null,
        company_name ? String(company_name) : null,
        location ? String(location) : null,
        price ? String(price) : null, // force TEXT-safe
      ]
    );

    res.status(200).json({
      message: "Application saved successfully ✅",
    });
  } catch (err) {
    // FULL ERROR LOGGING (Render will show this)
    console.error("❌ APPLY ERROR FULL:", err);
    console.error("❌ MESSAGE:", err.message);
    console.error("❌ STACK:", err.stack);

    res.status(500).json({
      message: "Server error",
    });
  }
});

/* =================================================
   GET: All applications (Admin / Debug)
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
    console.error("❌ FETCH ERROR:", err);
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

    result.rows.forEach((row) => {
      sheet.addRow(row);
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
  } catch (err) {
    console.error("❌ EXPORT ERROR:", err);
    res.status(500).json({ message: "Export failed" });
  }
});

module.exports = router;
