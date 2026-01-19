const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["influencer", "business"],
    required: true
  },
  name: String,
  dob: String,
  mobile: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Application", applicationSchema);
