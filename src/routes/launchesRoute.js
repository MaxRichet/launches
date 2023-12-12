const express = require('express');
const router = express.Router();

const launchesController = require('../controllers/launchesController');

// /posts
router
    .route('/')
    .post(launchesController.createALaunches)
    .get(launchesController.listAllLaunches)

module.exports = router;