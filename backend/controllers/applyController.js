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
// GET all applications
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
// UPDATE contacted status
exports.updateContactedStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { contacted } = req.body;

    const updated = await Application.findByIdAndUpdate(
      id,
      { contacted },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
};

