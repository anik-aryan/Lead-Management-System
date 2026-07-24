const express = require("express");
const router = express.Router();

const {
  createLead,
  getAllLeads,
  getLeadById,
  updateLeadStatus,
  deleteLead,
  getLeadStats,
} = require("../controllers/lead.controller");

router.post("/", createLead);

router.get("/", getAllLeads);

router.get("/stats", getLeadStats);

router.get("/:id", getLeadById);

router.patch("/:id", updateLeadStatus);

router.delete("/:id", deleteLead);

module.exports = router;