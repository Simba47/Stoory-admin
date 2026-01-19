require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

pool.connect()
  .then(() => console.log("✅ PostgreSQL connected"))
  .catch(err => console.error("❌ DB connection error", err));

// Create table if not exists
(async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS applications (
      id SERIAL PRIMARY KEY,
      name TEXT,
      email TEXT,
      mobile TEXT,
      role TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
})();

// POST: submit application
app.post("/api/apply", async (req, res) => {
  try {
    const { name, email, mobile, role } = req.body;

    const result = await pool.query(
      "INSERT INTO applications (name, email, mobile, role) VALUES ($1,$2,$3,$4) RETURNING *",
      [name, email, mobile, role]
    );

    res.json({
      message: "Application saved successfully ✅",
      data: result.rows[0]
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving application" });
  }
});

// GET: fetch all applications
app.get("/api/applications", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM applications ORDER BY id DESC"
  );
  res.json(result.rows);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
