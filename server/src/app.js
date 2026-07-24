const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const leadRoutes = require("./routes/lead.routes");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use("/api/leads", leadRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "LeadDesk API Running",
  });
});

module.exports = app;