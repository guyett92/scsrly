const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/goals');

// GET /api/goals
router.get('/', goalsCtrl.getGoals);
// POST /api/goals
router.post('/', goalsCtrl.create);

module.exports = router;