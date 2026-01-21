const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    role: String,
    name: String,
    dob: String,
    mobile: String,
    email: String,

    company: String,
    location: String,
    price: Number,

    contacted: {
      type: Boolean,
      default: false,
    },

    notes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
