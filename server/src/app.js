const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const leadRoutes = require("./routes/lead.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://lead-management-system-iota-flame.vercel.app",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use("/api/leads", leadRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "LeadDesk API Running",
  });
});

module.exports = app;