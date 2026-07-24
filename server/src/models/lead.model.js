const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    budget: {
      type: String,
      required: true,
      enum: [
        "Under $500",
        "$500 - $1000",
        "$1000 - $5000",
        "$5000+",
      ],
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "Closed"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lead", leadSchema);