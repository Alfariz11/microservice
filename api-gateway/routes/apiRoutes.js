const express = require('express');
const router = express.Router();
const { forwardRequest } = require('../controllers/apiController');

router.use('/users', forwardRequest('http://localhost:5001'));
router.use('/donations', forwardRequest('http://localhost:5002'));
router.use('/notifications', forwardRequest('http://localhost:5003'));

module.exports = router;
