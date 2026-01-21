const Application = require("../models/Application");
const saveToExcel = require("../utils/excelHelper");
const ExcelJS = require("exceljs");

/* ===========================
   CREATE application
=========================== */
exports.submitApplication = async (req, res) => {
  try {
    const application = await Application.create(req.body);

    // Save to Excel (existing logic)
    await saveToExcel(application);

    res.status(201).json({
      message: "Application submitted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

/* ===========================
   GET all applications
=========================== */
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/* ===========================
   UPDATE contacted + notes
=========================== */
exports.updateContactedStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { contacted, notes } = req.body;

    const updated = await Application.findByIdAndUpdate(
      id,
      { contacted, notes },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Update failed" });
  }
};

/* ===========================
   DOWNLOAD EXCEL (NEW)
=========================== */
exports.downloadExcel = async (req, res) => {
  try {
    const applications = await Application.find().lean();

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Applications");

    sheet.columns = [
      { header: "Name", key: "name", width: 20 },
      { header: "Company", key: "company", width: 20 },
      { header: "Location", key: "location", width: 20 },
      { header: "Price", key: "price", width: 15 },
      { header: "Contacted", key: "contacted", width: 15 },
      { header: "Notes", key: "notes", width: 30 },
    ];

    applications.forEach(app => {
      sheet.addRow({
        name: app.name || "",
        company: app.company || "",
        location: app.location || "",
        price: app.price || "",
        contacted: app.contacted ? "Yes" : "No",
        notes: app.notes || "",
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Excel download failed" });
  }
};
