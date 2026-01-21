const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    role: String,
    name: String,
    dob: String,
    mobile: String,
    email: String,

    // ✅ NEW FIELD
    contacted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
