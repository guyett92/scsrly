const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

router.use(require('../../config/auth'));

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.put('/:id/updatebio', usersCtrl.updateBio);


/*---------- Protected Routes ----------*/




module.exports = router;