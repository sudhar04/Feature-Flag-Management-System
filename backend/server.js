require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const organizationRoutes = require("./routes/organizationRoutes");
const featureFlagRoutes = require("./routes/featureFlagRoutes");

const app = express();
app.use(cors());
connectDB();  

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/organizations", organizationRoutes);
app.use("/api/features", featureFlagRoutes);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Feature Flag Management System Backend Running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

