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
// PUT task update /api/goals/:id/:id
router.put('/update/:gid/:tid', goalsCtrl.updateTask);
// PUT task delete /api/goals/:id
router.put('/delete/:gid/:tid', goalsCtrl.deleteTask);
// PUT update goal desc
router.put('/editgoaldesc/:id', goalsCtrl.editDescription);

module.exports = router;