const { Router } = require('express');

const getUser = require('../controllers/getUser');
const updateUser = require('../controllers/updateUser');

const verifyToken = require('../../../middlewares/verifyToken');

const router = Router();

router.get('/:userId', verifyToken, getUser);
router.patch('/:userId', verifyToken, updateUser);

module.exports = router;
