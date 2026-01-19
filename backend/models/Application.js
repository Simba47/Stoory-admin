const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    role: String,
    name: String,
    dob: String,
    mobile: String,
    email: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
