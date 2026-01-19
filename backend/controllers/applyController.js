const Application = require("../models/Application");
const saveToExcel = require("../utils/excelHelper");

exports.submitApplication = async (req, res) => {
  try {
    const application = await Application.create(req.body);

    // Save to Excel
    await saveToExcel(application);

    res.status(201).json({
      message: "Application submitted successfully"
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
