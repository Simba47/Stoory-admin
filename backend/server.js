const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./utils/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/applications", require("./routes/applications"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on", PORT));

