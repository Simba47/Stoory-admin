const express = require("express");
const cors = require("cors");
const fs = require("fs");
const ExcelJS = require("exceljs");

const app = express();
app.use(cors());
app.use(express.json());

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

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
