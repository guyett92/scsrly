const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/goals');
/* Require the authorization config as router middleware */
router.use(require('../../config/auth'));

// GET /api/goals/ for a user
router.get('/getGoals', goalsCtrl.getGoals);
// GET /api/goals
router.get('/', goalsCtrl.index);
// POST /api/goals
router.post('/addgoal', goalsCtrl.create);
// DELETE /api/goals/:id
router.delete('/:id', goalsCtrl.deleteGoal);

module.exports = router;