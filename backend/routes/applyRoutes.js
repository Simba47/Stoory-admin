const router = require("express").Router();
const { submitApplication } = require("../controllers/applyController");

router.post("/", submitApplication);

module.exports = router;
