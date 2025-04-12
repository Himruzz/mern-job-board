const express = require('express');
const router = express.Router();
const { getJobs, postJob } = require('../controllers/jobController');

// @route GET /jobs
router.get('/', getJobs);

// @route POST /jobs
router.post('/', postJob);

module.exports = router;
