const Lead = require("../models/lead.model");

const createLead = async (req, res) => {
  try {
    const { name, email, budget, message } = req.body;

    if (!name || !email || !budget || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const lead = await Lead.create({
      name,
      email,
      budget,
      message,
    });

    res.status(201).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createLead,
};