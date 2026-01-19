const ExcelJS = require("exceljs");
const path = require("path");

const filePath = path.join(__dirname, "../excel/applications.xlsx");

async function saveToExcel(data) {
  const workbook = new ExcelJS.Workbook();
  let worksheet;

  try {
    await workbook.xlsx.readFile(filePath);
    worksheet = workbook.getWorksheet("Applications");
  } catch {
    worksheet = workbook.addWorksheet("Applications");
    worksheet.columns = [
      { header: "Role", key: "role", width: 15 },
      { header: "Name", key: "name", width: 20 },
      { header: "DOB", key: "dob", width: 15 },
      { header: "Mobile", key: "mobile", width: 15 },
      { header: "Email", key: "email", width: 30 },
      { header: "Applied On", key: "createdAt", width: 20 }
    ];
  }

  worksheet.addRow({
    role: data.role,
    name: data.name,
    dob: data.dob,
    mobile: data.mobile,
    email: data.email,
    createdAt: new Date().toLocaleString()
  });

  await workbook.xlsx.writeFile(filePath);
}

module.exports = saveToExcel;
