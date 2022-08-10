const express = require('express');
const appController = require('../controllers/appController');

const router = express.Router();

router.route('/').get(appController.getAllApps).post(appController.createApp);

module.exports = router;
