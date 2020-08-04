const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/goals');

// GET /api/goals
router.get('/goals', goalsCtrl.getGoals);
// POST /api/goals
router.post('/addgoal', goalsCtrl.create);

module.exports = router;