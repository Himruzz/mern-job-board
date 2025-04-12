const Job = require('../models/Job');

// GET /jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
};

// POST /jobs
const postJob = async (req, res) => {
  const { title, company, category, location, description } = req.body;

  if (!title || !company || !category || !location || !description) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newJob = new Job({ title, company, category, location, description });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ message: 'Error saving job', error: err });
  }
};

module.exports = {
  getJobs,
  postJob,
};
