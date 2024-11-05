// backend/models/Resume.js
const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  experience: [{ jobTitle: String, company: String, duration: String }],
  education: [{ degree: String, institution: String, year: String }],
});

module.exports = mongoose.model("Resume", resumeSchema);
