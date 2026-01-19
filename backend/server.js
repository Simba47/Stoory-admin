const express = require("express");
const cors = require("cors");
const fs = require("fs");
const ExcelJS = require("exceljs");

const app = express();
app.use(cors());
app.use(express.json());

/* ---------- POST: submit application ---------- */
app.post("/api/apply", async (req, res) => {
  const data = req.body;

  const workbook = new ExcelJS.Workbook();
  const file = "./applications.xlsx";
  let sheet;

  if (fs.existsSync(file)) {
    await workbook.xlsx.readFile(file);
    sheet = workbook.getWorksheet(1);
  } else {
    sheet = workbook.addWorksheet("Applications");
    sheet.columns = [
      { header: "Role", key: "role" },
      { header: "Name", key: "name" },
      { header: "DOB", key: "dob" },
      { header: "Mobile", key: "mobile" },
      { header: "Email", key: "email" }
    ];
  }

  sheet.addRow(data);
  await workbook.xlsx.writeFile(file);

  res.json({ message: "Application saved successfully ✅" });
});

/* ---------- GET: admin view applications ---------- */
app.get("/api/applications", async (req, res) => {
  const workbook = new ExcelJS.Workbook();
  const file = "./applications.xlsx";

  if (!fs.existsSync(file)) {
    return res.json([]);
  }

  await workbook.xlsx.readFile(file);
  const sheet = workbook.getWorksheet(1);

  const applications = [];

  sheet.eachRow((row, index) => {
    if (index !== 1) {
      applications.push({
        role: row.getCell(1).value,
        name: row.getCell(2).value,
        dob: row.getCell(3).value,
        mobile: row.getCell(4).value,
        email: row.getCell(5).value
      });
    }
  });

  res.json(applications);
});

/* ---------- START SERVER (ALWAYS LAST) ---------- */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend running on port " + PORT);
});
