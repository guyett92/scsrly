const express = require('express');
const router = express.Router();
const goalsCtrl = require('../../controllers/goals');
router.use(require('../../config/auth'));

// GET /api/goals/ for a user
router.get('/getGoals', goalsCtrl.getGoals);
// GET /api/goals
router.get('/', goalsCtrl.index);
// POST /api/goals
router.post('/addgoal', goalsCtrl.create);

module.exports = router;