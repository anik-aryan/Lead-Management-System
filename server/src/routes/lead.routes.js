const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth.middleware");

const {
  createLead,
  getAllLeads,
  getLeadById,
  updateLeadStatus,
  deleteLead,
  getLeadStats,
} = require("../controllers/lead.controller");


router.post("/", createLead);


router.get("/", protect, getAllLeads);

router.get("/stats", protect, getLeadStats);

router.get("/:id", protect, getLeadById);

router.patch("/:id", protect, updateLeadStatus);

router.delete("/:id", protect, deleteLead);

module.exports = router;