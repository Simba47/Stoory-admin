const router = require("express").Router();

const {
  submitApplication,
  getAllApplications,
  updateContactedStatus,
} = require("../controllers/applyController");

// PUBLIC – submit form
router.post("/", submitApplication);

// ADMIN – get all applications
router.get("/applications", getAllApplications);

// ADMIN – update contacted status
router.patch("/applications/:id/contacted", updateContactedStatus);

module.exports = router;
