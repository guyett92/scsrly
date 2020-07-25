const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/goals');

// GET /api/goals
router.get('/', goalsCtrl.getGoals);

module.exports = router;