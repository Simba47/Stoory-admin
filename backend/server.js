const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
const adminRoutes = require("./routes/admin");
app.use("/api/admin", adminRoutes);

// routes
app.use("/api/applications", require("./routes/applications"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
