require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.use("/api/apply", require("./routes/applyRoutes"));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});
