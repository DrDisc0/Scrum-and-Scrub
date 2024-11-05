// backend/routes/resumeRoutes.js
const express = require("express");
const Resume = require("../models/Resume");
const router = express.Router();

// Get all resumes
router.get("/", async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create a new resume
router.post("/", async (req, res) => {
  const resume = new Resume(req.body);
  try {
    const savedResume = await resume.save();
    res.status(201).json(savedResume);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
